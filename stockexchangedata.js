//var argv = require('yargs').argv;
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/getdata', function (req, res, next) {
  
  var request = require('request');


    var url = 'http://www.bankier.pl/sdata/300/pfinstruments';
    var post = JSON.stringify({  });

    console.log('url: ', url);
    console.log('options: ', post);
    request.post({url: url, form: post}, function(err, httpRes, body) {
        var result = JSON.parse(body);
        res.send(result);
    });
});



var server = app.listen(12345, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


