const Fastify = require('fastify')
require('dotenv').config()
const bot = require('../src/bot')

const app = Fastify({ logger: true })

const webhook = await bot.createWebhook({ domain: webhookDomain })

app.post(bot.secretPathComponent(), (req, rep) => webhook(req.raw, rep.raw))

module.exports = async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}
