/**
 * Created by jkowalczyk on 2015-06-10.
 */
var gulp = require('gulp');
var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');



gulp.task('default', function(cb) {
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  var url = 'http://www.bankier.pl/sdata/300/pfinstruments';
  var post = JSON.stringify({  });

  request.post({url: url, form: post}, function(err, httpRes, body) {
    var result = JSON.parse(body);
    var timestamp = (new Date()).getTime();
    fs.writeFile('json/data'+timestamp+'.json', JSON.stringify(result, null, 4), function(){
      if(err) {
        console.log(err);
      } else {
        console.log("stock JSON saved to data" + timestamp + ".json");
      }
    });
    fs.writeFile('json/data.json', JSON.stringify(result, null, 4));
  });

});