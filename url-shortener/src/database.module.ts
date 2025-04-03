// for connecting to the database
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'REDACTED', 
        database: 'nest_url_shortener',
        autoLoadEntities: true,
        synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
