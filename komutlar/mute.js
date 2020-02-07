﻿const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olman gerek.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`:x: Kullanıcıyı bulamıyorum.`)
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor('Hata').setDecription('Mute sebebini yazman gerek.').setColor('RANDOM'))
    let muterole = message.guild.roles.find(`name`, "Susturulmuş");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Susturulmuş",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Eylem: Mute')
            .addField('Kullanıcı', `<@${user.id}>`)
            .addField('Sebep', `${reason}`)
            .addField('Yetkili', `${mod}`)
            .setColor('RANDOM')
        message.channel.send(muteembed)
  
  
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: "Etiketlenen kişiye mute atar",
    usage: "mute [kullanıcı] [sebep]"
}