const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

// App config
const app = express();

//Middleware's
app.use(express.json());

// MongoDB URI
const mongoURI = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// use routes
app.use("/api/items", items);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server has been started on port...", port);
});
