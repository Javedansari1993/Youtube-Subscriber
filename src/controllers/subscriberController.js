const Subscriber = require("../models/subscribers");
const mongoose = require("mongoose");

//Initial add data to database
// const data = require("../data");

// Subscriber.insertMany(data,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved")
//     }
// })

//get all Subscriber
const getSubscribers = async (req, res) => {
  try {
    // get all subscribers
    const subscriber = await Subscriber.find({});
    //get all subscriber with a status code of 200
    return res.status(200).json(subscriber);
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

// get a single workout for a perticular id
const getSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    //check id valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // if id does not valide return invalid subscriber with status code 404
      return res.status(404).json({ message: `invalid  subscriber id ${id}` });
    }
    // get Single subscriber via id
    const subscriber = await Subscriber.findById(id);
    if (!subscriber) {
      //if subscriber not present for a perticular id return status code 400 with error
      return res
        .status(400)
        .json({ message: `This id ${id} does not have any subscriber` });
    } else {
      //if subscriber present for a perticular id then return subscriber with status code 200
      res.status(200).json(subscriber);
    }
  } catch (error) {
    // incase of an error return a status code 400 with error
    return res.status(400).json({ error: error.message });
  }
};

// GET request for the path of './subscriber/names'
const getNameSubscribers = async (req, res) => {
  try {
    // get all subscribers
    const subscriber = await Subscriber.find({}).select(
      "-__v -_id -subscribedDate"
    );
    //get all subscriber with a status code of 200
    return res.status(200).json(subscriber);
  } catch (error) {
    //incase of error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

//POST request for create new subscriber
const createSubscriber = async (req, res) => {
  const postBody = req.body;
  try {
    //create subscriber and add to database
    const subscriber = await Subscriber.create(postBody);
    // subscriber add to data base with status code 200
    return res.status(200).json(subscriber);
  } catch (error) {
    //incase of an error , return status code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

//DELETE a subscriber
const deleteSubscriber = async (req, res) => {
  try {
    //get id from params request
    const { id } = req.params;
    //check id valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // if id not valide return invalid  subscriber with status code 404
      return res.status(404).json({ message: `invalid  subscriber id ${id}` });
    }

    const subscriber = await Subscriber.findOneAndDelete({ _id: id });

    if (!subscriber) {
      //if subscriber not present for a perticular id return error with status code 400
      return res.status(400).json({
        message: `This id ${id} does not have any subscriber for delete`,
      });
    } else {
      // delete document form the databse
      return res.status(200).json(subscriber);
    }
  } catch (error) {
    //incase of an error , return code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

//PATCH request for update a subscriber
const updateSubscriber = async (req, res) => {
  try {
    //get id from params request
    const { id } = req.params;
    //check id valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // if id not valide return invalid subscriber with status code 404
      return res.status(404).json({ message: `invalid  subscriber id ${id}` });
    }
    //update  subscriber for perticular id
    const subscriber = await Subscriber.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!subscriber) {
      //if subscriber not present for a perticular id return error with status code 400
      return res.status(400).json({
        message: `This id ${id} does not have any subscriber for update`,
      });
    } else {
      //update  subscriber for perticular id return updated subscriber with status code 200
      return res.status(200).json(subscriber);
    }
  } catch (error) {
    //incase of an error , return code of 400 with error
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getSubscribers,
  getSubscriber,
  createSubscriber,
  deleteSubscriber,
  updateSubscriber,
  getNameSubscribers,
};
