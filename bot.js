const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () 
    console.log('Logado');
});
bot.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, eu sou i filho do jumbo<3!');
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
