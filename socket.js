var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io').listen(server);
var config  = require('./config'); //Configure with proper keys from twitter
var tw      = require('node-tweet-stream')(config);

// Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.locals.title = 'Modulus | Socket.io Example App';

// Track Tweets
tw.track('javascript');
tw.track('modulus');
tw.track('iojs');
tw.track('es6');

// Send Tweet to Socket.io
tw.on('tweet', function(tweet) {
  console.log('New Tweet: %s', tweet.text);
  io.emit('tweet', tweet);
});

// Render Index Page
app.get('/', function(req, res) {
  res.render('index');
});

app.get('*', function(req, res) {
  res.redirect(301, '/');
});

server.listen(process.env.PORT || 4343, function(){
  console.log('Modulus Socket.io Example App listening on port %d', server.address().port);
});
