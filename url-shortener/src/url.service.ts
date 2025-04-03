import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import * as shortid from 'shortid';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async createShortUrl(originalUrl: string): Promise<Url> {
    const shortUrl = shortid.generate(); 
    const url = this.urlRepository.create({ originalUrl, shortUrl });
    return this.urlRepository.save(url);
  }

  async findOriginalUrl(shortUrl: string): Promise<Url | null> {
    return this.urlRepository.findOne({ where: { shortUrl } });
  }
}
