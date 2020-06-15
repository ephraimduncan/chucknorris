const TwitterBot = require("node-twitterbot").TwitterBot;
const config = require("./config");
const { default: Axios } = require("axios");
const Bot = new TwitterBot(config);

const jokeRequest = Axios.get(
  "http://api.icndb.com/jokes/random?limitTo=[nerdy]",
);

Axios.all([jokeRequest])
  .then(
    Axios.spread((...responses) => {
      const jokeResponse = responses[0].data.value.joke;
      const Tweet = () => {
        return `${jokeResponse}\n\n#100DaysOfCode #Code #Java #javascript #DEVCommunity #programming #programmingmemes`;
      };
      Bot.tweet(Tweet());
    }),
  )
  .catch((errors) => {
    console.log(errors);
  });
