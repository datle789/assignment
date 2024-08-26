export class BookDto {
  id!: number;
  name!: string;
  type!: string;
  author!: string;
  locked!: boolean;
}

export const ListBooks: BookDto[] = [
  {
    id: 1,
    name: 'Book abc',
    type: 'English',
    author: 'Nguyen Van A',
    locked: true,
  },
  {
    id: 2,
    name: 'Programming Book',
    type: 'Programming',
    author: 'Pham Thi B',
    locked: true,
  },
  {
    id: 3,
    name: 'IELTS Book',
    type: 'English',
    author: 'British Council',
    locked: false,
  },
  {
    id: 4,
    name: 'Math Book',
    type: 'Programming',
    author: 'Teacher',
    locked: false,
  },
];
