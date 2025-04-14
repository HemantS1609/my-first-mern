require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/authRouter");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Middleware
app.use(express.json());

app.use("/api/auth", authRoute);

// error middleware
app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
