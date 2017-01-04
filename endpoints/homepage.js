"use strict"

/**
 * Controller for the homepage resources and routes
 */
class homepage {

  ///Renders homepage as response.
  show(req, res) {
      res.render('homepage/show');
  }

  ///Redirects to the homepage, and responds with link to homepage
  redirect(req, res) {
    res.writeHead(301, {"Content-Type":"text/html", "Location":"/homepage"});
    res.end("This page has moved to <a href='/homepage'>homepage</a>");
  }
}

module.exports = exports = new homepage();
