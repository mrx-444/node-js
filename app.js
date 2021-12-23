const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Home Page");
      res.end();
    }

    if (req.url === "/contact") {
      res.write("Contact Page");
      res.end();
    }

    if (req.url === "/about") {
      res.write("About Page");
      res.end();
    }

    res.write(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Home</a>`);
    res.end();
  })
  .listen(5000);
