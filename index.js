// const TwitterBot = require('node-twitterbot').TwitterBot;
// const config = require('./config');
const { default: Axios } = require('axios');
const { rand } = require('luckyy').randReal;
// const Bot = new TwitterBot(config);

async function postJoke() {
  try {
    const jokeResponse = await Axios.get(
      'https://www.reddit.com/r/Showerthoughts/new.json'
    );
    // const Tweet = () => {
    //   return `New Commit Message!\n\n\`\`${jokeResponse.data} \n#100DaysOfCode #javascript #DEVCommunity #programming`;
    // };

    console.log(jokeResponse.data.data.children[rand(25)].data.title);
    // Bot.tweet(Tweet());
    // console.log("");
  } catch (error) {
    // Bot.tweet(error);
    console.log(error);
  }
}

postJoke();
