onst Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("524624748047499264");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To NIX NetWork**`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
