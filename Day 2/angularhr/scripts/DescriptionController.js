/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('DescriptionController',['$scope', function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable =  function(){
        $scope.firstVariable = undefined;
    }
    $scope.setFirstVariable = function(){
        $scope.firstVariable = val;
    }
    $scope.descriptionhide = false;
    $scope.descriptionShow = true;
}]);