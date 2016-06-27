hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {

        $scope.employee = {};

        // TODO #HR6 get employee by id

        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function(data, status){
                $scope.employee = data;
            })
            .error(function(data, status){
                alert("Error: "+status);
            })

        $scope.back = function() {
            $location.url('/employeelist/');

        }

    }]);