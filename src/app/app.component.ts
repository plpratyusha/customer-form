import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  adminEmails = [
  	{ name: 'newAdminEmail', id: 1 }
  ];

  onAdd() {
  	this.adminEmails.push({ id: 2, name: 'newAdminEmail2' });
  }

/*
  var app = angular.module('myApp', []);
  app.controller('inspectionController', function($scope, $http) {
  $scope.choiceSet = {
    choices: []
  };
  $scope.quest = {};
  $scope.choiceSet.choices = [];
  $scope.addNewChoice = function() {
    $scope.choiceSet.choices.push('');
  };
  $scope.removeChoice = function(z) {
    $scope.choiceSet.choices.splice(z, 1);
  };
});
*/


}
