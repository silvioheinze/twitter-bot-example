// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

// We create a function to send out tweets mentioning how much we love CDN
function cdnLove() {
	// tell Twitter to post a new tweet with the following status
	T.post('statuses/update', { status: '@CDN_EE I love you! <3' }, function(err, data, response) {
		// log out any errors and responses
	  console.log(data)
	})
}

// Run the cdnLove function once
cdnLove();
