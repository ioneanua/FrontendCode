hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, CommonResourcesFactoryBackup) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /**
         * Reset form
         */

        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];

        $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
            .success(function (data,status) {
                $scope.departments = data;
            })
            .error(function (data, status) {
                alert("Error: "+status);
            })

        $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
            .success(function (data,status) {
                $scope.jobs = data;
            })
            .error(function (data, status) {
                alert("Error: "+status);
            })

        $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
            .success(function (data,status) {
                $scope.managers = data;
            })
            .error(function (data, status) {
                alert("Error: "+status);
            })

        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        
        
        
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);