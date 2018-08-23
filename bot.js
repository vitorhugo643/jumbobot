const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    bot.user.setPresence({ game: { name: `Estou em desenvolvimento! 'https://www.youtube.com/yRecky'} });
    console.log('Logado');
});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1);
if(cmd === 'x!anuncio'){
    const args = message.content.split(" ").slice(1);
    const prefix = 'x!'
    message.delete()
    if (!args.slice(0).join(' ')) return message.channel.send('test')
    message.channel.send({embed:{
        'description':args.slice(0).join(' ')
        ,'color':message.member.highestRole.color,
        "thumbnail":{
            }
        }
    }
    )
}
});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1)
    if(cmd === '/ban'){
        const args = message.content.split(" ").slice(1);
        var razao = args.slice(1).join(" ")
            var membro = message.mentions.members.first();
            if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
            if(!membro) return message.reply("você não mencinou ninguém")
            if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
            if(razao.length < 1) return message.reply("Coloque um motivo!")
            membro.ban()
            message.channel.send(`O membro ${membro.user.username} foi banido do servidor.\nMotivo: ${razao}`)
      }
});
client.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('x!twitter')){
        message.channel.send('Twitter:  https://twitter.com/ServidoresGhost');
    }
    if (message.content.startsWith('x!ip')){
        message.channel.send('Nosso ip é: ghostminigames.com ou ghostsurvival.com');
    }
    if (message.content.startsWith('x!comandos')){
        message.channel.send('Meus comandos são: /twitter - /loja - /ip')
    }
    if (message.content.startsWith('x!loja')){
        message.channel.send('Em desenvolvimento!');
    }
});
client.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
 
  let canal = member.guild.channels.find(`name`, "📥entrada");
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setDescription(`🎈 **Olá ${member}, seja bem-vindo ao Discord oficial do JumboBR`)
  .setThumbnail(member.user.displayAvatarURL)
  canal.send({embed : embed})
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
