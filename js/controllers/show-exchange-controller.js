/**
 * Created by jkowalczyk on 2015-05-21.
 */
//
exchangeApp.controller('ShowExchangeController', function($rootScope, $scope, ExchangeDataService, $log, $http, _, $timeout) {
    $scope.limit = 20;
    $scope.data = {};
    $scope.color = 255;
    $rootScope.title = 'Notowania giełdowe';
    $scope.getData = function() {
        ExchangeDataService.then(function(res) {
            _.each(res.data[0], function(el) {
                el['Wartość'] = el.l;
                delete el.l;
                el.Data = el.d;
                delete el.d;
                el.Data = moment.unix(el.Data).format("MMM Do YYYY");
                el['Firma'] = el.s;
                delete el.s;
                el['Skrót'] = el.t;
                delete el.t;
            });
            $scope.data = res.data;
        });
        //$log.log($scope.data);
    };
    $scope.getData();
});