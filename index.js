var express = require('express');
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000");
});


// root route
app.get('/', function (req, res){
  res.redirect('/songs');
});

// songs#index
app.get('/songs', function (req, res) {
  res.send('GET index of Songs');
});

// songs#new
app.get('/songs/new', function (req, res) {
  res.send('GET to gather info for a new Song');
});

// songs#show
app.get('/songs/:id', function (req, res) {
  res.send('GET to show Song:' + req.params.id);
});

// songs#create
app.post('/songs', function (req, res) {
  res.send('POST to create a Song');
});

// songs#edit
app.get('/songs/:id/edit', function (req, res) {
  res.send('GET to gather info to update Song:' + req.params.id);
});

// songs#update
app.patch('/songs/:id', function (req, res) {
  res.send('PATCH to update Song:' + req.params.id);
});

// songs#delete
app.delete('/songs/:id', function (req, res) {
  res.send('DELETE Song:' + req.params.id);
});
