
const { Telegraf } = require('telegraf');

// El token se leerá de una variable de entorno
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', (ctx) => {
  if (ctx.message.from.username === 'Rubik_boss') {
    ctx.deleteMessage(ctx.message.message_id);
  }
});

bot.launch();
