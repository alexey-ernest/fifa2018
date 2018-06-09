/**
 * Telegram API client.
 */

const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = '608809071:AAGtifydgRjxN_KGmOSDTu0WdKN0y9icgGE';
const CHAT_ID = -295098895;

const bot = new TelegramBot(BOT_TOKEN);

const broadcast = (msg) => {
	bot.sendMessage(CHAT_ID, msg);
};

module.exports = {

  broadcast: broadcast

};
