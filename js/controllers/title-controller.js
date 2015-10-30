/**
 * Created by jkowalczyk on 2015-06-07.
 */
exchangeApp.controller('TitleController', function ($scope, SimpleService, $filter) {
  var _this = this;

  this.title = 'Some title';
  this.starsTitle = false;

  this.setTitleFromService = function() {
    document.title = SimpleService.get('value');
  }

  $scope.$watch('t.title', function(newVal, oldVal) {
    document.title = newVal;
  });
  $scope.$watch('t.starsTitle', function(newVal, oldVal) {
    if(newVal !== oldVal) {
      var rand = Math.ceil(Math.random()*3);
      if(_this.starsTitle) {
        document.title = $filter('stars')(_this.title, rand);
      } else {
        document.title = _this.title;
      }
    }
  });

});