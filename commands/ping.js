const Discord = require ("discord.js");


module.exports.run = async(bot, message, args) => {
    const msg = await message.channel.send("ping?").then((msg)=>{
        msg.edit(`Pong! Latency is ${m.createdTimeStamp - message.createdTimeStamp}ms. API latency is${Math.round(client.ping)}ms`);
    });
   
}

module.exports.help = {
    name:"ping"
}