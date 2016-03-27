// Start the application by running 'node app.js' in your terminal

// Initializes a new express.js instance
var express = require('express'),
	app = express();

// This is for running the app on heroku
var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.
var io = require('socket.io').listen(app.listen(port));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

require('./config')(app, io);
require('./routes')(app, io);

console.log('Your application is running on http://localhost:' + port);