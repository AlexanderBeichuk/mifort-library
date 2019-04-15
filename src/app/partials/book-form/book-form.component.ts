import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/Book';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BookDTO } from '../../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Input()
  public book: Book;

  @Output()
  public onDataChange = new EventEmitter<BookDTO>();

  public bookForm: FormGroup;
  public coverImage: Blob | string | File;
  public originalImage: SafeResourceUrl;

  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    if (this.book) {
      this.initForm(this.book);
      this.originalImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.book.image);
    } else {
      this.book = new Book();
      this.initForm(this.book);
    }
  }

  public handleUpdateAttachment(data): void {
    this.coverImage = data;
  }

  private initForm(book: Book): void {
    this.bookForm = this.formBuilder.group({
      title: new FormControl(book.title, Validators.required),
      description: new FormControl(book.description, Validators.required),
      published: new FormControl(book.publishedDate, Validators.required),
      author: new FormControl(book.author, Validators.required),
      pages: new FormControl(book.pages),
      isbn: new FormControl(book.isbn),
    });

    this.bookForm.valueChanges.subscribe(newBook => {
      this.onDataChange.emit(newBook);
    });
  }

}
