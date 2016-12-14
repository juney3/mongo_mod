// require mongoose module
var mongoose = require('mongoose');

// require fs
var fs = require('fs');

// require path for getting models
var path = require('path');

// connect to mongoose
mongoose.connect('mongodb://localhost/dashboard');

// Use native promises
mongoose.Promise = global.Promise;

// create var that points to path
var models_path = path.join(__dirname, './../models');

// read all of the files in models_path and require
fs.readdirSync(models_path).forEach(function(file){
if(file.indexOf('.js') >= 0) {
	// require the file (runs model file which registers the schema)
	require(models_path + '/' + file);
}
});