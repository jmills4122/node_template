"use strict"
var view = require('../view'),
  db = require('../db'),
  formidable = require('formidable'),

class talk {

  new(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(view.render('talk/new'));
  }
  create(req, res ,params){
    console.log(req.data);
    console.log(params.id);
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      console.log(fields);

      db.run('INSERT INTO talk (commentId,content)values (?,?)',
        params.id,
        fields.content
      );
    });

  }
  destroy(req,res,params){
      db.run('DELETE FROM talk WHERE id=?', params.comment_id);
      forum.show(req, res, params);
  }
}

module.exports = exports = new talk();
