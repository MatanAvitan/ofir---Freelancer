/**
 * Created by Matan on 4/13/2017.
 */

var app = angular.module('FreeLancer', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function ($provider) {
    $routeProvider
        .when('/',{
            controller: 'FreeLancer.MainController',
            templateUrl: 'Ofir - Freelancer/index.html'
        });
}]);
