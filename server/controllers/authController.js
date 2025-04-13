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
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
