/**
 * Created by Matan on 4/13/2017.
 */

app.controller('FreeLancer.MainController', ['$scope', '$http', function ($scope) {
    console.log('Entered');
    // create a blank object to handle form data.
    $scope.user = {};
    console.log($scope.user);
    // calling our submit function.
    $scope.submitForm = function ($scope, $http) {
        console.log('Submited');
        // Posting data to php file
        $http({
            method: 'POST',
            url: '/data',
            data: $scope.user, //forms user object
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                $scope.message = data.message;
                console.log($scope.message);
                console.log('Success');
            });
    };
}]);