require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/authRouter");
const contactRoute = require("./router/contactRouter");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// error middleware
app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
