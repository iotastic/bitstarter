var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());


app.get('/', function(request, response) {
  var test = new Buffer(fs.readFileSync("index.html"),"utf-8");
  var testtext = test.toString("utf-8");
//  var test2 = "This is a test";
//  response.send(test2);
  response.send(testtext);
});

/*
var test = new Buffer(fs.readFileSync("index.html"), "utf-8");
test.toString("utf-8");
*/

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
