const { dirname } = require('path');
var http = require('http');
var qs = require('querystring');
var fs = require('fs');

var serverAbsPath = __dirname;
// console.log(serverAbsPath);

var appAbsPath = __dirname;
// console.log(appAbsPath);

var indexRePath = './index.html';
// console.log(indexRePath);

var indexAbsPath = __dirname + '/index.html';
// console.log(indexAbsPath);

// let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   var dataFormat = req.headers['content-type'];
//   var store = '';
//   req.on('data', (chunk) => {
//     store = store + chunk;
//   });
  
//   req.on('end', () => {
//     if (req.method === 'POST' && req.url === '/') {
//       res.setHeader('Content-Type', 'application/json')
//       var parsedData = JSON.parse(store);
//       res.end(JSON.stringify(parsedData));
//     }
//   })
// }

// server.listen(3001, () => {
//   console.log("server is listening on 3001 port");
// })

//

// let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   var dataFormat = req.headers['content-type'];
//   var store = '';
//   req.on('data', (chunk) => {
//     store = store + chunk;
//   });

//   req.on('end', () => {
//     if (req.method === 'POST' && req.url === '/json') {
//       res.setHeader('Content-Type', 'application/json');
//       var parsedData = JSON.parse(store);
//       res.writeHead(201, {'Content-Type' : 'text/json'})
//       res.end(JSON.stringify(parsedData));
//     }

//      if (req.method === 'POST' && req.url === '/form') {
//        res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
//        var parsedData = qs.parse(store);
//        res.end(JSON.stringify(parsedData.captain));
//      }
//   });
// }

// server.listen(3001, () => {
//   console.log('server is listening on 3001 port');
// });


// let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   var dataFormat = req.headers['content-type'];
//   var store = '';
//   req.on('data', (chunk) => {
//     store = store + chunk;
//   });

//   req.on('end', () => {
//     if (req.method) {
//       res.setHeader('Content-Type', 'application/json');
//       var parsedData = JSON.parse(store);
//       res.end(JSON.stringify(parsedData));
//     }

//     if (req.method) {
//       res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
//       var parsedData = qs.parse(store);
//       res.end(JSON.stringify(parsedData));
//     }
//   });
// }

// server.listen(9000, () => {
//   console.log('server is listening on 9k port');
// });

