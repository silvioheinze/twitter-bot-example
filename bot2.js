// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

// This is the URL of a search for the latest tweets on the '#cdnee' hashtag.
var cdnTweetSearch = {q: "#cdnee", count: 10, result_type: "recent"};

// This function finds the latest tweet with the #cdnee hashtag, and retweets it.
function retweetLatest() {
	T.get('search/tweets', cdnTweetSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot account, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.error('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.error('There was an error with your hashtag search:', error);
	  }
	});
}

// Try to retweet something as soon as we run the program...
retweetLatest();
