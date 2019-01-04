const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530867302413893644")
setInterval(function() {
channel.send(`بوووم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
