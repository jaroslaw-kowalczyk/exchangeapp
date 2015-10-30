/**
 * Created by jkowalczyk on 2015-05-21.
 */
var exchangeApp = angular.module("exchangeApp", ['ui.grid', 'underscore', 'angularMoment', 'ui.router', 'youtube-embed']);

exchangeApp.run(function(amMoment) {
    amMoment.changeLocale('pl');
});


exchangeApp.config(function($stateProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $stateProvider
        .state("main", {
            url: "",
            templateUrl: "partials/main.html"
        })
        .state("watchTest", {
            url: "watchTest",
            templateUrl: "partials/watchtest.html"
        })
        .state("transcludeTest", {
            url: "transcludeTest",
            templateUrl: "partials/transcludetest.html"
        })
        .state("titleTest", {
          url: "titleTest",
          templateUrl: "partials/title.html"
        })
        .state("youtube", {
          url: "youtube",
          templateUrl: "partials/youtube.html"
        })
        .state("inheritance", {
            url: "inheritance",
            templateUrl: "partials/inheritance.html"
        });
})
