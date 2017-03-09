let UserService = module.exports = {};

UserService.register = (params, cb) => {
  User.create(params, function (err, newUser) {
    if (err) {
      return cb(err);
    }
    console.log('aaaaa');
    cb(null, newUser);
  })

  // var a = user.save();
  // console.log(a);
  // return a.then(function (newUser) {
  //   console.log(newUser);
  // })
  // user.save().then(function (newUser) {
  //   console.log('aaaaaaaaaaa');
  //   cb(null, newUser);
  // }, function (err) {
  //   console.log('bbbbbbbbb');
  //   return cb(err);
  // })
}