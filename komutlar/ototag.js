const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.RichEmbed()
    .setAuthor(`TFW Oto-Tag Menüsü`)
    .setColor(`BLUE`)
    .setThumbnail(client.user.avatarURL)
    .addField("» !oto-tag-ayarla", `Oto-Tag Sistemini Aktif Eder.`)
    .addField("» !oto-tag-kapat", `Oto-Tag Sistemini Sıfırlar.`);
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ototag"],
  permLevel: 0,
  kategori: `omenyardım`
};

exports.help = {
  name: "ototag",
  description: "Oto-Tag Menüsü",
  usage: "ototag"
};
