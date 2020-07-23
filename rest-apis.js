//Includes the REST APIs
var express = require('express');
var app = express();
var fs = require("fs");

function controller(params) {
    var app = params.app;
    //var query_string = request.query.query_string;

    app.get('/affiliate?', function(req, res) {
        res.send("tagId is set to " + req.query.tagId);
      });
  }
  
  module.exports = controller;