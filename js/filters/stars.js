/**
 * Created by jkowalczyk on 2015-10-26.
 */
exchangeApp.filter('stars', function() {
  return function(value, amount) {
    var chars = '';
    if(typeof amount !== 'undefined') {
      for(var i=0;i<amount;i++) {
        chars += '*';
      }
    } else {
      chars = '**';
    }
    return chars + value + chars;
  }
});