const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    let user = args[0];
  
    if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
    if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
    message.guild.unban(user);


    const embed= new Discord.RichEmbed()
    .setDescription("Unbanned user")
    .setColor("#15f153")
    .addField("User", `${user.username}`)
    .addField("Unbanned", `${bUser} With ID ${Buser.id}`)
    
    message.channel.send({embed});
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'unban',
    description: 'Unbans the user.',
    usage: 'unban [mention] [reason]'
  };
