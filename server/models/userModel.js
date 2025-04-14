// here create blueprint of user registration form same as UI fields.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phonenumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// define the model(model name always capitalize) or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
