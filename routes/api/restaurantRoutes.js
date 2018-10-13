const router = require("express").Router();
const restaurantController = require("../../controllers/customRestaurantController");

//should match with "api/restaurant"
router.route('/')
  .post(restaurantController.create);

  module.exports = router;