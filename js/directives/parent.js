/**
 * Created by jkowalczyk on 2015-10-15.
 */
exchangeApp.directive('parent', function() {
  return {
    transclude: true,
    template: '<p>i\'m the parent<p ng-transclude></p></p>'
  }
});