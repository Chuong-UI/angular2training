/**
 * Created by tphuocthai on 3/20/16.
 */

var nconf = require('nconf');

module.exports = {
  local: {
    strategy: require('passport-local').Strategy,
    options: {
      usernameField: 'email',
      passwordField: 'passwd'
    }
  },

  jwt: {
    strategy: require('passport-jwt').Strategy,
    options: {
      jwtFromRequest: require('passport-jwt').ExtractJwt.fromAuthHeader(),
      secretOrKey: nconf.get('jwt:secret'),
      issuer: nconf.get('jwt:issuer'),
      expiresIn: '7days'
    }
  },

  // google: {
  //   name: 'Google',
  //   protocol: 'oauth2',
  //   strategy: require('passport-google-oauth').OAuth2Strategy,
  //   scope: ['profile', 'email'],
  //   options: {
  //     clientID: nconf.get('google:clientID'),
  //     clientSecret: nconf.get('google:clientSecret')
  //   }
  // },
  // facebook: {
  //   name: 'Facebook',
  //   protocol: 'oauth2',
  //   strategy: require('passport-facebook').Strategy,
  //   options: {
  //     clientID: nconf.get('facebook:clientID'),
  //     clientSecret: nconf.get('facebook:clientSecret'),
  //   }
  // }
};
