// import user model
const User = require("../models/userModel");

// Home page
const home = async (req, res) => {
  try {
    res.status(200).send("This is first MERN Project and home page.");
  } catch (error) {
    console.log(error);
  }
};

// Registration page
const register = async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, phone, password } = req.body;
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res.status(400).json({ message: "email already exists" });
    }
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
