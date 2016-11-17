"use strict"

var db = require('../db'),
    formidable = require('formidable');

// A controller for the equipment resource
// This should have methods for all the RESTful actions
class homepage {

  show(req, res) {
      res.render('homepage/show', {user: req.user});
  }

  new(req, res) {
    res.render('homepage/new', {user: req.user});
  }

  redirect(req, res) {
    res.writeHead(301, {"Content-Type":"text/html", "Location":"/homepage"});
    res.end("This page has moved to <a href='/homepage'>homepage</a>");
  }
}

module.exports = exports = new homepage();