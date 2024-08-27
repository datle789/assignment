import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTypeEnum } from 'src/enums/book-type.enum';
import { BookDto } from 'src/models/books/book.dto';
import { BookService } from 'src/services/books/book.services';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');
      if (id) {
        const bookId = Number(id);
        this.bookService.getBookById(bookId).subscribe((book) => {
          if (book) {
            this.book = book;
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.book) {
      this.bookService.editBook(this.book).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (err) => {
          console.error('Error updating book:', err);
        },
      });
    }
  }
}
