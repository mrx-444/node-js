const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Home Page");
  } else if (req.url === "/contact") {
    return res.end("Contact Page");
  } else if (req.url === "/about") {
    return res.end("About Page");
  } else {
    return res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Home</a>`);
  }
});

server.listen(5000);
