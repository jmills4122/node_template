"use strict"

var db = require('../db'),
    formidable = require('formidable');

// A controller for the equipment resource
// This should have methods for all the RESTful actions
class shogi {

  show(req, res) {
      res.render('shogi/show', {user: req.user});
  }

  new(req, res) {
    res.render('shogi/new', {user: req.user});
  }

  redirect(req, res) {
    res.writeHead(301, {"Content-Type":"text/html", "Location":"/shogi"});
    res.end("This page has moved to <a href='/shogi'>Shogi</a>");
  }
}

module.exports = exports = new shogi();
