// var myApp = angular
//     .module("myModule", [])
//         .controller("myController", function ($scope) {
//             var name = {
//                 firstName:"Nabin",
//                 lastName:"Pandey",
//                 dob:"19951203",
//
//             };
//                 $scope.name = name;
//     });

var myApp=angular.module("myModule",[])

myApp.controller("nameController",function ($scope) {
            var name = {
                firstName:"Nabin",
                lastName:"Pandey",
                dob:"19951203"

            };
                $scope.name = name;
    });

myApp.controller("flagController", function ($scope) {
    var country = {
        name:"Nepal",
        capital:"Kathmandu",
        flag :"images/nepal_falg.png"

    };
    $scope.countryName = country;
});
myApp.controller("twoWayController", function ($scope) {
    $scope.message = "Practicing angular session";

});
myApp.controller("twoWayTextController", function ($scope) {
    var name = {
        firstName:"Nabin",
        lastName:"Pandey",
        dob:"19951203",

    };
    $scope.name = name;

});

myApp.controller("repeatControllerSingle", function ($scope) {
    var employees = [
        {firstName:"Nabin", lastName:"Pandey", gender:"Male",salary:"221122"},
        {firstName:"Ram", lastName:"giri", gender:"Male",salary:"221122"},
        {firstName:"Shyam", lastName:"Prasad", gender:"Male",salary:"221122"},
        {firstName:"Geeta", lastName:"tiwari", gender:"Female",salary:"221122"}
    ];
    $scope.employees = employees;

});

myApp.controller("repeatControllerNested", function ($scope) {
    var countries = [
        {name:"Nepal",
            city:[
                {name:"pokhara"},
                {name:"janakpur"},
                {name:"dharan"},
                {name:"biratnagar"},
                ]},
        {name:"India",
            city:[
                {name:"delhi"},
                {name:"banglore"},
                {name:"chennai"},
                {name:"pune"}
                ]}

    ];
    $scope.countries = countries;

});

myApp.controller("eventHandling", function ($scope) {
    var technologies = [
        { name:"C#", likes:0, dislikes:0 },
        { name: "ASP.NET", likes: 0, dislikes: 0 },
        { name: "SQL", likes: 0, dislikes: 0 },
        { name: "AngularJS", likes: 0, dislikes: 0 }
    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };

    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    };


});

myApp.controller("FilterOrderBYHeaderTable", function ($scope) {
    var employees = [
        {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
        {name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 57000},
        {name: "Mark", dateOfBirth: new Date("June 23, 1973"), gender: "Male", salary: 55325},
        {name: "Pam", dateOfBirth: new Date("August 23, 1985"), gender: "Female", salary: 583654},
        {name: "Todd", dateOfBirth: new Date("July 7, 1988"), gender: "Male", salary: 4965246}
    ];
    $scope.employees = employees;
    $scope.rowLimit = 3;
    $scope.sortColumn = 'name';
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }

        return '';
    }
});


myApp.controller("customFilter", function ($scope) {
        var employees = [
            {firstName:"Nabin", lastName:"Pandey", gender:1,salary:"221122"},
            {firstName:"Ram", lastName:"giri", gender:1,salary:"221122"},
            {firstName:"Shyam", lastName:"Prasad", gender:1,salary:"221122"},
            {firstName:"Geeta", lastName:"tiwari", gender:2,salary:"221122"}
        ];
        $scope.employees = employees;
        $scope.employeeView = "EmployeeTable.html";
});
