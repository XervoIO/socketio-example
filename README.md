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
  consumer_key: process.env.CONSUMER_KEY || 'ConsumerKey',
  consumer_secret: process.env.CONSUMER_SECRET || 'ConsumerSecret',
  token: process.env.TOKEN || 'Token',
  token_secret: process.env.TOKEN_SECRET || 'TokenSecret'
};
```

You can choose not to configure the config variables and import them from your start script.

```
$ CONSUMER_KEY='ConsumerKey' CONSUMER_SECRET='ConsumerSecret' TOKEN='Token' TOKEN_SECRET='TokenSecret' node app.js
```