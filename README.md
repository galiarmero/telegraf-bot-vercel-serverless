# telegraf-bot-vercel-serverless

A bare-bones Node.js Telegram bot template.

📣 Built with [Telegraf](https://github.com/telegraf/telegraf)<br>
⚡ Spun up using [Fastify](https://github.com/fastify/fastify)<br>
🚀 Hosted on [Vercel](https://vercel.com) as a serverless function<br>

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgaliarmero%2Ftelegraf-bot-vercel-serverless&env=BOT_TOKEN&envDescription=Token%20provided%20by%20%40BotFather%20to%20access%20the%20Telegram%20API)

When prompted to provide the `BOT_TOKEN` environment variable, paste the token provided by `@BotFather` upon creation of the new bot.

## How it works

```
├── api
│   └── serverless.js
├── src
│   ├── bot.js
│   └── webhook.js
└── vercel.json
```

1.  `vercel.json` - Funnels requests on any path (`/(.*)`) to the handler function exported by `/api/serverless.js`.
2. `/api/serverless.js` - Creates a Fastify app with two functionalities (described below): `bot` and `webhook`. It then exports a function accepting requests from Vercel and routes them to the Fastify app.
3. `/src/bot.js` - Creates a Telegraf `bot` object, adds its behavior, and attaches the `bot` object to the `app` so `webhook` can access it
4. `/src/webhook.js` - Routes POST requests on the secret path to the webhook callback obtained from the Telegraf `bot`. This essentially hooks the webhook requests to the bot's behavior.
