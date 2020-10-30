const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
      .setDescription(`Ne yazıkki bu komutu kullanmaya yetkiniz yok!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
      .setDescription(`Lütfen silinecek mesaj sayısını belirtiniz.`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (args[0] > 100) {
    const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
      .setDescription(`Ne yazık ki 100'den fazla mesaj silemem.`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor("ORANGE")
      .addField(`Temizleyen Yetkili`, `<@${message.author.id}>`)
      .addField(`Silinen Mesaj Sayısı`, args[0])
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed).then(msg => msg.delete(1500));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "temizle",
  usage: "temizle"
};
