/**
 * Created by jkowalczyk on 2015-10-26.
 */
exchangeApp.provider("title", function() {
  var text;
  return {
    setTitle: function(value) {
      text = value;
    },
    $get: function () {
      return {
        title: text
      }
    }
  }
})