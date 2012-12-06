

var Hapi = require('hapi');
var fs = require('fs');

// Create a server with a host, port, and options
var server = new Hapi.Server('localhost', 8000);

// static files
server.addRoute({
  method: 'GET',
  path: '/static/{path*}',
  handler: { directory: { path: '../static/', listing: false } }
});


// iterate through the routes
fs.readdir('lib/routes', function(err, files) {
  if (err) {
    console.log("problem loading routes");
    console.log(err);
    return;
  }

  // dynamic routes
  files.forEach(function(f) {
    var m = f.match(/^(.+)\.js$/);
    if (!m)
      return;

    var new_route = require('./routes/' + m[1]);
    server.addRoute({
      method: new_route.method,
      path: new_route.path,
      config: {
        handler: new_route.handler
      }
    });
  });
  
  server.start();
});

