const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('this is the home page');
  }
  if (req.url === '/about') {
    res.end('this is about page');
  }
  res.end(`
  <h1>Oops!</h1>
  <p>the page you are looking for doesn't exist</p>
  <a href="/">back to home</a>
  `);
});

server.listen(9999);
