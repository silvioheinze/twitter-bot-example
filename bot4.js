// Set up Twit
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

function cdnLove() {
  // Get all Twitter user ids from the user 'CDN_EE'
  T.get('followers/ids', { screen_name: 'CDN_EE' }, function (error, data) {
    console.log(error, data);
    // Do the following for each follower
    for (i = 0; i < data.ids.length; i++) {
      // Get the twitter name from their ids
      T.get('users/show', { user_id: data.ids[i] }, function (error, data) {
        console.log(error, data);
        // Create the Tweet mentioning the user
        var followerTweet = '@' + data.screen_name + ' Hello from the #cdnDIGI Seminar in Sarajevo! #cdnee';
        console.log(followerTweet);
        // Send the Tweet
        T.post('statuses/update', { status: followerTweet }, function (error, response) {
           console.log(error, response);
        })
      })
    }
  })
}

// Now, run all the things we write obove
cdnLove();
