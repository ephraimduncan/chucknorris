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
      return `New Thought!\n\n\`\`${
        jokeResponse.data.data.children[rand(25)].data.title
      } \n#100DaysOfCode #programming #javascript #Showerthoughts`;
    };

    Bot.tweet(Tweet());
    console.log(jokeResponse.data.data.children[rand(25)].data.title);
  } catch (error) {
    Bot.tweet(error);
    console.log(error);
  }
}

postJoke();
