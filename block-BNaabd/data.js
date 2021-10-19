var http = require('http');
var qs = require('querystring');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var dataFormat = req.headers['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  
  req.on('end', () => {
    if (req.method === 'POST' && req.url === '/json') {
      res.setHeader('Content-Type', 'application/json')
      var parsedData = JSON.parse(store);
      res.end(JSON.stringify(parsedData));
    }

    if (
      req.method === 'POST' && req.url === '/form'
    ) {
      res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
}

server.listen(7000, () => {
  console.log('Server is listening on 7k port');
});
