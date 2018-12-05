const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(args[0] == "help"){
    message.reply("Usage: <prefix> report <user> <reason>");
    return;
  }
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return errors.cantfindUser(message.channel);
  let rreason = args.join(" ").slice(22);
  if(!rreason) return errors.noReason(message.channel);

  const embed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#e89209")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rreason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
  
  message.channel.reportschannel.send({embed});

}

module.exports.help = {
  name: "report"
}
