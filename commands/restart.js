const Discord = require('discord.js');
exports.run = (message, bot) => {
    message.channel.send("Restarting...").then(m => {
        m.delete().then(() => {
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
