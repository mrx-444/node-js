const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// app.use([authorize, logger]);

// alternative
// app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/api/students", [authorize, logger], (req, res) => {
  console.log(req.user);
  res.send("Student Page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
