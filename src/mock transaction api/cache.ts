import { Injectable } from '@nestjs/common';

@Injectable()
export class Cache {
  private cache: Map<string, any> = new Map();
  private ttl: number = 60000; // 1 minute TTL for cache

  public get(key: string) {
    const cached = this.cache.get(key);
    if (cached && (Date.now() - cached.timestamp) < this.ttl) {
      return cached.data;
    } else {
      this.cache.delete(key);
      return null;
    }
  }

  public set(key: string, data: any) {
    this.cache.set(key, { data, timestamp: Date.now() });
  }
}
