// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

// A function that tweets a random number
function tweeter() {
  var num = Math.floor(Math.random()*100);
  var tweet = 'Here\'s a random number between 0 and 100: ' + num;

  T.post('statuses/update', { status: tweet }, tweeted);
}

// Run the function
tweeter();

// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 60);
