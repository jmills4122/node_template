"use strict"

// Only users with admin status can continue
// down the pipeline
function adminOnly(req, res, next) {
  if(req.user && req.user.admin) return next();
  else res.sendStatus('403');
}

module.exports = exports = adminOnly;
