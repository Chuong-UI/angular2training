// const User = require('./User');

let UserController = module.exports = {};

UserController.register = (req, res) => {
  // console.log(UserService);
  UserService.register(req.body, (err, newUser) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(newUser);
  });
}

UserController.getAll = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(users);
  })
}