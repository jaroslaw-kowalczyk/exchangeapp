/**
 * Created by jkowalczyk on 2015-05-26.
 */
exchangeApp.controller('WatchTestController', ['$rootScope', '$scope', '$timeout' , function($rootScope, $scope, $timeout) {
    var digests = 0;
    $scope.val = 0;
    $scope.color = 'fffff1';
    $scope.textcolor = "abbbbc";
    $scope.$watch(function() {
       digests++;
        console.log('digest: ' + digests);
        if ($scope.val >= 4 && $scope.val < 10) {
            $scope.val++;
        }
    });

    $scope.$watch('textcolor', function(newValue, oldValue) {
        //update the DOM with newValue
        console.log('update DOM with the value: ' + newValue);
    });

    $scope.inc = function() {
        $scope.val++;
        digests = 0;
    }
}]);