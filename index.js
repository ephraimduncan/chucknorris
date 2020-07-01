const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const { default: Axios } = require('axios');
const Bot = new TwitterBot(config);

async function postJoke() {
  try {
    const jokeResponse = await Axios.get('http://whatthecommit.com/index.txt');
    const Tweet = () => {
      return `New Commit Message!\n\n\`\`${jokeResponse.data} \n#100DaysOfCode #javascript #DEVCommunity #programming`;
    };
    Bot.tweet(Tweet());
    console.log(jokeResponse.data);
  } catch (error) {
    Bot.tweet(error);
    console.log(error);
  }
}

postJoke();
