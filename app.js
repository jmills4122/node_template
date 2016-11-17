var express = require('express'),
    app = express(),
    sessions = require('client-sessions'),
    loadUser = require('./middleware/load_user'),
    noGuests = require('./middleware/no_guests'),
    adminOnly = require('./middleware/admin_only'),
    encryption = require('./encryption');

// Enable template engine
app.set('view engine', 'ejs');
app.set('views', './templates');

// Enable sessions
app.use(sessions({
  cookieName: 'session',
  secret: 'somerandomstring',
  duration: 24*60*60*1000,
  activeDuration: 1000*60*5
}));

// Load the user (if there is one)
app.use(loadUser);

// Serve static files
app.use(express.static('public'));

// Login routes
var session = require('./endpoints/session');
app.get('/login', session.new);
app.post('/login', session.create);
app.get('/logout', session.destroy);

//Seesion routes
app.post('/register', session.createAccount);
app.get('/register', session.newAccount);

// Hompage routes
var homepage = require('./endpoints/homepage');
app.get('/homepage/', homepage.show);
app.get('/', homepage.redirect);

//Shogi routes
var shogi = require('./endpoints/shogi');
app.get('/shogi/', shogi.show);
app.get('/', shogi.redirect);

//Forum routes
var forum = require('./endpoints/forum');
app.get('/forum', forum.index);
app.get('/forum/new', forum.new);
app.get('/forum/:id', forum.show);
app.post('/forum', forum.create);
app.get('/forum/:id/delete', forum.destroy);
app.get('/', forum.redirect);

app.listen(80, () => {
  console.log("Listening on port 80...");
});
