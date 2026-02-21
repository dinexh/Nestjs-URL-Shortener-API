// for connecting to the database
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'ep-falling-meadow-air9vocq-pooler.c-4.us-east-1.aws.neon.tech',
        port: 5432,
        username: 'neondb_owner',
        password: 'npg_Lj7ckzBOsRw1',
        database: 'neondb',
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
    }),
  ],
})
export class DatabaseModule {}
