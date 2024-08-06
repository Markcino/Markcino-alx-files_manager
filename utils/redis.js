import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient({
      url: 'redis://127.0.0.1:6379'
    });

    this.client.on('error', (err) => {
      console.error('Redis client not connected to the server:', err);
    });

    this.client.on('connect', () => {
      console.log('Redis client connected to the server');
    });

    this.client.connect().catch((err) => {
      console.error('Redis connection error:', err);
    });
  }

  async get(key) {
    return await this.client.get(key);
  }

  async set(key, value) {
    return await this.client.set(key, value);
  }
}

export default new RedisClient();
