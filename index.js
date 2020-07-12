const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const { default: Axios } = require('axios');
const { rand } = require('luckyy').randReal;
const Bot = new TwitterBot(config);

async function postJoke() {
  try {
    const jokeResponse = await Axios.get('http://api.icndb.com/jokes/random');
    const emojis = ['👽', '🔥', '😮', '😋', '🤴', '🚀', '🌟', '🤓', '🤪', '🗝'];
    const Tweet = () => {
      return `${emojis[rand(emojis.length)]}${emojis[rand(emojis.length)]}\n\n${
        jokeResponse.data.value.joke
      } \n#100DaysOfCode #javascript #DEVCommunity #programming`;
    };
    Bot.tweet(Tweet());
    console.log(Tweet());
  } catch (error) {
    Bot.tweet(error);
    console.log(error);
  }
}

postJoke();
