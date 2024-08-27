import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookTypeEnum } from 'src/enums/book-type.enum';
import { BookDto } from 'src/models/books/book.dto';
import { BookService } from 'src/services/books/book.services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];
  bookTypeEnum = BookTypeEnum;
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: BookDto[]) => {
      this.books = data;
    });
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data: BookDto[]) => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: (response) => {
        this.books = this.books.filter((e) => e.id != id);
      },
      error: (err) => {
        console.log('error deleting employee', err);
      },
    });
  }
}
