const User = require('../models/userModel');

// Kullanıcı oluşturma
exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};
