const {Client, RichEmbed, Discord} = require('discord.js') ;
const Discordd = require('discord.js');
const client = new Client ;
const {token} = require('./settings.json') ;

let CLO_embed = new Discordd.RichEmbed()
.setTitle("[點選Emoji就能修改下方的文字視窗哦]")
.setURL("https://closers.nexon.com/Main/Index")
.setDescription("```[翻譯列表-道具名稱會顯示在這邊哦]```")
.setColor("RANDOM")
.setTimestamp()
.setFooter("By Miisu | 要耐心等待一下哦，延遲比較重G_G","https://i.imgur.com/bqHT3Mp.png")
.setThumbnail("https://i.imgur.com/eJNvuBH.png")
.setAuthor("封印者道具翻譯","https://i.imgur.com/5yOdbez.png","https://closers.nexon.com/Main/Index")


var CLO_Emoji=[
'841661109868953651','841661110440034334',
'841662235410432011','841662779436957697',
'841663111878017084','841663779212230657',
'841662530849472542','841663477433106442',
'841663297571913748','841662438449741897',
'841662339409641552','841663979914526761'
];

var length = CLO_Emoji.length;
    
client.on('ready', () => {
    console.log(`${client.user.tag} 準備好上戰場惹！～`);
});


client.on('message', message => {
	if (message.content === '!查詢') {
        message.channel.send(CLO_embed).then(msg => msg.edit(CLO_embed.setDescription("```[翻譯列表-道具名稱會顯示在這邊哦]```")
	.setThumbnail("https://i.imgur.com/eJNvuBH.png").setTimestamp()))
    }
    if(message.embeds = CLO_embed && message.author.bot){
        for (var i = 0; i < length; i++) {
        message.react(CLO_Emoji[i]);
        }
    }
})

client.on('message',msg=>{
	if(msg.content.startsWith('羽櫻好醜')){
		msg.react('802478923073585212');
		msg.react('802488806192185373');
		msg.react('802478922641571850');
	}
}) ;


client.on('messageReactionAdd', (messageReaction, user) => {
    if(user.bot)  return;

    const { message, emoji} = messageReaction;

    message.edit().then(msg=>{
        msg.edit(CLO_embed.setDescription("```[加載中Loading....]```").setThumbnail("https://i.imgur.com/eJNvuBH.png").setTimestamp())
    })

    switch(emoji.id){
        case '841661109868953651':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[영롱한 주얼 컴포넌트]```").setThumbnail("https://cdn.discordapp.com/emojis/841661109868953651.png"))
            })
            break;
        case '841661110440034334':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[초월의 비약]```").setThumbnail("https://cdn.discordapp.com/emojis/841661110440034334.png"))
            })
            break;
        case '841662779436957697':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[일반 D 컴포넌트 : 기어]```").setThumbnail("https://cdn.discordapp.com/emojis/841662779436957697.png"))
            })
            break;
        case '841663111878017084':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[일반 D 컴포넌트 : 코스튬]```").setThumbnail("https://cdn.discordapp.com/emojis/841663111878017084.png"))
            })
            break;
        case '841663779212230657':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[품질 보증 씰]```").setThumbnail("https://cdn.discordapp.com/emojis/841663779212230657.png"))
            })
            break;
        case '841662235410432011':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[슬롯 타입 변경툴]```").setThumbnail("https://cdn.discordapp.com/emojis/841662235410432011.png"))
            })
            break;
        case '841663477433106442':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[리얼 플래티넘 드라이버]```").setThumbnail("https://cdn.discordapp.com/emojis/841663477433106442.png"))
            })
            break;
        case '841662530849472542':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[일반 강화기 연료]```").setThumbnail("https://cdn.discordapp.com/emojis/841662530849472542.png"))
            })
            break;
        case '841663297571913748':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[완벽한 PNA 진화 키트]```").setThumbnail("https://cdn.discordapp.com/emojis/841663297571913748.png"))
            })
            break;
        case '841662438449741897':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[유니온 기어 윤활제]```").setThumbnail("https://cdn.discordapp.com/emojis/841662438449741897.png"))
            })
            break;
        case '841662339409641552':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[알파 이퀄라이저(Lv.81~90)]```").setThumbnail("https://cdn.discordapp.com/emojis/841662339409641552.png"))
            })
            break;
        case '841663979914526761':
            message.edit().then(msg=>{
                msg.edit(CLO_embed.setDescription("```[유니온 네임택]```").setThumbnail("https://cdn.discordapp.com/emojis/841663979914526761.png"))
            })
            break;
    }
});

client.login(process.env.BOT_TOKEN) ;
