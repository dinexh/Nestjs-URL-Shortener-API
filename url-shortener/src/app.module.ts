// root file
import { ImATeapotException, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import {Url } from './url.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';


@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Url])], 
  controllers: [AppController , UrlController],
  providers: [AppService , UrlService],

})
export class AppModule {}
