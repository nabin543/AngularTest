var myApp = angular.module("myModule", [])

// var myController = function ($scope) {
//     $scope.message = "AngularJS Tutorial";
// }
// myApp.controller("myController", myController);

myApp.controller("myController", function ($scope) {
    $scope.message = "AngularJS Tutorial";
    //   $scope.message = 10+20 ;
});

myApp.controller("myController1", function ($scope) {
    //  $scope.message = "AngularJS Tutorial" ;
    $scope.message = 10 + 20;
});

