const app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope, $http) {
    console.log("I'm the Fat Controller");

  $http.get('/contactlist').success(function(response) {
    console.log("I have the contactlist data");
    $scope.contactlist = response;
  });
});﻿
