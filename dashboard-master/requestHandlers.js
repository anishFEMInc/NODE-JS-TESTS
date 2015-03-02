function start(response) {
  console.log('Request handler "start" was evoked');
  response.writeHead(200, {"Content-Type": "text/plain"});
  // TODO: Where do we get the html to display here.
  response.write("Welcome to the FEM Inc. Dashboard");
  response.end();
}

function login(response) {
  console.log('Request handler "login" was evoked');
  response.writeHead(200, {"Content-Type": "text/plain"});
  // TODO: Where do we get the html to display here.
  response.write("Login to the FEM Inc. Dashboard");
  response.end();

}

function logout(response) {
   console.log('Request handler "logout" was evoked');
   response.writeHead(200, {"Content-Type": "text/plain"});
   // TODO: Where do we get the html to display here.
   response.write("Thank you for visiting FEM Inc dashboard");
   response.end();
}

exports.start = start;
exports.login = login;
exports.logout = logout;