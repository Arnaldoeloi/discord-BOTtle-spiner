const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();
const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    console.log(command);

    if(command === 'args-info'){
        if(!args.length){
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }else if (args[0] === 'foo'){
            return message.channel.send('bar');
        }

        message.channel.send(`First argument:  ${args[0]}\n`);
        message.channel.send(`Command name:  ${command}\nArguments: ${args}`);
    }
    
});