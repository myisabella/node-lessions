// import dependencies
var express = require('express');
var utility = require('utility');

// create express object
var app = express();

app.get('/', function(req, res) {
  // get the q parameter from req.query
  var q = req.query.q;

  // call utility.md5 method to get the md5 value
  // var md5Value = utility.md5(q);
  // call utility.sha1 method to get the sha1 value
  var sha1Value = utility.sha1(q);

  // res.send(md5Value);
  res.send(sha1Value);
});

app.listen(3000, function(req, res) {
  console.log('app is running at port 3000');
});
