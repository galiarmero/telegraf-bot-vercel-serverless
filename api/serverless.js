const Fastify = require('fastify')
require('dotenv').config()

const app = Fastify({ logger: true })
app.register(require('../src/bot'))
app.register(require('../src/webhook'))

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}
