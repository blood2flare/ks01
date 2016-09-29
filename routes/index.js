var express = require('express');
// var twit = require('twitter');
var router = express.Router();
var path = require('path');

// var twitter = new twit({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });



// router.get('/rate_limits', function(req, res, next) {
//     twitter.get('application/rate_limit_status', { screen_name: "corcorangroup" }, function(error, limits, response) {
//         if (error) throw error;
//         res.send(limits);
//     });
// });

module.exports = router;