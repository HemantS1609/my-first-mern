// *----------------------
//* express.Router
// *----------------------

//? In Express.js, express.Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
//* https://expressjs.com/en/guide/routing.html
//? Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authValidate = require("../validators/authValidator");
const validate = require("../middlewares/validateMiddleware");

router.route("/").get(authController.home);

// registration route
router
  .route("/register")
  .post(validate(authValidate.signupSchema), authController.register);

// login route
router
  .route("/login")
  .post(validate(authValidate.loginSchema), authController.login);

module.exports = router;
