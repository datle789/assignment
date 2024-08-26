import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDto, ListBooks } from 'src/models/books/book.dto';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  book: BookDto = {
    id: 0,
    name: '',
    type: '',
    author: '',
    locked: true,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');

      if (id) {
        const bookId = Number(id);
        this.book = ListBooks.find((b) => b.id == bookId) || this.book;
      }
    });
  }

}
