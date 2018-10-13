const db = require('../models');

module.exports = {
  create: function(req, res) {
    const newRestaurant = {
      _id: req.body._id,
      name: req.body.name,
      address: req.body.address,
      url: req.body.url,
      price: req.body.price,
      cuisine: req.body.cuisine,
      to_go: req.body.to_go,
      dine_in: req.body.dine_in
    };
    db.Restaurant
      .create(newRestaurant)
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  }
};