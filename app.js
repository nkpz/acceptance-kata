
var express = require('express');
var server = express();
server.configure(function(){
  server.use("/app",express.static(__dirname + "/src/main/webapp"));
});

server.get('/rest/rentals', function(req, res){
  res.json([ { name: "widget1" }, { name: "widget2"} , {name: "widget3"} ]);
});

server.listen(3000);
console.log('Ready at http://localhost:3000/app/index.html');
