const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const { default: Axios } = require('axios');
const { rand } = require('luckyy').randReal;
const Bot = new TwitterBot(config);

async function postJoke() {
  try {
    const jokeResponse = await Axios.get(
      'https://www.reddit.com/r/Showerthoughts/new.json'
    );
    const Tweet = () => {
      return `So I was thinking,${(
        jokeResponse.data.data.children[rand(25)].data.title
      ).toLowerCase()} \n\n#100DaysOfCode #programming #javascript #CodeNewbies`;
    };

    Bot.tweet(Tweet());
    console.log(jokeResponse.data.data.children[rand(25)].data.title);
  } catch (error) {
    Bot.tweet(error);
    console.log(error);
  }
}

postJoke();
