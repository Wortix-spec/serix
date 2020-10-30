const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.RichEmbed()
    .setAuthor(`SeriX Yayında!`)
    .setColor(`orange`)
    .addField("Yayın Linki »", `**https://www.twitch.tv/tfw_serix**`)
    .setImage(
      "https://cdn.discordapp.com/attachments/712764878091452449/748194087831732224/SeriX_Logo_V69.jpg"
    );
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["syayın"],
  permLevel: 0,
  kategori: `omenyardım`
};

exports.help = {
  name: "syayın",
  description: "Yardım Menüsü",
  usage: "syayın"
};
