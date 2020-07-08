const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const Bot = new TwitterBot(config);
const { randReal } = require('luckyy');
const npm = require('./npm');

const Tweet = () => {
  return `😀😀\n\nWhat does n-p-m stand for? \n${
    npm[randReal.rand(838)]
  }\n\n#100DaysOfCode #javascript #DEVCommunity #programming #nodejs #npm`;
};

Bot.tweet(Tweet());
console.log(npm[randReal.rand(838)]);
