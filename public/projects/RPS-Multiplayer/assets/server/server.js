//attempt 3

var http = require('http');
var fs = require ('fs');

//404 response

function send404(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}


//handle a user request
function onRequest(request, response){
   if(request.method == 'GET' && request.url == '/'){
       response.writeHead(200, {"Content-Type": "text/html"});
       fs.createReadStream("./index.html").pipe(response);

   }else{
       send404(response);
   }
}

http.createServer(onRequest).listen(9005, '127.0.0.1');
console.log("Server is now running...");



//attempt 2

// var http = require('http');

// function onRequest(request, response){
//     console.log("a user made a request" + request.url);
//     response.writeHead(200,{"context-type": "text/plain"});
//     response.write("here is some prunes")
//     response.end();
// }

// http.createServer(onRequest).listen(8888)
// console.log("server is now running.")



//attempt 1 for server


//  const http = require('http');
//  const express = require('express');

//  const app = express();

//  const clientPath = `${__dirname}/../client`;
//  console.log(`Serving static from ${clientPath}`);

//  app.use(express.static(clientPath));

//  const server = http.createServer(app);

//  server.on('error', (err) =>{
//      console.error('Server error:', err);
//  })

//  server.listen(9005, () => {
//     console.log('RPS started on 9005');
//  });

//with out this code i get a "cannot get /" message

//  app.get('/', function (request, response) {
//     response.render('index', {});
//   });
