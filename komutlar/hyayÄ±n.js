const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.RichEmbed()
    .setAuthor(`SworN Yayında!`)
    .setColor(`orange`)
    .addField("Yayın Linki »", `**https://www.twitch.tv/tfw_sworn**`)
    .setImage(
      "https://cdn.discordapp.com/attachments/727928017267195966/747122502706397214/SWORNN.png"
    );
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hyayın"],
  permLevel: 0,
  kategori: `omenyardım`
};

exports.help = {
  name: "hyayın",
  description: "Yardım Menüsü",
  usage: "hyayın"
};
