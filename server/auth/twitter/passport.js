
  var passport = require('passport');
  var TwitterStrategy = require('passport-twitter').Strategy;

exports.setup = function (User, config) {
  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: 'http://127.0.0.1:9000/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({
      'twitter.id_str': profile.id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'twitter',
          twitter: profile._json
        });
        user.save(function(err) {
          if (err) return done(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
    }
  ));
};