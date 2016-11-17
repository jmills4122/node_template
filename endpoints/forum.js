"use strict"

var db = require('../db'),
    formidable = require('formidable');

// A controller for the equipment resource
// This should have methods for all the RESTful actions
class forum {

  index(req, res) {
    var forum = db.all('SELECT * FROM forum', function(err, forum){
      if(err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.render('forum/index', {forum: forum, user: req.user});
    });
  }

  show(req, res) {
    var forum = db.get('SELECT * FROM forum WHERE ID=?', req.params.id, function(err, item){
      if(err) {
        console.error(err);
        return res.sendStatus(400);
      }
      var comments = db.all('SELECT * From talk Where commentId=?', req.params.id,function(err, talk){
        if(err) {
        res.writeHead(500, {"Content-Type":"text/html"});
        res.end("<h1>Server Error</h1>");
        return;
      }
      res.render('forum/show', {item : item, user : req.user,  talk : talk});
    });
    });
  }

  new(req, res) {
    res.render('forum/new', {user: req.user});
  }

  create(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      db.run('INSERT INTO forum (title,content) values (?,?)',
        fields.title,
        fields.content
      );
      res.redirect('/forum');
    });
  }

  destroy(req, res) {
    db.run('DELETE FROM forum WHERE id=?', req.params.id);
    res.redirect('/forum');
  }

  redirect(req, res) {
    res.writeHead(301, {"Content-Type":"text/html", "Location":"/forum"});
    res.end("This page has moved to <a href='/forum'>forum</a>");
  }
}

module.exports = exports = new forum();
