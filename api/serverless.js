const Fastify = require('fastify')
require('dotenv').config()

const app = Fastify({ logger: true })
app.register(require('../src/bot'))
app.register(require('../src/webhook'))
app.get('/',  (req, rep) => rep.send(
  'Hi! I am a Telegram bot server 🤖\n' +
  'The webhook is hidden in a secret path that only the bot knows 🦾'
))

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}
