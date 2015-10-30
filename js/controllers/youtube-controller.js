/**
 * Created by jkowalczyk on 2015-06-07.
 */
exchangeApp.controller('YoutubeController', ['$scope', function($scope){
  $scope.linksList = [
    {
      id: 'J---aiyznGQ',
      genre: 'funny',
      title: 'Funny cat'
    },
    {
      id: 'sMKoNBRZM1M',
      genre: 'funny',
      title: 'Super mario ping pong'
    },
    {
      id: 'L3AVam_eKos',
      genre: 'music',
      title: 'Zeus - Orinoko Flow'
    }
  ];
  $scope.currentLink = $scope.linksList[0].id;
  $scope.setCurrentLink = function(link) {
    console.log(link);
    $scope.currentLink = link;
}
}]);