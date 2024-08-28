import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from 'src/services/books/book.services';
import { CreateBookComponent } from './create-book.component';
import { of } from 'rxjs';
import { BookDto } from 'src/models/books/book.dto';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;
  let bookService: jasmine.SpyObj<BookService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BookService', ['createBook']);

    await TestBed.configureTestingModule({
      declarations: [CreateBookComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: BookService, useValue: spy }],
    }).compileComponents();

    bookService = TestBed.inject(BookService) as jasmine.SpyObj<BookService>;
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a book and navigate', () => {
    bookService.createBook.and.returnValue(of({} as BookDto));

    // Simulate filling out the form
    component.bookForm.setValue({
      name: 'Test Book',
      type: 'Programming', // Ensure this matches a valid enum value
      author: 'Test Author',
      locked: false,
    });

    // Trigger the form submission
    component.onSubmit();

    // Expect that the form is valid and the service was called
    expect(component.bookForm.valid).toBeTrue();
    expect(bookService.createBook).toHaveBeenCalled();
  });
});
