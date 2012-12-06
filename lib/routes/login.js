
var browserid = require('browserid-verifier');

// foo!
exports.path = "/login";
exports.method = 'POST';
exports.handler = function(request) {
  browserid({
    assertion: request.params.assertion,
    audience: "http://localhost"
  }, function(err, result) {
    if (err) {
      request.reply({error: err});
    } else {
      request.reply({ok: result.email});
    }
  });
};