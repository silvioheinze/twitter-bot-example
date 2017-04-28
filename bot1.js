// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

// A function that tweets a random number
function tweeter() {
  var num = Math.floor(Math.random()*100);
  var tweet = 'Here\'s a random number between 0 and 100: ' + num;

  T.post('statuses/update', { status: tweet }, function (error, response) {
		if (response) {
			console.log('Success! Check your bot, it should have retweeted something.')
		}
		// If there was an error with our Twitter call, we print it out here.
		if (error) {
			console.log('There was an error with Twitter:', error);
		}
	});
}

// Run the function
tweeter();

// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 60);
