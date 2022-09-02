const fastifyPlugin = require('fastify-plugin')
const { Telegraf } = require('telegraf')


module.exports = fastifyPlugin(async (app) => {
    const bot = new Telegraf(process.env.BOT_TOKEN)

    bot.start((ctx) => ctx.reply('Welcome'))
    bot.help((ctx) => ctx.reply('Send me a sticker'))
    bot.on('sticker', (ctx) => ctx.reply('👍'))
    bot.on('text', (ctx) => ctx.reply('Hello'))

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))

    app.decorate('bot', bot)
})
