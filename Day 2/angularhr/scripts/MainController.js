/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('MainController',['$scope','$rootScope',function($scope, $rootScope){
    $scope.name = "Andrei";
    alert($scope.name);
}])