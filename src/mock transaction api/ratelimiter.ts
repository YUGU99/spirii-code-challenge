// rate-limiter.ts

export class RateLimiter {
  private readonly maxRequestsPerMinute: number;
  private requestCount: number;
  private lastRequestTimestamp: number;

  constructor(maxRequestsPerMinute: number) {
    this.maxRequestsPerMinute = maxRequestsPerMinute;
    this.requestCount = 0;
    this.lastRequestTimestamp = Date.now();
  }

  // Wait if needed to enforce rate limiting
  async waitIfNeeded(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTimestamp;
    const minTimeBetweenRequests = 60000 / this.maxRequestsPerMinute;

    if (timeSinceLastRequest < minTimeBetweenRequests) {
      // Calculate wait time
      
    }
    // Update last request timestamp 
    
  }

  // reset request count, check if within rate limit, etc.
  ResetRequestCount(requestCount:number){
    return newRequestCount;
  }


}
