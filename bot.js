const {Client, RichEmbed} = require('discord.js') ;
const Discord = require('discord.js');
const client = new Client ;
const {token} = require('./settings.json') ;
var BOT_Embed = false;
var message_id;


//字典
var Item = require('./Item.json');
var CLOEmoji_ID =Object.keys(Item);
var length = CLOEmoji_ID.length;

//關鍵詞
var key_word = require('./key_word.json');


let CLO_embed = new Discord.MessageEmbed()
.setTitle("[點選Emoji就能拿到道具名稱了哦]")
.setURL("https://closers.nexon.com/Main/Index")
.setDescription("```[翻譯列表-道具名稱會顯示在這邊哦]```")
.setColor("RANDOM")
.setTimestamp()
.setFooter("By Miisu | 要耐心等待一下哦，延遲比較重G_G","https://i.imgur.com/zNnxWMA.png")
.setThumbnail("https://i.imgur.com/eJNvuBH.png")
.setAuthor("封印者道具翻譯","https://i.imgur.com/5yOdbez.png","https://closers.nexon.com/Main/Index")

var Meme_Emoji=[
'802478923073585212','802488806192185373',
'802478922641571850','800773783774298153',
'748953338841792542','802478922872389653',
'800773782041788467','828263463817314374'
]  
var Me_length = Meme_Emoji.length;

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
	if(message.content === '!test') {
	message.channel.send('嗶嗶逼 我是機器人!')
	}
})

client.on('message',msg=>{
	if(msg.content.includes('星爆')){
	msg.react('853276975463923752');
	msg.react('853276990327750686');
	}
}) ;

client.on('message',msg=>{
	for (var i in key_word){
		if((msg.content.includes(key_word[i].key)){
		   	for (var i = 0; i < Me_length; i++) {
			msg.react(Meme_Emoji[i]);
		}
	}
}
}) ;


client.on('messageReactionAdd',(messageReaction, user) => {
    if(user.bot)  return;
    const { message, emoji} = messageReaction;
    if(!(message_id == message.id)) return;


    message.edit(CLO_embed).then(msg=>{
       msg.edit(CLO_embed.setDescription("```[加載中Loading....]```").setThumbnail("https://i.imgur.com/eJNvuBH.png").setTimestamp())
    })

    if(Item.hasOwnProperty(emoji.id) && !(emoji.id == "842757425739333683")){
        message.edit(CLO_embed).then(msg=>{
           msg.edit(CLO_embed.setDescription("```"+Item[emoji.id]+"```").setThumbnail("https://cdn.discordapp.com/emojis/"+emoji.id+".png"))
        })
    }
    else
    {
        message.edit(CLO_embed).then(msg=>{
           msg.edit(CLO_embed.setDescription("<@"+user.id+">"+"```你按這個是要衝3小```").setThumbnail("https://cdn.discordapp.com/emojis/"+emoji.id+".png"))
        })
    }
});


client.login(process.env.BOT_TOKEN) ;
