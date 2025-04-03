import { Controller, Post, Get, Param, Body, Res, NotFoundException } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shortenUrl(@Body('originalUrl') originalUrl: string) {
    return this.urlService.createShortUrl(originalUrl);
  }

  @Get(':shortUrl')
  async redirectToOriginal(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const url = await this.urlService.findOriginalUrl(shortUrl);
    if (!url) {
      throw new NotFoundException('URL not found');
    }
    return res.redirect(url.originalUrl); 
  }
}
