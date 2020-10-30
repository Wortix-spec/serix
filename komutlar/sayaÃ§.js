const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.RichEmbed()
    .setAuthor(`TFW Sayaç Menüsü`)
    .setColor(`orange`)
    .setThumbnail(client.user.avatarURL)
    .addField("» !sayaç-ayarla", `Sayaç Ayarlar.`)
    .addField("» !sayaç-sıfırla", `Belirlediğiniz Sayacı Sıfırlar.`);
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaç"],
  permLevel: 0,
  kategori: `omenyardım`
};

exports.help = {
  name: "sayaç",
  description: "Sayaç Menüsü",
  usage: "sayaç"
};
