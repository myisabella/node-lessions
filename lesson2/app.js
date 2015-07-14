// import dependencies
var express = require('express');
var utility = require('utility');

// create express object
var app = express();

app.get('/', function(req, res) {
  // get the q parameter from req.query
  var q = req.query.q;

  // call utility.md5 method to get the md5 value
  var md5Value = utility.md5(q);

  res.send(md5Value);
});

app.listen(3000, function(req, res) {
  console.log('app is running at port 3000');
});
