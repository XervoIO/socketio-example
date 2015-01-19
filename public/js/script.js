(function() {
  var url = window.location.origin || (window.location.protocol +
            "//" + window.location.hostname +
            (window.location.port ? ':' + window.location.port: ''));

  var tweets = document.getElementById('tweets');

  var socket = io(url);

  var chirp  = function chirp(data) {
    var span = document.createElement('li');
    span.setAttribute('class', 'tweet');

    // Twitter Profile Image
    var t_image = document.createElement('img');
    t_image.setAttribute('class', 'tweet_image');
    t_image.setAttribute('src', data.user.profile_image_url);
    t_image.setAttribute('alt', 'Twitter '  + data.user.screen_name + ' Profile Image');

    // Twitter Tweet
    var t_text = document.createElement('span');
    t_text.setAttribute('class', 'tweet_text');
    t_text.innerHTML += data.text;

    // Twitter Tweet Time
    var t_time = document.createElement('span');
    t_time.setAttribute('class', 'tweet_time');
    t_time.innerHTML += moment(data.created_at).format('LT');

    // Tweet Link
    var t_link = document.createElement('a');
    t_link.setAttribute('target', '_blank');
    t_link.setAttribute('href', 'https://twitter.com/'
        + data.user.screen_name
        + '/status/'
        + data.id_str);
    t_link.appendChild(t_time);

    // Add Twitter elements to span
    span.appendChild(t_image);
    span.appendChild(t_text);
    span.appendChild(t_link);

    // Add span to top of tweets
    tweets.insertBefore(span, tweets.firstChild);
    // console.log(data);
  };

  socket.on('tweet', chirp);
}());