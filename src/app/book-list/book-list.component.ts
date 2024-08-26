import { Component, OnInit } from '@angular/core';
import { book, ListBooks } from 'src/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:book[] = ListBooks;

  constructor() { }

  ngOnInit(): void {
  }

}
