const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**❯ BOTU SUNUCUNA AL!**", " [Tıkla Ve Sunucuna Al](https://discordapp.com/oauth2/authorize?client_id=673564661932752978&scope=bot&permissions=2146958847)", )
    .addField("**❯ DESTEK SUNUCUSU!**", " [Sunucuya Girmek İçin Tıkla](https://discord.gg/YTyJf7G)", )
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Normal davetin gelişmiş hali.',
  usage: 'davet'
};