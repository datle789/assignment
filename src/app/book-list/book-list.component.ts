import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookTypeEnum } from 'src/enums/book-type.enum';
import { BookDto, ListBooks } from 'src/models/books/book.dto';
import { BookService } from 'src/services/books/book.services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];
  bookTypeEnum = BookTypeEnum;
  constructor(private bookService: BookService,private router:Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = [...ListBooks]; // Load the mock data
  }
}
