const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');
const Bot = new TwitterBot(config);
const { randReal } = require('luckyy');
const fs = require('fs');

let npm = fs.readFileSync('./npm.txt', 'utf8').split('\r\n');

const Tweet = () => {
  return `😀😀\n\nWhat does n-p-m stand for? \n${
    npm[randReal.rand(840)]
  }\n\n#100DaysOfCode #javascript #DEVCommunity #programming #nodejs #npm`;
};

Bot.tweet(Tweet());
console.log(npm[randReal.rand(840)]);
