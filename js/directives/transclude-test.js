/**
 * Created by jkowalczyk on 2015-05-29.
 */
exchangeApp.directive('transcludeTest', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="some-class">' +
            '<div ng-transclude></div>' + // od Agnular 1.3 to mo�e by� zwyk�y element
            '</div>'
    };
});