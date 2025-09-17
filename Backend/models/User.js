// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: String,
  address: String,
  age: Number,
  cart: [
    {
      id: String,
      name: String,
      img: String,
      price: String,
    },
  ],
  favourites: [
    {
      id: String,
      name: String,
      img: String,
      price: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);