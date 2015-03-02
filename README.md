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

## License

The MIT License (MIT)

Copyright (c) 2015 Modulus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.