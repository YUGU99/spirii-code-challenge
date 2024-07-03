import { Injectable } from '@nestjs/common';

@Injectable()
export class RateLimiter {
  private limiter; //!!!what ratelimiter should be used? 

  constructor() {
    this.limiter({
      minTime: (60/5*1000), // 5 requests per minute -> 1 request every 12 seconds
      maxConcurrent: 1,
    });
  }

  public async schedule<T>(fn: () => Promise<T>): Promise<T> {
    return this.limiter.schedule(fn);
  }
}
