import { DomSanitizer } from '@angular/platform-browser';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  NgZone,
  Renderer2,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { ALLOWED_MIME_TYPES_IMAGE, UploadErrorType } from './image-uploader.model';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploaderComponent implements AfterViewInit, OnDestroy {
  @Input()
  public previewText = 'Upload image';
  @Input()
  public attachment: any;
  @Input()
  public acceptTypes: string = ALLOWED_MIME_TYPES_IMAGE.join(',');
  @Input()
  public maxSize = 0.5; // MB
  @Input()
  public showInvalid = false;
  @Input()
  public isValid = true;
  @Output()
  public updateAttachment = new EventEmitter<Blob>();
  @Output()
  public uploadError = new EventEmitter<any>();

  @ViewChild('fileRef') public fileRef: ElementRef;
  @ViewChild('dropImageContainer') public dropImageContainerRef: ElementRef;

  private listenersFn: any[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private zone: NgZone,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer
  ) {}

  public ngAfterViewInit(): void {
    this.initListners();
  }

  public ngOnDestroy(): void {
    this.listenersFn.forEach(itemFn => itemFn());
  }

  public handleDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  public handleDropFile = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    const {
      dataTransfer: { files }
    } = event;
    this.fileRef.nativeElement.files = files;
    this.fileUploader(files);
  }

  public handleChangeImage = ({ target }: Event): void => {
    const { files } = target as any;
    this.fileUploader(files);
  }

  private converterSizeFile(size: number): number {
    return size / 1048576; // to MB
  }

  private validateTypeFile(type: string): boolean {
    return this.acceptTypes.includes(type);
  }

  private initListners(): void {
    this.zone.runOutsideAngular(() => {
      this.listenersFn.push(
        this.renderer.listen(this.dropImageContainerRef.nativeElement, 'dragover', this.handleDragOver)
      );

      this.listenersFn.push(
        this.renderer.listen(this.dropImageContainerRef.nativeElement, 'drop', this.handleDropFile)
      );

      this.listenersFn.push(this.renderer.listen(this.fileRef.nativeElement, 'change', this.handleChangeImage));
    });
  }

  private fileUploader(files: FileList): void {
    const fileUpload = files.item(0);
    if (!fileUpload) {
      return;
    }

    const { type, size } = fileUpload;
    if (this.converterSizeFile(size) > this.maxSize) {
      this.uploadError.emit({
        errorType: UploadErrorType.maxSize
      });
      this.attachment = null;
      this.updateAttachment.emit(null);
      return;
    }

    if (!this.validateTypeFile(type)) {
      this.uploadError.emit({
        errorType: UploadErrorType.typeFile
      });
      this.attachment = null;
      this.updateAttachment.emit(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = ({ target: { result } }: any) => {
      this.attachment = this.domSanitizer.bypassSecurityTrustUrl(result);
      this.updateAttachment.emit(fileUpload);
      this.changeDetector.detectChanges();
    };

    reader.onerror = () => {
      this.attachment = null;
      this.updateAttachment.emit(null);
    };

    reader.readAsDataURL(fileUpload);
  }
}
