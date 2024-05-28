import { Injectable } from '@nestjs/common';
import { EntityManager, MikroORM } from '@mikro-orm/better-sqlite';
@Injectable()
export class AppService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {
    orm.schema.refreshDatabase(); // Don't use this in production
  }

  getHello(): string {
    return 'Hello World!';
  }
}
