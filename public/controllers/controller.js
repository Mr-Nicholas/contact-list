/*jshint esversion: 6 */

const app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope, $http) {
    console.log("I'm the Fat Controller");

    var refresh = function() {
      $http.get('/contactlist').success(function(response) {
        console.log("Contactlist controller loaded");
        $scope.contactlist = response;
        $scope.contact = "";
      });
    };

    refresh();

    $scope.addContact = function() {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function(response) {
        console.log(response);
        refresh();
      });
    };

    $scope.remove = function(id) {
      console.log(id);
      $http.delete('/contactlist/' + id).success(function(response) {
        refresh();
      });
    };

    $scope.edit = function(id) {
      console.log(id);
      $http.get('/contactlist/' + id).success(function(response) {
        $scope.contact = response;
      });
    };

    $scope.update = function() {
      console.log($scope.contact._id);
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
        refresh();
      });
    };

    $scope.deselect = function() {
      $scope.contact = "";
    };
});﻿
