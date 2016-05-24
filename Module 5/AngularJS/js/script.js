/*
var module = angular.module('listApp', []);
var controller = module.controller('listController', initController);
function initController($scope) {    
    $scope.items = ['First Item'];
    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }        
    }
}
*/
var module = angular.module('demoApp', []);
var controller = module.controller('demoController', initController);
function initController($scope, $http) {    
    $http.get('http://httpbin.org/ip')
        .then(function(response) {
            $scope.resultJSON = JSON.stringify(response);
            $scope.resultProperty = response.data.origin;
        });    
}