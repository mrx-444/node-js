const express = require("express");
const app = express();
const logger = require("./logger");

app.use(logger);
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

app.get("/api/students", (req, res) => {
  res.send("Student Page");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
