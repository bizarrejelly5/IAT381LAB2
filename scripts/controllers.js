var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.message = {
    'content' : 'WTF IS HAPPENING',
  }
});