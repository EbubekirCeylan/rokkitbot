const Discord = require("discord.js");

exports.run = async(client, message, args) => { 
    const Yapımcım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**» DİSCORD**", "ZyuzAx#8780 (`490082854773063681`)")
	.addField("**» FACEBOOK**", "https://facebook.com/ebubarbara")
	.addField("**» İNSTAGRAM**", "https://instagram.com/ebubekirbarbara")
	.addField("**» TWİTTER**", "https://twitter.com/ebubekirbarbara")
    message.channel.send(Yapımcım);

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcı",
  description: "Yapımcıyı gösterir.",
  usage: "yapımcı"
};