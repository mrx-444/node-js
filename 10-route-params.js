const express = require("express");
const app = express();
const { students } = require("./data");

app.get("/api/students", (req, res) => {
  const newStudents = students.map((student) => {
    const { id, name, skills } = student;
    return { id, name, skills };
  });
  res.json(newStudents);
});

app.get("/api/students/:studentID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { studentID } = req.params;
  const student = students.find((student) => student.id === Number(studentID));

  if (!student) {
    return res.status(404).send("<h1>Page Not Found</h1>");
  }

  return res.json(student);
});

// EXTRA INFO
app.get("/api/students/:studentID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello");
});

// basic

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404);
  res.send("page not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
