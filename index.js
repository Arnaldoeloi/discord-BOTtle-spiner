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

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

// returns random key from Set or Map
function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    console.log(command);

    if(command === 'spin'){
        // console.log(message.guild.presences);
        users = message.channel.members;
        console.log(getRandomKey(users));
        
        message.channel.send(`${message.author} spinned the bottle. The bottle is poiting towards ${users.get(getRandomKey(users))}`)
    }

    // if(command === 'args-info'){
    //     if(!args.length){
    //         return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    //     }else if (args[0] === 'foo'){
    //         return message.channel.send('bar');
    //     }

    //     message.channel.send(`First argument:  ${args[0]}\n`);
    //     message.channel.send(`Command name:  ${command}\nArguments: ${args}`);
    // }
    
});