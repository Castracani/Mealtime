const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./authRoutes");
const restaurantRoutes = require("./restaurantRoutes");
const userRoutes = require("./userRoutes");
const foursquare = require("./foursquare");
const tomtom = require("./tomtom");

// API Routes
router.use("/api", apiRoutes);
router.use("/entrance", userRoutes);
router.use("/entrance", foursquare);
router.use("/home", tomtom);
router.use("/restaurant", restaurantRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
