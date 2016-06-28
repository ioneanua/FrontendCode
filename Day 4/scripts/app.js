var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/forms', {
            templateUrl: 'views/form.html',
            controller: 'FormController'
        })
        .when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);