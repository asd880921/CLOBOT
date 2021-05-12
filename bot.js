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

client.on('message',msg=>{
	if(msg.content.startsWith(''+'羽櫻好醜')){
		msg.react('841661109868953651');
	}
}) ;


client.on('message', message => {
	if (message.content === '!查詢') {
        message.delete(1)
        message.channel.send('[道具翻譯列表-道具名稱會顯示在這邊哦]')
    }
    if(message.content === '[道具翻譯列表-道具名稱會顯示在這邊哦]' && message.author.bot){
        for (var i = 0; i < length; i++) {
        message.react(CLO_Emoji[i]);
        }
    }
})


client.on('messageReactionAdd', (messageReaction, user) => {
    if(user.bot)  return;

    const { message, emoji} = messageReaction;
    message.edit('加載中Loading...');

    switch(emoji.id){
        case '841661109868953651':
            message.edit('[영롱한 주얼 컴포넌트]');
            break;
        case '841661110440034334':
            message.edit('[초월의 비약]');
            break;
        case '841662779436957697':
            message.edit('[일반 D 컴포넌트 : 기어]');
            break;
        case '841663111878017084':
            message.edit('[일반 D 컴포넌트 : 코스튬]');
            break;
        case '841663779212230657':
            message.edit('[품질 보증 씰]');
            break;
        case '841662235410432011':
            message.edit('[슬롯 타입 변경툴]');
            break;
        case '841663477433106442':
            message.edit('[리얼 플래티넘 드라이버]');
            break;
        case '841662530849472542':
            message.edit('[일반 강화기 연료]');
            break;
        case '841663297571913748':
            message.edit('[완벽한 PNA 진화 키트]');
            break;
        case '841662438449741897':
            message.edit('[유니온 기어 윤활제]');
            break;
        case '841662339409641552':
            message.edit('[알파 이퀄라이저(Lv.81~90)]');
            break;
        case '841663979914526761':
            message.edit('[유니온 네임택]');
            break;     
    }
});

client.login(process.env.BOT_TOKEN) ;
