/**
 * Created by Matan on 4/13/2017.
 */

app.controller('FreeLancer.MainController', ['$scope', function ($scope) {
    console.log('Entered');
    // create a blank object to handle form data.
    $scope.user = {};
    // calling our submit function.
    $scope.submitForm = function () {
        console.log('Submited');
        // Posting data to php file
        $http({
            method: 'POST',
            url: '127.0.0.1:5000/data',
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