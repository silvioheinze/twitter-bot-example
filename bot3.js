// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

function cdnLove () {
	T.post('statuses/update', { status: '@CDN_EE I love you! <3' }, function(err, data, response) {
	  console.log(data)
	})
}


// Try to retweet something as soon as we run the program...
cdnLove();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(cdnLove, 1000 * 60 * 60 * 24);
