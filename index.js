const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("sigbot!")

bot.on('ready', function() {
    bot.user.setUsername("Sigbot")
    bot.user.setPresence({ game: { name: 'mentionner moi pour que je vous aide :3'}, status: 'online'}) //en ligne;
    console.log("Connected")});

bot.login(process.env.TOKEN);


bot.on('message', message => {
if (message.content === "sigbot!gif"){
    message.channel.send("on ce met au image et au gif maintenant \n alors preparais vous car on a atein une nouvelle aire de jeux", {
        file: "https://media.giphy.com/media/LOtqITm3tFmiA/giphy.gif" 
    });  
}
if (message.content === "salut <@437179201284603904>"){
    message.reply("Konichiwa :3");
    console.log("une salutation a éter effectuer");
}
if (message.content === "ça va <@437179201284603904>"){
        message.reply("JUST MONIKA");
        file: "https://cdn.discordapp.com/attachments/427521450866507777/439488487306297364/monika.chr"
}
if (message.content === "merci <@437179201284603904>"){
    message.reply("c'est toujours un plaisir :D");
}
if(message.content === "Xarrin!nickel"){ //Xarrin
        message.channel.send("", {
        file: "https://media1.tenor.com/images/996279409bcab56de0f7fce3d135a84c/tenor.gif"
    }) 
}
if(message.content === "Xarrin!Invocation:Byakko"){ //Xarrin
        message.channel.send("", {
        file: "https://cdn.discordapp.com/attachments/434681503964725248/435060807118749700/SF_Byakko.png"
    }) 
}
if(message.content === "Xarrin!voyeur"){ //Xarrin
        message.channel.send("", {
        file: "https://i.pinimg.com/originals/07/d3/ac/07d3ac2dcfc4597b4d0da463fa8b0003.gif"
    }) 
}
if(message.content === "Xarrin!Invocation:Phoenix"){ //Xarrin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439059526575063040/m035c10.png"
})
}
if(message.content === "Lucas!KC"){ //MME POOF
        message.channel.send("", {
        file: "https://31.media.tumblr.com/b4bb500c7d05b0f44e0fd4c35020e3eb/tumblr_inline_ofauryqfpQ1s9x8us_500.gif"
    }) 
}
if(message.content === "Lucas!FTW"){ //MME POOF
        message.channel.send("Ma réponse :", {
        file: "https://i.skyrock.net/0358/84470358/pics/3103693573_1_17_ENJacXlx.gif"
    }) 
}
if(message.content === "Lucas!MrPuel"){ //MME POOF
        message.channel.send("¡Hola!", {
        file: "https://thumbs.gfycat.com/DentalHealthyAcornweevil-max-1mb.gif"
    }) 
}
if(message.content === "yuki!invocation:Godness"){ //yuki
        message.channel.send("", {
        file: "https://cdn.discordapp.com/attachments/434681503964725248/435078318610710539/Goddess.png"
    }) 
}
if(message.content === "Xarrin!gral"){ //xarin
    message.channel.send("La solitude c'est quand karma il vas sur mer\nLa solitude c'est quand il est bourré dans un verre\n-----\nIl répond au nom de karma On dirais pas forcément mais il en a du karma\nNous on en peut plus de son karma\n-----\n La solitude c'est quand Lucas se prend un vent\nLa solitude c'est au moment ou il se prend du blanc\n-----\n Il répond au nom de lucas\nnon il ne mange pas encore de caca\nCar il était caché dans un placard\n -----\n La solitude c'est quand Xarrin  il mange son pain\nLa solitude c'est comme son fil il est tout fin\n-----\nil répond au nom de Xarrin\nXarrin, il aime allé touché des sein\nXarrin, il aime allé boire du Vin en touchant des popotins");
}
if(message.content === "Xarrin!invocation:spiritwater"){ //xarrin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071187570655232/elemental_01.png"
}) 
}
if(message.content === "Xarrin!invocation:spiritearth"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071278964408330/elemental_02.png"
}) 
}
if(message.content === "Xarrin!invocation:spiritwind"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071361919352842/elemental_03.png"
}) 
}
if(message.content === "Xarrin!invocation:spiritfire"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071422992744448/elemental_04.png"
}) 
}
if(message.content === "Xarrin!invocation:Kuro"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439133776849797122/d825bf93ca36fdcbf62091b1cc4e6936.png"
})
}
if(message.content === "Xarrin!ham"){ //Xarrin
    message.channel.send("", {
    file: "https://pa1.narvii.com/5994/0561f42850b340049a2ed4628e1ffe358e0dbc96_hq.gif"
}) 
}
if(message.content === "sakamoto!sleep"){ //Sakamoto-san
    message.channel.send("", {
    file: "https://media.giphy.com/media/bo0btBvaKDKeY/giphy.gif"
})
}
if(message.content === "sakamoto!play"){ //Sakamoto-san
    message.channel.send("", {
    file: "https://78.media.tumblr.com/fba185be4b118ac2bc9f2b913f02bc08/tumblr_n9yumpiQ3y1rmdq5eo4_500.gif"
})
}
if(message.content === "sakamoto!play 2"){ //Sakamoto-san
    message.channel.send("", {
    file: "https://media.giphy.com/media/LOtqITm3tFmiA/giphy.gif"
})
}
if(message.content === "sakamoto!play 3"){ //Sakamoto-san
    message.channel.send("", {
    file: "https://i.gifer.com/8X8r.gif"
})
}
if(message.content === "sakamoto!xD"){ //Sakamoto-san
    message.channel.send("", {
    file: "https://static.fjcdn.com/gifs/Sakamoto+anime+nichijou_80d9f8_4843458.gif"
})
}
if(message.content === "sakamoto!srx"){ //Sakamoto-san
    message.channel.send("", {
    file: "https://media.giphy.com/media/RRwhNPJMaymm4/giphy.gif"
})
}
if(message.content === "I like trains"){ 
    message.channel.send(":D", {
    file: "https://i.imgur.com/7zkiG.gif"
})
}
if(message.content === "salope Martine"){ 
    message.channel.send("!!!!!", {
    file: "https://cdn.discordapp.com/attachments/408257108665040896/444116108203786241/53f39401d3653f077c30c84c4acae7ac.png"
})
}
if(message.content === "Qui est Mokigrokaka ?"){ 
    message.channel.send("Cette salope ?", {
    file: "https://cdn.discordapp.com/attachments/292726526657429504/444879710430822400/Mokigrokaka.PNG"
})
}
if (message.content === "<@437179201284603904>" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("info sur Sigbot")
    .setAuthor("Sig", "https://puyonexus.com/forum/download/file.php?avatar=1481_1311799010.png")
    .setColor(0x0086AE)
    .setDescription("le bot a éter crée juste pour faire de la programation , mais est partie bien plus loin que sa, il a été crée par @Sig qui c'est fais aidez par  @̶̶ۣۣۜۜ͜ζ͜͡▪) ρнคгยxтαภ  pour les petite erreur :D")
    .setFooter("pour plus d'info demander au créateur du bot :3", "https://orig00.deviantart.net/24f3/f/2015/305/4/e/sig_as_amitie__by_grimtales1lizzybird-d9f6ez9.png")
    .setImage("https://78.media.tumblr.com/9a209d8b2d826c25b70b0fa8e29aeb0f/tumblr_n96mqjeBdg1qmbwk5o1_r2_500.png")
    .setThumbnail("https://puyonexus.com/mediawiki/images/d/d9/Img201007.png")
    .setTimestamp()
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=437179201284603904&permissions=2146958583&scope=bot")
    .addField("le bot peu reagir avec 3 maniere ",
      "un texte \n le mentionner \n et utiliser le prefix\nutiliser la commande sigbot!help pour plus d'info")
    .addField("prefix du bot", "le prefix du bot est sigbot! mais il est possible qu'il change", false);
  
    message.channel.send({embed});
}
if (message.content === prefix + "help" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour le Sigbot")
    .setColor(0x0086AE)
    .setDescription("voici les commande que le bot peu faire :D")
    .setFooter("pour plus d'info demander a son créateur :3")
    .addField("commande qui devais etre drole",
      "lui dire salut (avec une mention a la fin) \n lui demander si ça va (avec une mention a la fin) \n lui dire merci (avec une mention a la fin)")
      .addField("commande special",
      "sigbot!gif")
  
    message.channel.send({embed});
}
if(message.content === "mp!help"){ //MME POOF HELP

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Madame Pouf posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/432275341202030614/435096117504638986/unknown.png")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "Lucas!KC\nLucas!FTW\Lucas!MrPuel\nLucas!MrPuel")
      .addField("image",
      "rien") 

    message.channel.send({embed});
}
if(message.content === "yuki!help"){ //yuki help

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Yuki posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/434681503964725248/435083973069373441/ange_manga_n1.jpg")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "rien")
    .addField("image",
      "yuki!invocation:Godness")

    message.channel.send({embed});
}
if(message.content === "sig!help"){ //sig help

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que sig posséde")
    .setThumbnail("https://image.gamer.ne.jp/news/2011/20110727/00018cb052ae8768e94585c1314982a7a0cc/o/17.jpg")
    .setFooter("pour plus d'info va te voir vue que c'est toi qui la crée xD")
    .addField("gif",
      "sig!win \nsig!lose\nsig!magic 1\nsig!magic 2\nsig!magic 3\n sig!magic 4")
      .addField("image",
      "aucun")

    message.channel.send({embed});
}
if(message.content === "Xarrin!help"){ //Xarrin help
 
    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Xarrin posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/434681503964725248/435060807118749700/SF_Byakko.png")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "Xarrin!nickel\nXarrin!voyeur\nXarrin!ham")
      .addField("image",
      "Xarrin!Invocation:Byakko\nXarrin!Invocation:Phoenix\nXarrin!invocation:spiritwater\nXarrin!invocation:spiritearth\nXarrin!invocation:spiritwind\nXarrin!invocation:spiritfire")

    message.channel.send({embed});
}
if(message.content === "sakamoto!help"){ //sakamoto help
 
    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Sakamoto-san posséde")
    .setThumbnail("http://i0.kym-cdn.com/photos/images/newsfeed/000/714/836/f31.gif")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "sakamoto!sleep\nsakamoto!play\nsakamoto!play 2\nsakamoto!play 3\nsakamoto!xD\nsakamoto!srx")
      .addField("image",
      "aucun")

    message.channel.send({embed});
}
if(message.content === "the test"){

    let sicon = message.guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    setDescription("information du serveur")
    .setColor(0x0086AE)
    .setThumbnail(sicon)
    .addField("noom du serveur", message.guild.name)
    .addField("crée le", message.guild.createdAt)
    .addField("vous avez rejoin", message.member.joinedAt)
    .addField("nombre de membre", message.guild.memberCount);
    return message.channel.send(serverembed);
}
}
) 
