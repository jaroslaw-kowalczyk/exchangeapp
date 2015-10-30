/**
 * Created by jkowalczyk on 2015-05-21.
 */
exchangeApp.factory('ExchangeDataService', function($log, $http){
    $log.log('created service');
    var data = {};
    return $http.get('json/data.json').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            return data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
});

