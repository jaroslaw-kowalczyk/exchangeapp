/**
 * Created by jkowalczyk on 2015-10-26.
 */
exchangeApp.service('SimpleService', function() {
  var data = {'value': 'Special title'};
  this.get = function(val) {
    return data[val];
  }
})