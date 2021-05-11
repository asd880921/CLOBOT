const {Client, RichEmbed, Discord} = require('discord.js') ;
const client = new Client ;
const {token} = require('./settings.json') ;
    
client.on('ready', () => {
    console.log(`${client.user.tag} 準備好上戰場惹！`);
});

client.on('message', message => {
	if (message.content === '!查詢') {
		message.react('841661109868953651');
        message.react('841661110440034334');
        message.react('841662235410432011');
	}
});
client.on('message', message => {
	if (message.content === '!查詢') {
        message.react('841662779436957697');
        message.react('841663111878017084');
        message.react('841663779212230657');
	}
});
client.on('message', message => {
	if (message.content === '!查詢') {
        message.react('841662530849472542');
        message.react('841663477433106442');
        message.react('841663297571913748');
	}
});
client.on('message', message => {
	if (message.content === '!查詢') {
        message.react('841662438449741897');
        message.react('841662339409641552');
        message.react('841663979914526761');
	}
});

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