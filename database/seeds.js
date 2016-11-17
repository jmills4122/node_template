var  sqlite3 = require('sqlite3'),
    db = new sqlite3.Database('development.sqlite3'),
    encryption = require('../encryption');

// Create the database schema and populate
db.serialize(function() {

  // Drop users table if it exists
  db.run("DROP TABLE IF EXISTS users");
  // Create the users table
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, admin BOOLEAN, password_digest TEXT, salt TEXT)");
  // Create a default user
  var salt = encryption.salt();
  db.run("INSERT INTO users (username, admin, password_digest, salt) values (?,?,?,?)",
    'admin',
    true,
    encryption.digest('insecurepassword' + salt),
    salt
  );
  // Log contents of the user table to the console
  db.each("SELECT * FROM users", function(err, row){
    if(err) return console.error(err);
    console.log(row);
  });


  // Drop equipment table if it exists
  db.run("DROP TABLE IF EXISTS forum");
    db.run("DROP TABLE IF EXISTS talk");
  // Create the equipment table
  db.run("CREATE TABLE forum (id INTEGER PRIMARY KEY, title VARCHAR(50), content TEXT )");
  db.run("CREATE TABLE talk (id INTEGER PRIMARY KEY,commentId INTEGER FORIEGN KEY, author VARCHAR(50), commentBody TEXT )");
  // Populate the equipment table
  for(var i = 0; i < 20; i++) {
    db.run("INSERT INTO forum (title, content) VALUES ('WiiMote', 'CIS-WII-" + i + "')");
    for(var j = 0; j < 5; j++){
        db.run("INSERT INTO talk (commentId,author, commentBody) VALUES (" + i +",'Bob','Yo' )");
    }
  }
  // Log contents of equipment table to the console
  db.each("SELECT * FROM forum", function(err, row){
    if(err) return console.error(err);
    console.log(row);
  });
});
