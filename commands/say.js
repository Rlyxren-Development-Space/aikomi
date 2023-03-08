module.exports = {
  name: "say",
  run: (client, message, args) => {
    const toSay = args.join(" ");

    message.delete();

    message.channel.send({ content: `${toSay}` });
  },
};
