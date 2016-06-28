const app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope) {
    console.log("It's your boy bangs");

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
  $scope.contactlist = contactlist;
});﻿
