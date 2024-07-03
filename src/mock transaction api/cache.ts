import { Injectable } from '@nestjs/common';

@Injectable()
export class Cache {
  private cache: Map<string, any> = new Map();
  constructor() {
    this.cache = new Map<string, any>();
  }

  //methods:
  //get data from cache
  //store data from cache
  //remove frm cache

  //clear cache
  //...
}
