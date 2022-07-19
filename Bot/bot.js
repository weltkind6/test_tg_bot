const { Telegraf } = require('telegraf')

const TOKEN = '5465423691:AAEkvM_2SXMs3PaE1zGhBX9YNx7CPC3H6Vo'
const bot = new Telegraf(TOKEN)
const webLink = 'https://62d59e38031073229ddbcf71--eloquent-naiad-161a6a.netlify.app/'

bot.start((ctx) => ctx.reply('Welcome my friend', {
    reply_markup: {keyboard: [[{text: 'web app', web_app: {url: webLink}}]]}
}))
bot.launch()