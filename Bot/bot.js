const { Telegraf } = require('telegraf')

const TOKEN = '5310564820:AAHLX4O0Pwr3iPc0XW1PtVIf1dcF30rJqBo'
const bot = new Telegraf(TOKEN)
const webLink = 'https://62d680ef0028f9744a9a63e3--venerable-kelpie-e68d2c.netlify.app/'

bot.start((ctx) => ctx.reply('Welcome my friend', {
    reply_markup: {keyboard: [[{text: 'web app', web_app: {url: webLink}}]]}
}))
bot.launch()