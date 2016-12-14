// ######################## Require ########################
// require express
var express = require('express');

// require path module
var path = require('path');

// require body-parser
var bodyParser = require('body-parser');

// ######################## Create Express App ########################
// create express app
var app = express();


// ######################## Use Modules ########################
// use bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// use static
app.use(express.static(path.join(__dirname, "./static")));


// ######################## Set Up EJS and Views ########################
// set up ejs and views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// ######################## Require Mongoose ########################
 require('./server/config/mongoose.js');
 
// store routes function in a variable
var routes_setter = require('./server/config/routes.js');

// invoke function stored in the routes_setter var and pass the express app var as an argument
routes_setter(app);




// ######################## Listen to Server ########################
// tell express app to listen on port 8000
app.listen(8000, function(){
	console.log("Listening to Cat Dashboard  - Modular Edition on port 8000");
});


