
// foo!
exports.path = "/";
exports.config = {};
exports.method = 'GET';
exports.handler = function(request) {
  request.reply({yo: "yeah"});
};