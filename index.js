const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const Bot = new TwitterBot(config);
const express = require('express');
const cron = require('node-cron');
const { randReal } = require('luckyy');
const npm = require('./npm');
const app = express();

const Tweet = () => {
  return `😀😀\n\nNPM is now \n${
    npm[randReal.rand(838)]
  }\n\n#100DaysOfCode #javascript #DEVCommunity #programming #nodejs #npm`;
};

console.log(npm[randReal.rand(838)]);

app.listen(8000, function () {
  cron.schedule('*/10 * * * *', () => {
    Bot.tweet(Tweet());
    console.log('Tweet Done');
  });
});
