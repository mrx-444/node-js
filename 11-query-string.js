const express = require("express");
const app = express();
const { students } = require("./data");

app.get("/api/students/search", (req, res) => {
  const { search, limit } = req.query;
  let sortedStudent = [...students];

  if (search) {
    sortedStudent = sortedStudent.filter((student) => {
      return student.gender.startsWith(search.toUpperCase());
    });
  }

  if (limit) {
    sortedStudent = sortedStudent.slice(0, Number(limit));
  }

  if (sortedStudent.length < 1) {
    // return res.status(200).send("No student matched your search");
    return res
      .set("Content-Type", "application/json")
      .status(200)
      .json({ success: true, data: [] });
  }

  res.set("Content-Type", "application/json").status(200).json(sortedStudent);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
