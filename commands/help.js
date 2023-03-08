const { EmbedBuilder } = require("discord.js");
const { colors } = require("discordjs-colors-bundle");
const settings = require("../settings.json");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const EMBED = new EmbedBuilder()
      .setColor(colors.SeaGreen)
      .setTitle("Aikomi - Help Panel")
      .setDescription("List of all the commands")
      .addFields(
        {
          name: `${settings.messageContentCommands.prefix}help`,
          value: "This command will show this list",
          inline: true,
        },
        {
          name: `${settings.messageContentCommands.prefix}ping`,
          value: "This command will return client's ping",
          inline: true,
        },
        {
          name: `${settings.messageContentCommands.prefix}say`,
          value: "This command will repeat whatever you say.",
          inline: true,
        }
      );

    message.reply({ embeds: [EMBED] });
  },
};
