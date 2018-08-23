const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () 
    console.log('Logado');
});
bot.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
 
  let canal = member.guild.channels.find(`name`, "📥entrada");
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setDescription(`🎈 **Olá ${member}, seja bem-vindo ao Discord oficial da Rede Ghost!**
  » **IP:** ghostminigames.com
  » **IP:** ghostsurvival.com
  » **Twitter:** https://twitter.com/ServidoresGhost
  » **Loja:** https://loja.redeghost.com/
  » **Site:** https://www.redeghost.com/`)
  .setThumbnail(member.user.displayAvatarURL)
  canal.send({embed : embed})
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
