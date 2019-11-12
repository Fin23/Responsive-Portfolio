
  var http = require('http');
 var fs = require('fs');
  var PORT = 3000;

 var server = http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      fs.readFile('index.html', function(error,data){
          if (error){
              res.writeHead(404);
              res.write('error: file not found');
          }else{
              res.write(data);
          }
         res.end();
     });



  });

  server.listen(port, function(error){
      if (error) {
        console.log('something went wrong', error);

      }else{
              console.log('server is listening to port' + port);
     }});
