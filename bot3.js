// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

function cdnLove() {
	T.post('statuses/update', { status: '@CDN_EE I love you! <3' }, function(err, data, response) {
	  console.log(data)
	})
}

cdnLove();
