import { Module } from '@nestjs/common';
import { JournalModule } from './app/journal.module';
import { JournalEntity } from './app/journal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_INSTANCE_UNIX_SOCKET, // Cloud SQL instance connection
      port: parseInt(process.env.POSTGRES_DB_PORT, 10),
      username: process.env.POSTGRES_DB_USER,
      password: process.env.POSTGRES_DB_PASS,
      database: process.env.POSTGRES_DB_NAME,
      entities: [JournalEntity],
      synchronize: true,
    }),

    JournalModule,
  ],
})
export class AppModule {}
