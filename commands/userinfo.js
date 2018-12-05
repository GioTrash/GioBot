const Discord = require("discord.js");
const moment = require ("moment");

module.exports.run = async(bot, message, args) => {
    let user;
    if (message.mentions.user.first ()) {
        user = message.mentions.users.first();
    }else {
        user = message.author;
    }


    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : "none"}`, true)
    .addField("Bot", `${user.bot}`, true)
    .addField("Status", `${user.presence.status}`, true)
    .addField("Game", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Roles", member.roles.map(roles => `${roles.name}`). join(', '), true);
    
    message.channel.send({embed});
}

module.exports.help = {
    name:"userinfo"
}