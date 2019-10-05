module.exports = {
  express: {
    PORT: process.env.EXPRESS_PORT || 3000
  },
  redis: {
    HOST: process.env.REDIS_HOST || '127.0.0.1',
    PORT: process.env.REDIS_PORT || 6379
  }
}