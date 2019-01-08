const Discord = require('discord.js');

exports.run = (message, bot) => {
    message.channel.send("Restarting...").then(msg => {
        msg.delete().then(() => {
            bot.destroy().then(() => {
                process.exit(1)
            })
        })
    })
}

exports.help = {
    name:"restart",
    description:"Restarts the bot"
}