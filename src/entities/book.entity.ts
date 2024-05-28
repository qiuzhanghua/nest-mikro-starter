import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Book {
  @PrimaryKey()
  id!: number;

  @Property({ hidden: true }) // Equivalent of class-transformer's `@Exclude`
  hiddenField = Date.now();

  @Property({ persist: false }) // Similar to class-transformer's `@Expose()`. Will only exist in memory, and will be serialized.
  count?: number;
}
