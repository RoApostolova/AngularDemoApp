'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index'});
}])
    .controller('TodoCtrl', function($scope) {
        $scope.todoList = [{todoText:'ToDo my first angular app', done:false}];

        $scope.todoAdd = function() {
            $scope.todoList.push({todoText:$scope.todoInput, done:false});
            $scope.todoInput = "";
        };

        $scope.remove = function() {
            let oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.todoList.push(x);
            });
        };
    });

