// const TwitterBot = require('node-twitterbot').TwitterBot;
// const config = require('./config');
const { default: Axios } = require('axios');
// const Bot = new TwitterBot(config);

async function postJoke() {
  try {
    const jokeResponse = await Axios.get(
      'https://programming-quotes-api.herokuapp.com/quotes/random'
    );
    const Tweet = () => {
      return `Programming Wisdom!\n\n${JSON.stringify(
        jokeResponse.data.en
      )}\n- ${
        jokeResponse.data.author
      } \n#100DaysOfCode #100DaysofProjects #javascript #programming #WiseChuck`;
    };
    // Bot.tweet(Tweet());
    // console.log(JSON.stringify(jokeResponse.data.en));
    console.log(Tweet());
  } catch (error) {
    // Bot.tweet(error);
    // console.log(error);
  }
}

postJoke();
