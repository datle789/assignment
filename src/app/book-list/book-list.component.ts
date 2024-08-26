import { Component, OnInit } from '@angular/core';
import { BookTypeEnum } from 'src/enums/book-type.enum';
import { BookDto, ListBooks } from 'src/models/books/book.dto';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];
  bookTypeEnum = BookTypeEnum;
  constructor() {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = [...ListBooks]; // Load the mock data
  }
}
