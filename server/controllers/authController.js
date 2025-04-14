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

    res.status(201).json({
      msg: "registration successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

// Login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswordMatched = await userExist.comparePassword(password);

    if (isPasswordMatched) {
      res.status(200).json({
        message: "Login Successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { home, register, login };
