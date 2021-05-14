const {Client, RichEmbed} = require('discord.js') ;
const Discord = require('discord.js');
const client = new Client ;
const {token} = require('./settings.json') ;
var SetCount = 30;
var _count = SetCount
var BOT_Embed = false;
var message_id;


//字典
var Item = require('./Item.json');
var CLOEmoji_ID =Object.keys(Item);
var length = CLOEmoji_ID.length;


let CLO_embed = new Discord.MessageEmbed()
.setTitle("[點選Emoji就能拿到道具名稱了哦]")
.setURL("https://closers.nexon.com/Main/Index")
.setDescription("```[翻譯列表-道具名稱會顯示在這邊哦]```")
.setColor("RANDOM")
.setTimestamp()
.setFooter("By Miisu | 要耐心等待一下哦，延遲比較重G_G","https://i.imgur.com/bqHT3Mp.png")
.setThumbnail("https://i.imgur.com/eJNvuBH.png")
.setAuthor("封印者道具翻譯","https://i.imgur.com/5yOdbez.png","https://closers.nexon.com/Main/Index")

    
client.on('ready', () => {
    console.log(`${client.user.tag} 準備好上戰場惹！～`);
});


client.on('message', message => {
	if (message.content === '!查詢') {
	BOT_Embed = true
	message_1 = 
        message.channel.send(CLO_embed).then(msg => msg.edit(CLO_embed.setDescription("```[翻譯列表-道具名稱會顯示在這邊哦]```")
	.setThumbnail("https://i.imgur.com/eJNvuBH.png").setTimestamp()))
    }
    if(BOT_Embed && message.author.bot){
	BOT_Embed = false;
	message_id = message.id;
        for (var i = 0; i < length; i++) {
        message.react(CLOEmoji_ID[i]);
        }
    }
	if(message.content === '!次數') {
	message.channel.send('總共被使用了'+_count+'次!')
	}
})

client.on('message',msg=>{
	if(msg.content.startsWith('醜櫻') || msg.content.startsWith('羽櫻好醜')|| msg.content.startsWith('噁櫻')){
		msg.react('802478923073585212');
		msg.react('802488806192185373');
		msg.react('802478922641571850');
	}
}) ;


client.on('messageReactionAdd', (messageReaction, user) => {
    if(user.bot)  return;
    const { message, emoji} = messageReaction;
    if(!(message_id == message.id)) return;


    message.edit().then(msg=>{
        msg.edit(CLO_embed.setDescription("```[加載中Loading....]```").setThumbnail("https://i.imgur.com/eJNvuBH.png").setTimestamp())
    })


    if(Item.hasOwnProperty(emoji.id) && !(emoji.id == "842757425739333683")){
        _count++
        message.edit().then(msg=>{
            msg.edit(CLO_embed.setDescription("```"+Item[emoji.id]+"```").setThumbnail("https://cdn.discordapp.com/emojis/"+emoji.id+".png"))
        })
    }
    else
    {
        _count++
        message.edit().then(msg=>{
            msg.edit(CLO_embed.setDescription("<@"+user.id+">"+"```你按這個是要衝3小```").setThumbnail("https://cdn.discordapp.com/emojis/"+emoji.id+".png"))
        })
    }

});

client.login(process.env.BOT_TOKEN) ;
