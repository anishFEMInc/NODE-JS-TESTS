var http = require('http');
var url = require('url');

function start(port, route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received. ");

    route(handle, pathname, response);
  }
  http.createServer(onRequest).listen(port);  // listen(port, host)
  console.log('Server has started');
}

exports.start = start;