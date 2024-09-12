const Rochelle = require("discord.js")

exports.run = async (client, message, args) => {
if(!message.member.roles.has('727908133954912348') && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu Kullanmak için gerekli yetkiye sahip değilsin')
    if (!message.member.voiceChannel) return message.channel.send("Bir ses kanalında olman gerek")
    let Gullanici = message.mentions.members.first();
    if (!Gullanici.voiceChannel) return message.channel.send("Bu kullanıcı herhangi bir ses kanalında değil")
    if (!Gullanici) return message.channel.send("Kullanıcı belirtmedin")
    if (message.member.voiceChannel.id === Gullanici.voiceChannel.id) return message.channel.send("Zaten aynı kanaldasınız")
    const filter = (reaction, user) => {
        return ['tik2', 'x_'].includes(reaction.emoji.name) && user.id === Gullanici.id;
    };
    let rochelle = new Rochelle.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${Gullanici}, ${message.author} seni ${message.member.voiceChannel.name} odasına çekmek istiyor. Kabul ediyormusun?`)
            .setFooter('Kalite Tesadüf Değildir.') 

    let mesaj = await message.channel.send(rochelle)
    await mesaj.react("698880257305870456")
    await mesaj.react("706227705221480561")
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 60000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === 'tik2') {
            let rochelle1 = new Rochelle.RichEmbed()
                .setColor("GREEN")
                .setDescription(`${Gullanici} odaya çekildi`)
            message.channel.send(rochelle1)
      Gullanici.setVoiceChannel(message.member.voiceChannel);
        } else {
            let rochelle2 = new Rochelle.RichEmbed()
                .setColor("RED")
                .setDescription(`${Gullanici} odaya çekilme teklifini reddetti`)
            message.channel.send(rochelle2)
        }
    })
}

exports.conf = {
    enabled: true,
    aliases: ['taşı'],
    permLevel: 0
};

exports.help = {
    name: "çek",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "çek @kullanıcı"

};