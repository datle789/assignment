import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTypeEnum } from 'src/enums/book-type.enum';
import { BookDto } from 'src/models/books/book.dto';
import { BookService } from 'src/services/books/book.services';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  bookForm!: FormGroup;
  bookTypes = BookTypeEnum;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      locked: [false],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: BookDto = this.bookForm.value;
      this.bookService.createBook(newBook).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (err) => {
          console.error('Error creating book:', err);
        },
      });
    }
  }
}
