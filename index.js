const keepAlive = require('./server')
const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();
bot.on('ready', () => {
  console.log(`成功上線 ${bot.user.tag}!`);
});
const exampleEmbed = new Discord.RichEmbed()
	.setColor('0xFFD306')
	.setTitle('超沒用機器人')
	.setURL('')
	.setAuthor('人造人造人電子機器人87號', 'https://cdn.discordapp.com/attachments/397372821174747139/657934723032547330/RZ_87_Logo.webp', '')
	.setDescription('不定期更新 ||好啦 只是我懶啦||')
	.setThumbnail('https://cdn.discordapp.com/attachments/397372821174747139/657942724171005963/underwater6no.png')
	.addField("|| ||","指令列表\n```?h```\n直接開車上路\n```!h <神的語言>```\n隨機本子\n```!hr or !hrandom```\n簡易測試\n```!on```\n抽籤```\n!hrs <項目,項目,．．．>```\n下午茶DC邀請連結\n```!邀請```\n關鍵字類\n```可不可以(可不可)、要不要、有沒有、是不是(484)```")

	.addBlankField()
	.setImage('https://cdn.discordapp.com/attachments/397372821174747139/657944186233946137/DD.png')
  .addField('``` ```', '這是一隻間諜黑碳 ↓', true)
	.setTimestamp()
	.setFooter('Made by wucat', 'https://cdn.discordapp.com/attachments/397372821174747139/657942724171005963/underwater6no.png');
o=''//聊天文字暫存
r=''//處理暫存
s=''
p=''
t=''//統計字量
q='0'//文字暫存

bot.on('message', msg => {
  o=msg.content //訊息放入o
  //if(o === "@人造人電子機器人#0912"){
  //  msg.channel.send(exampleEmbed)
 // }
if(o.indexOf("!hrs")>-1){
  var i=0;
  var l=[]
  r=o.slice(5)//去指令
   //var i=[] //!hrs 1,2,3
//msg.channel.send(r)
   if (r.indexOf(",")>-1){//有關鍵字
    var str = o;//資料
    var find = ",";//關鍵字
    var reg = new RegExp(find,"g")
    var c = str.match(reg);
    t = ((c?c.length:0)+1)
    while(i<t){
      if(r.indexOf(",")>-1){ //如果有,則放入陣列
        //msg.channel.send("if")
        if(r.charAt(0)===","){ //如果重複打,就移除掉
          r=r.slice(0)
        }else{
          l.push(r.substring(0,r.indexOf(",")))
          r=r.slice(r.indexOf(",")+1)
        }
      }else{ //最後一則
        l.push(r)
      }
      i++;
    }
   }
  msg.channel.send(l[Math.floor(Math.random()*(t.valueOf()))])
  l.length = 0;
}
if(o.indexOf("是不是")>-1||o.indexOf("484")>-1){
  if (Math.floor(Math.random()*2)===0){
    msg.channel.send("是")
  }else{
    msg.channel.send("不是")
  }
}
if(o.indexOf("要不要")>-1){
  if (Math.floor(Math.random()*2)===0){
    msg.channel.send("要")
  }else{
    msg.channel.send("不要")
  }
}
if(o.indexOf("可以不")>-1	||o.indexOf("可不可以")>-1){
  if (Math.floor(Math.random()*2)===0){
    msg.channel.send("可以")
  }else
    msg.channel.send("不可以")
  }
if(o.indexOf("有沒有")>-1){
  if (Math.floor(Math.random()*2)===0){
    msg.channel.send("有")
  }else{
    msg.channel.send("沒有")
  }
}
if(o==="!邀請"){
  msg.channel.send("https://discord.gg/bMqhndv")
}
if(o.indexOf("!手卷")>-1){
  msg.channel.send("https://cdn.discordapp.com/attachments/397372821174747139/657935754743250954/HR2.png")
  }
if(o.indexOf("!雪糕")>-1||o.indexOf("!貓B")>-1||o.indexOf("!CowCow")>-1||o.indexOf("!cowcow")>-1||o.indexOf("!COWCOW")>-1||o.indexOf("!貓冰")>-1||o.indexOf("!尻尻")>-1){
  msg.channel.send("https://cdn.discordapp.com/attachments/397372821174747139/657938067679870976/c1.png")
  }
if(o === "?h"||o === "？h"){
  msg.channel.send(exampleEmbed)
}
  if(o.length === 9){ //o的字數為9
    if (o.indexOf("!h")>-1) { //包含!h關鍵字
    o=msg.content //訊息放入o
    msg.reply("https://nhentai.net/g/"+ o.slice(-6)); //標註回覆網址
  }}
  if (o === "ok google") { //訊息為""則執行
   msg.channel.send("燈燈");
  }
  if (o==="!hr"||o==="!hrandom") {
    o=Math.floor(
      Math.random()*293905)+100000
    msg.reply(
      "http://nhentai.net/g/"+o+"/");
  }
  if (o === "嗨") {
   msg.reply("嗨三小");
  }
  if (o === "!on") {
   msg.reply("運作中");
  }
});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: '輸入?h來查詢指令',
            type: "STREAMING",
            url: "https://wucatblog.blogspot.com/"
        }
    });
});

bot.login(config.token);

keepAlive();

client.login("NjUzMjI5MjU3OTQxODQzOTY5.Xe0TAw.da7G9NRhKI--9QUTK98_FTggBf4")