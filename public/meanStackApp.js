/**
 * Created by Yajing Li on 6/12/2017.
 */
angular.module('finalDemoApp', [])
.controller('finalDemoAppCtrl', function($scope, $http) {
    $http.get('http://localhost:8080/myGetAPI').then(
        function(data) {
            $scope.flights = data.data;
            //console.log(data.data);
        }
    )
});