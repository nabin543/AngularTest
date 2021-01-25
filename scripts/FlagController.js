var myApp = angular
    .module("myModule", [])
    .controller("flagController", function ($scope) {
        var country = {
            name:"Nepal",
            capital:"Kathmandu",
            flag :"images/nepal_falg.png"

        };
        $scope.countryName = country;
    });