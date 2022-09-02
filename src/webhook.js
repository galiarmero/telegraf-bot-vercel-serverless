const fastifyPlugin = require('fastify-plugin')
const { Telegraf } = require('telegraf')

module.exports = fastifyPlugin(async (app) => {
    const webhook = await app.bot.createWebhook({ domain: process.env.VERCEL_URL })
    app.post(app.bot.secretPathComponent(), (req, rep) => webhook(req.raw, rep.raw))
})
