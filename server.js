const express = require('express');
const app = express();
const mongojs = require('mongojs');
const db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("I got a get ... request");

  db.contactlist.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.listen(3000, function () {
  console.log('Tuning in to port 3000!');
});
