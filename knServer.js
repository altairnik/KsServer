const http = require('http');

const requestListener = function (req, res) {
  console.log(req.method);
  console.log(req.url);
  if (req.method === "GET") {
    console.log("ccccc");
  }
  else if (req.method === "POST") { 
    console.log("aaaa");
  }
  res.writeHead(200);
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);