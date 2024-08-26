import { Component, OnInit } from '@angular/core';
import { book } from 'src/models/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  book: book = {
    id: 0,
    name: '',
    type: '',
    author: '',
    locked: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
