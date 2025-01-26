const mongoose = require("mongoose");
require('dotenv').config();

const mongo_uri = process.env.MONGO_URI;

const mongoconnectdb = (callback) => {
  mongoose
    .connect(mongo_uri)
    .then(() => {
      console.log("Connected with the MongoDB Atlas Database");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
};

module.exports = mongoconnectdb;