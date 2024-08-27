import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDto } from 'src/models/books/book.dto';
import { BookService } from 'src/services/books/book.services';

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

  constructor(private bookService: BookService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');

      if (id) {
        const bookId = Number(id);
        this.bookService.getBookById(bookId).subscribe({
          next: (result) => (this.book = result),
          error: (err) => console.error('error loading employee', err),
        });
      }
    });
  }

}
