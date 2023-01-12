const express = require("express");
const {
  defaultRoutes,
  getSubscribers,
  getSubscriber,
  createSubscriber,
  deleteSubscriber,
  updateSubscriber,
  getNameSubscribers
} = require("./controllers/subscriberController");

const router = express.Router();

// GET request for defaultRoutes
router.get("/",defaultRoutes)
// GET request to get all subscribers
router.get("/subscribers", getSubscribers)

//GET request for the path '/subscribers/names
router.get("/subscribers/names", getNameSubscribers);

//GET request as per id
router.get("/subscribers/:id", getSubscriber);

//POST request to add a subscriber
router.post("/subscribers", createSubscriber);

// DELETE request as per id
router.delete("/subscribers/:id", deleteSubscriber);

//Patch request for update as per id
router.patch("/subscribers/:id",updateSubscriber);

module.exports = router;
