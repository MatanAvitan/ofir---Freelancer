/**
 * Created by Matan on 4/13/2017.
 */

var app = angular.modules('FreeLancer', ['ngRoute','ngResource']);

app.config(['$routeProvider', function ($provider) {
    $routeProvider
        .when('/index',{
            controller: 'MainController',
            templateUrl: 'Ofir - Freelancer/index.html'
        });
}]);
