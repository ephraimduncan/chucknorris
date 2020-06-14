const TwitterBot = require("node-twitterbot").TwitterBot;
const config = require("./config");
const { default: Axios } = require("axios");
const Bot = new TwitterBot(config);

const jokeRequest = Axios.get(
  // "http://api.icndb.com/jokes/random?limitTo=[nerdy]",
  "https://api.chucknorris.io/jokes/random?category=dev",
);

Axios.all([jokeRequest])
  .then(
    Axios.spread((...responses) => {
      const jokeResponse = responses[0].data.value;
      const Tweet = () => {
        return `${jokeResponse}\n\n#javascript \n#100DaysOfCode \n#programming \n#Python \#chucknorris`;
      };
      Bot.tweet(Tweet());
    }),
  )
  .catch((errors) => {
    console.log(errors);
  });
