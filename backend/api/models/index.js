/**
 * Setup models
 */
const glob = require('glob');
const path = require('path');

module.exports = function() {

  let modules = glob.sync('./api/models/*.js', {ignore: ['./api/models/index.js']});

  server.models = _(modules).keyBy(_.partialRight(path.basename, '.js')).mapValues((f, key) => {

    // var Model = require(path.resolve(process.cwd(), f))(server.config.sequelize);
    var Model = require('./'+key);
    if (server.config.global.models) {
      global[key] = Model;
    }
    return Model;
  }).value();
  // Setup DB relation

  // Sync db structure
  // server.config.sequelize.sync({}).then(() => {
  //   cb();
  // }).catch((err) => {
  //   server.log.error('Error initialize db', err);
  //   cb(err);
  // });
};
