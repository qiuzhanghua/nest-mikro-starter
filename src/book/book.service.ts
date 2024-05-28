import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { MikroORM, EntityManager } from '@mikro-orm/core';
import { Book } from 'src/entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}

  findAll() {
    return this.em.findAll(Book); // Pass the necessary parameters to the findAll method
  }

  create(createBookDto: CreateBookDto) {
    const book = this.em.create(Book, createBookDto);
    this.em.persist(book);
    return book;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.em.findOneOrFail(Book, id).then((book) => {
      this.em.assign(book, updateBookDto);
      this.em.persist(book);
      return book;
    });
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
