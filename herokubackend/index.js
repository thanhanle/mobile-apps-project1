const path = require('path')
const PORT = process.env.PORT || 5000
fs = require('fs');
http = require('http');
url = require('url');
var numcount = 0;


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("" + numcount);
  numcount++;
}).listen(PORT, "0.0.0.0");
