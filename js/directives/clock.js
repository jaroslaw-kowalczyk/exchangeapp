/**
 * Created by jkowalczyk on 2015-05-28.
 */

exchangeApp.directive('clock', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<span>{{hour}}:{{minute}}:{{second}}</span>',
        scope: {
            color: '='
        },
        //compile: function(element, attributes) {
        //    //element.css('border', '1px solid #CCC');
        //    //element.css('width', '300px');
        //    //return function(scope, el, attr) {
        //    //    angular.element(el).css('color', scope.color);
        //    //}
        //    //OR
        //    {
        //         {
        //        pre: function (scope, el, attrs) {
        //            console.log('pre');
        //        },
        //        post: function (scope, el, attrs) {
        //            console.log('post');
        //            angular.element(el).css('color', scope.color);
        //        }
        //    }
        //},
        link: function(scope, el, attrs, controller) {
            angular.element(el).css('color', scope.color);
            attrs.$observe('color', function(newValue) {
                console.log(newValue);
            });
            console.log('*', controller);
            controller.foo();
        },
        controller: function($rootScope, $scope, $compile, $http, $interval) {
            setInterval(function() {
                var currentTime = moment();
                $scope.hour = currentTime.hours();
                if($scope.hour < 10) {
                    $scope.hour = "0"+$scope.hour;
                }
                $scope.minute = currentTime.minutes();
                if($scope.minute < 10) {
                    $scope.minute = "0"+$scope.minute;
                }
                $scope.second = currentTime.seconds();
                if($scope.second < 10) {
                    $scope.second = "0"+$scope.second;
                }
                $scope.$digest();
            }, 1000);

            this.foo = function() {
                console.log('some function');
            }
        }
    };
});