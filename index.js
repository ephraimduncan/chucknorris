const Twitter = require('twitter');
const fetch = require('node-fetch');
const request = require('request');
const { rand } = require('luckyy').randReal;

if (process.env.NODE_ENV === 'developent') {
  require('dotenv').config();
}

const client = new Twitter({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
});

function sendImageToTwitter(imageBuffer, title) {
  // Adapted from this example - https://github.com/desmondmorris/node-twitter/tree/master/examples#media
  client.post('media/upload', { media: imageBuffer }, (error, media) => {
    if (error) {
      console.error('Something went wrong uploading image...😫', error);
    } else {
      client
        .post('statuses/update', {
          status: `${title}\n\n#100DaysOfCode #javascript`,
          media_ids: media.media_id_string,
        })
        .then((resp) => console.log('New Tweet'))
        .catch((error) =>
          console.error('Something went wrong posting to Twitter...😒', error)
        );
    }
  });
}

fetch('https://www.reddit.com/r/ProgrammerHumor/new.json')
  .then((res) => res.json())
  .then((json) => json.data.children)
  .then((children) => {
    let randomNumber = rand(children.length);
    return [
      children[randomNumber].data.url_overridden_by_dest,
      children[randomNumber].data.title,
    ];
  })
  .then(([imageURL, title]) => {
    request.get(imageURL, (err, res, body) => {
      sendImageToTwitter(body, title);
    });
  })
  .catch((error) =>
    console.error('There was an error fetching a shibe...😑', error)
  );
