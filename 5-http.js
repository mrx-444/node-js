const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Welcome to our homepage");
      res.end();
    }

    if (req.url === "/contact") {
      res.write("Contact Us: 1234-567-8999");
      res.end();
    }

    if (req.url === "/about") {
      res.write("My name is: 444");
      res.end();
    }

    res.write(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Home</a>`);
    res.end();
  })
  .listen(5000);
