const express = require('express');
const path = require('path');
const glob = require('glob');
const cors = require('cors');

const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const passport = require('passport');

const _ = require('lodash');
const async = require('async');

const app = express();

// Connect to mongodb

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



// Global variables
global._ = require('lodash');
global.async = require('async');
global.server = {};

mongoose.Promise = global.Promise;
/**
 * Load modules
 * @param pattern glob pattern for modules to load
 * @param setGlobal Set modules to global variables
 * @param opts glob options
 */
server.loadModules = function(pattern, setGlobal, opts) {
  var modules = glob.sync(pattern, opts || {});
  return _(modules).keyBy(_.partialRight(path.basename, '.js')).mapValues((f, key) => {

    var module = require(path.resolve(process.cwd(), f));

    if (setGlobal) {
      global[key] = module;
    }
    return module;
  }).value();
};
server.startExpress = () => {
  // Start app
  require('./api/routes')(app);
  // Passport

  // // Load passport strategies
  // _.forOwn(server.config.passport, function(config, key) {
  //   console.log('Loading strategy', key);
  //   var Strategy = config.strategy;
  //   var strategy = new Strategy(config.options, AuthService.providers[key].verify);
  //   passport.use(strategy);
  // });

  // // Setup passport
  // passport.serializeUser(function(user, next) {
  //   next(null, user.id);
  // });

  // passport.deserializeUser(function(id, next) {
  //   User.findById(id).then(user => { next(null, user); }).catch(next);
  // });
  mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {} , (err) => {
    if (err) {
      console.log('Can not connect to mongodb');
      return process.exit();
    }
    app.listen(1111, () => {
      console.log('===============================');
      console.log('| App is running on port 1111 |');
      console.log('===============================');
    });
  });
}

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const Server = module.exports = {};
Server.init = (cb) => {
  server.config = server.loadModules('./config/*.js');
  server.services = server.loadModules('./api/services/*.js', server.config.global.services);
  server.controllers = server.loadModules('./api/controllers/*.js', server.config.global.controllers);

  require('./api/models')();
  
  // Load and sync models
  cb();
}

Server.init( (err) => {
  if (err) {
    return process.exit(1);
  }
  server.startExpress();
})


module.exports = app;
