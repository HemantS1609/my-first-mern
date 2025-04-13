require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/authRouter");
const connectDB = require("./utils/db");

// Middleware
app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
