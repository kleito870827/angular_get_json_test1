var app = angular.module('app', []);
app.controller('descriptionCtrl', ['$scope', '$http', function(scope, http){
  http.get('https://jsonplaceholder.typicode.com/posts').success(function(data){
    scope.descriptions = data;
  });
}]);
