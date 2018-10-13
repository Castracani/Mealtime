const router = require("express").Router();
const tomtomController = require("../../controllers/tomtomController");

//should match with "api/home"
router.route('/')
  .get(tomtomController.render);

  module.exports = router;