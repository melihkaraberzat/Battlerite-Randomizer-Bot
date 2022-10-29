const {Client,GatewayIntentBits} = require('discord.js');
require('dotenv/config');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})
let oyuncular = ["Melih","Kerem","Ege","Eren","Batu","Güney"];
let melee= ["Bakko", "Croak", "Freya", "Jamila", "Raigon", "Rook", "Ruh Kaan", "Shifu", "Thorn" ]
let ranged = ["Alysia", "Ashka","Destiny", "Ezmo", "Iva", "Jade", "Jumong", "Shen Rao", "Taya", "Varesh"]
let support = ["Blossom", "Lucie", "Oldur", "Pearl", "Pestilus", "Poloma", "Sirius", "Ulric", "Zander"]
let siniflar = [melee, ranged, support]



client.on('ready',()=>{
    console.log('Bot hazır.')
})
client.on('messageCreate',async message=>{
    if(message.content==='!random'){
        
        let sinif =siniflar[Math.floor(Math.random()*siniflar.length)]
        siniflar.forEach(sinif => {
            secilenOyuncu = oyuncular[Math.floor(Math.random()*oyuncular.length)];
            message.channel.send(secilenOyuncu+" "+"-->"+" "+sinif[Math.floor(Math.random()*sinif.length)]);
            const index = oyuncular.indexOf(secilenOyuncu);
            oyuncular.splice(index,1);
        });
        
        message.channel.send("-------------------")
        
        siniflar.forEach(sinif => {
            secilenOyuncu = oyuncular[Math.floor(Math.random()*oyuncular.length)];
            message.channel.send(secilenOyuncu+" "+"-->"+" "+sinif[Math.floor(Math.random()*sinif.length)]);
            const index = oyuncular.indexOf(secilenOyuncu);
            oyuncular.splice(index,1);
        });
        siniflar =[melee,ranged,support];
        oyuncular = ["Melih","Kerem","Ege","Eren","Batu","Güney"];
        
       
    }
})
client.login(process.env.TOKEN)