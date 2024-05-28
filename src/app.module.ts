import { BetterSqliteDriver } from '@mikro-orm/better-sqlite';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: ':memory:',
      driver: BetterSqliteDriver,
      autoLoadEntities: true,
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
