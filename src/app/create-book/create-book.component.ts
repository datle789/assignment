import { Component, OnInit } from '@angular/core';
import { book } from 'src/models/book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  book: book = {
    id: 0,
    name: '',
    type: '',
    author: '',
    locked: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
