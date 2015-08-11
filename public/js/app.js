var app = angular.module('textSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "templates/home.html",
        controller: "homeCtrl"
    })

    .when('/support', {
        templateUrl: "templates/support.html",
        controller: "supportCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
