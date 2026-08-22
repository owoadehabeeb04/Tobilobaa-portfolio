class RateLimiter {
  private readonly requests: number[] = [];

  constructor(
    private readonly maxRequests = 12,
    private readonly timeWindowMs = 60_000
  ) {}

  canMakeRequest() {
    const now = Date.now();

    while (this.requests.length > 0 && now - this.requests[0] >= this.timeWindowMs) {
      this.requests.shift();
    }

    if (this.requests.length >= this.maxRequests) {
      return false;
    }

    this.requests.push(now);
    return true;
  }

  getWaitTimeSeconds() {
    const oldestRequest = this.requests[0];

    if (oldestRequest === undefined) {
      return 0;
    }

    return Math.max(
      0,
      Math.ceil((this.timeWindowMs - (Date.now() - oldestRequest)) / 1000)
    );
  }
}

export const chatRateLimiter = new RateLimiter();
