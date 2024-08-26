import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDto, ListBooks } from 'src/models/books/book.dto';


let idCounter = ListBooks.length;

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;

  // book: BookDto = {
  //   id: 0,
  //   name: '',
  //   type: '',
  //   author: '',
  //   locked: false,
  // };

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      locked: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: BookDto = {
        id: ++idCounter,
        ...this.bookForm.value,
      };
      alert(`Book Created: ${JSON.stringify(newBook)}`);
      console.log('Book Created:', newBook);
    }
  }

}
