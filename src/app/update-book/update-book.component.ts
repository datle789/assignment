import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookTypeEnum } from 'src/enums/book-type.enum';
import { BookDto, ListBooks } from 'src/models/books/book.dto';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  bookTypes = BookTypeEnum;
  book: BookDto = {
    id: 0,
    name: '',
    type: '',
    author: '',
    locked: false,
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');

      if (id) {
        const bookId = Number(id);
        this.book  = ListBooks.find((b) => b.id == bookId) || this.book;
      }
    });
  }

  onSubmit(): void {
    if (this.book) {
      alert(`Book Updated: ${JSON.stringify(this.book)}`);
      // Implement logic to update the book data
      console.log('Book Updated:', this.book);
    }
  }
}
