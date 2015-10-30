/**
 * Created by jkowalczyk on 2015-05-26.
 */
exchangeApp.directive('colorChanger', function() {
    return {
        restrict: 'AE',
        replace: false,
        template: '<div style="background-color:#{{color}}; color:#{{textcolor}};">' +
            '<button ng-click="setYellow()">Set yellow</button>' +
            '<h3>Current color: #{{color}}</h3>' +
            '<clock></clock></div>',
        scope: {
            //nazwaWScopie: '@nazwaAtrybutu'
            color: '@colorAttr',
            textcolor: '@textColorAttr',
        },
        controller: function($rootScope, $scope, $compile, $http) {
            // $scope is the appropriate scope for the directive
            $scope.color = 'ffff1';
            console.log($scope);
            $scope.setYellow = function() {
                setTimeout(function() {
                    $scope.color = 'ffff33';
                    $scope.$apply();
                    //$scope.$digest();
                    //$rootScope.$digest();
                },2000);
            }
        },
        link: function(scope, elem, attrs) {
            console.log(scope);
            elem.on('click', function() {
                scope.$apply(function() {
                    scope.color = "fff";
                });
            });
            elem.on('mouseover', function() {
                elem.css('cursor','pointer');
            })
        },
        //compile: function(tElement, attrs) {
        //    tElement.css('background-color','#abbbba');
        //    console.log(attrs);
        //    //return this.link;
        //}
    };
});
