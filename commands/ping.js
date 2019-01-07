const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send("ping?").then(({msg}) => {
        (`Pong! Latency is ${msg.createdTimeStamp - message.createdTimeStamp}ms. API latency is${Math.round(bot.ping)}ms`);
    })
}

module.exports.help = {
    name: "ping"
}
