var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("I got a get ... request");

    person1 = {
      name: 'Tim',
      email: 'lads@gmail.com',
      number: '0561 219 3181'
    };

    person2 = {
      name: 'Cheryl',
      email: 'cherylnotcherub@gmail.com',
      number: '1800 981 381'
    };

    person3 = {
      name: 'Jerry',
      email: 'classicgag@hotmail.com',
      number: '333 333 981'
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000, function () {
  console.log('Tuning in to port 3000!');
});
