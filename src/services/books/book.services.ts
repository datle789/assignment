import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDto } from 'src/models/books/book.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = `${environment.BaseUrl}/Book`;
  // private apiUrl = `${environment.BaseUrl}/Books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<BookDto> {
    return this.http.get<BookDto>(`${this.apiUrl}/${id}`);
  }

  createBook(bookDto: BookDto): Observable<BookDto> {
    return this.http.post<BookDto>(this.apiUrl, bookDto);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  editBook(bookDto: BookDto): Observable<BookDto> {
    return this.http.put<BookDto>(`${this.apiUrl}/${bookDto.id}`, bookDto);
  }
}
