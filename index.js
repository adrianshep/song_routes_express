var express = require('express');
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000");
});


// root route
app.get('/', function (req, res){
  res.redirect('/songs');
});

var song_routes = require('./song_routes');
song_routes.setup(app);
