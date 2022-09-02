const fastifyPlugin = require('fastify-plugin')
const { Telegraf } = require('telegraf')

module.exports = fastifyPlugin(async (app) => {
    const webhook = await app.bot.createWebhook({ domain: process.env.VERCEL_URL })
    const webhookPath = `/telegraf/${app.bot.secretPathComponent()}`
    app.post(webhookPath, (req, rep) => webhook(req.raw, rep.raw))
})
