const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor('RANDOM')
  .addField("** :four_leaf_clover: KOMUTLAR :four_leaf_clover:**", `Bot yeni olduğu için pek fazla komut bulunmamaktadır. Arada bot kapanabilir bakımda olduğu için hatalarımız da olabilir. Lütfen @ZyuzAx#8780 adlı bot geliştiricisine bildirin.`)
  .addField("**» r!sil**", "Belirlediğiniz sayı kadar mesaj siler. | Doğru kullanım: `r!sil <sayı>`")
  .addField("**» r!duyuru**", "Duyuru yapar. | Doğru kullanım: `r!duyuru #kanal <duyuru metni>`")
  .addField("**» r!ping**", "Botun pingini gösterir. | Doğru kullanım: `r!ping`")
  .addField("**» r!davet**", "Botun davet linklerini size özel mesaj atar. | Doğru kullanım: `r!davet`")
  .addField("**» r!istatistik**", "Bot hakkında bilgi verir. | Doğru kullanım: `r!istatistik, r!botbilgi`")
  .addField("**» r!banner**", "Yazıyı banner'a çevirir. | Doğru kullanım: `r!banner <yazmak istediğiniz şey>`")
  .addField("**» r!google**", "Google'da arama yapmanızı sağlar. | Doğru kullanım: `r!google <aramak istediğiniz şey>`")
  .addField("**» r!ban**", "Belirtilen kullanıcıyı sunucudan atar. | Doğru kullanım: `r!ban <@Kullanıcı> <Sebep>`")
  .addField("**» r!mute**", "Belirtilen kullanıcıyı susturur. | Doğru kullanım: `r!mute <@Kullanıcı> <Sebep>`")
  .addField("**» r!oylama**", "Oylama yapmanızı sağlar. | Doğru kullanım: `r!oylama <yazı> `")
  .addField("**» r!mcödül**", "Yazdığınız yazıyı size Minecraft Ödülü olarak banner şeklinde verir. | Doğru kullanım: `r!mcödül <ödül metni>`")
  .addField("**» r!kullanıcı**", "Etiketlenen kullanıcı hakkında bilgi verir. | Doğru kullanım: `r!kullanıcı <@Kullanıcı>`")
  .addField("**» Botun Yardım Sunucusu (Support Server)**", "[Yardım Sunucusu](https://discord.gg/YTyJf7G)")
  .addField("**» Botun Davet Linki **", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=673564661932752978&scope=bot&permissions=2146958847)")
  .setFooter('RokkitBot Güncel Sürüm [ BETA v0.0.1  ]')
if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};