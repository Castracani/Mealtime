const router = require("express").Router();
const userController = require("../../controllers/userController");

//should match with /api/users
router.route('/')
.post(userController.createUser)
.put(userController.updateUser);

module.exports = router;