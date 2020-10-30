const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.RichEmbed()
    .setAuthor(`TFW Bot'u Davet Etmek İçin !davet`)
    .setColor(`orange`)
    .setThumbnail(client.user.avatarURL)
    .addField(
      "Botun Davet Linki »",
      `https://discord.com/oauth2/authorize?client_id=742826537283485726&scope=bot&permissions=8`
    );
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0,
  kategori: `omendavet`
};

exports.help = {
  name: "davet",
  description: "Yardım Menüsü",
  usage: "davet"
};
