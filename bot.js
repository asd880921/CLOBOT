const {Client, RichEmbed, Discord} = require('discord.js') ;
const client = new Client ;
const {token} = require('./settings.json') ;

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
        for (var i = 0; i < length; i++) {
        message.react(CLO_Emoji[i]);
}}

if (message.content.startsWith(+"機器人"))
message.channel.send('嗶嗶逼')

})

client.on('message', message => {
	if (message.content === '!刪除') {
message.channel.messages.fetch({
    limit: 5 // Change `100` to however many messages you want to fetch
}).then((messages) => { 
    const botMessages = [];
    messages.filter(m => m.author.id === '841613698908684308').forEach(msg => botMessages.push(msg))
    message.channel.bulkDelete(botMessages).then(() => {
        message.channel.send("Cleared bot messages").then(msg => msg.delete({
            timeout: 3000
        }))
    });
})
}
}

client.on('messageReactionAdd', (messageReaction, user) => {
    if(user.bot)  return;
    const { message, emoji } = messageReaction;

    if(emoji.id === "841661109868953651")
    message.channel.send('[영롱한 주얼 컴포넌트]');

    if(emoji.id === "841661110440034334") 
    message.channel.send('[초월의 비약]');

    if(emoji.id === "841662779436957697") 
    message.channel.send('[일반 D 컴포넌트 : 기어]');

    if(emoji.id === "841663111878017084") 
    message.channel.send('[일반 D 컴포넌트 : 코스튬]');

    if(emoji.id === "841663779212230657") 
    message.channel.send('[품질 보증 씰]');

    if(emoji.id === "841662235410432011") 
    message.channel.send('[슬롯 타입 변경툴]');

    if(emoji.id === "841663477433106442") 
    message.channel.send('[리얼 플래티넘 드라이버]');

    if(emoji.id === "841662530849472542") 
    message.channel.send('[일반 강화기 연료]');

    if(emoji.id === "841663297571913748") 
    message.channel.send('[완벽한 PNA 진화 키트]');

    if(emoji.id === "841662438449741897") 
    message.channel.send('[유니온 기어 윤활제]');

    if(emoji.id === "841662339409641552") 
    message.channel.send('[알파 이퀄라이저(Lv.81~90)]');

    if(emoji.id === "841663979914526761") 
    message.channel.send('[유니온 네임택]');

    });

client.login(process.env.BOT_TOKEN) ;
