const Fastify = require('fastify')
require('dotenv').config()

const app = Fastify({ logger: true })
app.register(require('../src/bot'))
app.register(require('../src/webhook'))
app.get('/',  (req, rep) => rep.send(
  'Hi! This is a Telegram bot server 🤖\n' +
  '📣 Built with Telegraf\n' +
  '⚡ Spun up using Fastify\n' +
  '🚀 Hosted on Vercel\n' +
  'The webhook is hidden in a secret path that only Telegram knows 🦾'
))

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}
