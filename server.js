const express = require('express')
const redis = require('redis')
const bluebird = require('bluebird')
const config = require('./config')

const app = express()

const client = redis.createClient(config.redis.url)

bluebird.promisifyAll(redis)

app.get('/get', async (req, res) => {
  res.json(await client.getAsync('counter'))
})

app.post('/increment', async (req, res) => {
  res.json(await client.incrAsync('counter'))
})

app.listen(config.port)