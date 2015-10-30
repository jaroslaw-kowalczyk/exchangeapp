/**
 * Created by jkowalczyk on 2015-05-26.
 */
exchangeApp.controller('ClockController', function($scope, $timeout , $rootScope) {
  $rootScope.title = 'Angular\'s showcase';
  $timeout(function(){
    $scope.defaultColor = '#cdacda';
  },5000);

});