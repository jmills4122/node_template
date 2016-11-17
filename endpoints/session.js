"use strict"

var encryption = require('../encryption'),
    db = require('../db'),
    formidable = require('formidable');

// An endpoint for logging in and out users
class Session {

  // Renders a login form with no error message
  new(req, res) {
    res.render('session/new', {message: "", user: req.user});
  }

  // Creates a new session, provided the username and password match one in the database,
  // If not, renders the login form with an error message.
  create(req, res, next) {
    req.session.reset();
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if(err) return res.sendStatus(500);
      db.get("SELECT * FROM users WHERE username = ?", fields.username, (err, user) => {
        if(err) return res.render('session/new', {message: "Username/Password not found.  Please try again.", user: req.user});
        if(!user) return res.render('session/new', {message: "Username/Password not found.  Please try again.", user: req.user});
        if(user.password_digest != encryption.digest(fields.password + user.salt)) return res.render('session/new', {message: "Username/Password not found.  Please try again.", user: req.user});
        req.session.user_id = user.id;
        return res.redirect('/homepage');
      });
    });
  }

  createAccount(req, res, next) {
    req.session.reset();
    var salt = encryption.salt();
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if(err) return res.sendStatus(500);
       db.run("INSERT INTO users (username, admin, password_digest, salt) values (?,?,?,?)",
        fields.username,
        false,
        encryption.digest(fields.password + salt),
        salt)
        db.get("SELECT * FROM users WHERE username = ?", fields.username, (err, user) =>
        {req.session.user_id = user.id})
        return res.redirect('/homepage');
      });
    }


  newAccount(req, res, next) {
  res.render('login/register', {message: "", user: req.user});
  }
  // Ends a user session by flushing the session cookie.
  destroy(req, res) {
    req.session.reset();
    res.render("session/delete", {user: {username: "Guest"}});
  }

}

module.exports = exports = new Session();
