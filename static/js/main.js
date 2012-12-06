
navigator.id.watch({
  loggedInUser: null,
  onlogin: function(assertion) {
    alert(assertion);
  },
  onlogout: function() {
  }
});

$(document).ready(function() {
  $('#signin').click(function() {
    navigator.id.request();
  });
});
