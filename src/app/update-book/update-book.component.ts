import { Component, OnInit } from '@angular/core';
import { book } from 'src/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
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
