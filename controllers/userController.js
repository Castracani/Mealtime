const db = require('../models');

module.exports = { 
  createUser: function(req, res) {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    };
    db.User
      .create(newUser)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};