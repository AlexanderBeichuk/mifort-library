import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/Book';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  public bookForm: FormGroup;

  public coverImage: Blob | string | File;
  public originalImage: SafeResourceUrl;
  public book: Book;
  private bookId: string;


  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private bookService: BooksService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');

      if (this.bookId) {
        this.bookService.getBook(this.bookId)
          .subscribe(book => {
            this.book = book;
            this.initForm(this.book);
            this.originalImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.book.image);
          });
      } else {
        this.book = new Book();
        this.initForm(this.book);
      }
    });
  }

  public handleUpdateAttachment(data): void {
    this.coverImage = data;
  }

  public cancel() {
    this.bookForm.reset();
    this.router.navigate(['']);
  }

  public save() {
    this.bookForm.reset();
    this.router.navigate(['']);
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
  }

}
