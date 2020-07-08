const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const Bot = new TwitterBot(config);
const npm = require('./npm');
const { randReal } = require('luckyy');

const Tweet = () => {
  return `😀😀\n\nNPM is now \n${
    npm[randReal.rand(572)]
  }\n\n#100DaysOfCode #javascript #DEVCommunity #programming #nodejs #npm`;
};

Bot.tweet(Tweet());
console.log(npm[randReal.rand(572)]);
