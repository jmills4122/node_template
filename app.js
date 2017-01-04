/**
 * Template express setup for a generic app.
 */
var express = require('express'),
    app = express();

// Enable template engine
app.set('view engine', 'ejs');
app.set('views', './templates');


// Serve static files
app.use(express.static('public'));


// Hompage routes
var homepage = require('./endpoints/homepage');
app.get('/homepage/', homepage.show);
app.get('/', homepage.redirect);


app.listen(8080, function(){
  console.log("Listening on port 8080...");
});