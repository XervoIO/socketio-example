Socket.io Sample App
====================

Example application using Socket.io. Simply pulls in tweets from Twitter with
the keywords iojs, javascript, es6, and Modulus.

## Configuration

The variables in `config.js` need to be configured in order to pull in tweets.
If the variables are not configured, the app will not poll for tweets.

Config.js format:

```javascript
module.exports = {
  consumer_key: process.env.consumer_key || 'ConsumerKey',
  consumer_secret: process.env.consumer_secret || 'ConsumerSecret',
  token: process.env.token || 'Token',
  token_secret: process.env.token_secret || 'TokenSecret'
};
```

You can choose not to configure the config variables and import them from your start script.

```
$ consumer_key='ConsumerKey' consumer_secret='ConsumerSecret' token='Token' token_secret='TokenSecret' node app.js
```