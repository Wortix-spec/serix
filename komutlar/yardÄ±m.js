const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.RichEmbed()
    .setAuthor(`TFW Yardım Menüsü`)
    .setTitle(`TFW BOT`)
    .setColor(`orange`)
    .setThumbnail(client.user.avatarURL)
    .addField("» !ban", `Etiketlediğiniz Kişiyi Banlar.`)
    .addField("» !banlist", `Banlanan Kişilerin Listesini Gösterir.`)
    .addField("» !unban", `IDsini Girdiğiniz Kişinin Banının Kaldırır.`)
    .addField("» !ototag", `Oto-Tag Sistemini Atar.`)
    .addField("» !otorol", `Oto-Rol Ayarlar.`)
    .addField("» !sayaç", `Sayaç Sistemini Atar.`)
    .addField("» !smute", `Süreli Mute Atar.`)
    .addField("» !ping", `Botun Pingini Atar.`)
    .addField("» !(kişinin ismi) yayın", `Yayın Linkini Atar.`);
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Yardım"],
  permLevel: 0,
  kategori: `omenyardım`
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
