"use strict"

var db = require('../db')

// This middleware loads the user (if logged in) and assigns
// thier information to the request.user property.
// If no user is signed, in, a Guest user is created for them.
function loadUser(req, res, next) {
  if(req.session && req.session.user_id) {
    db.get("SELECT * FROM users WHERE id = ?", req.session.user_id, (err, user) => {
      if(err) return res.sendStatus(500);
      if(user == undefined)
      {
          req.user = {username: "Guest"}
          return next();
      }
      req.user = user;
      return next();
    });
  } else {
    req.user = {username: "Guest"}
    next();
  }
}

module.exports = exports = loadUser;
