//require mongoose
var mongoose = require('mongoose');

// load the Cat model from the server.js page
var Cat = mongoose.model('Cat');

var cats = require('../controllers/cats.js')
// all the routes
module.exports = function(app) {
	app.get('/', function(req, res) {
		cats.show(req, res)
	})

// route to render add a cat form
	app.get('/cats/new', function(req, res) {
		res.render("new");
	})

// route to add a new cat to DB
	app.post('/cats/new', function(req, res){
		cats.create(req, res)
	})

// route to render one cat view
	app.get('/cats/:id', function(req, res) {
		cats.view(req, res)
	})

// route to render one cat edit form
	app.get('/cats/edit/:id', function(req, res) {
		cats.editForm(req, res)
	})

// route to save edits
	app.post('/cats/:id', function(req, res) {
		cats.edit(req, res)
	})

// route to remove cat info
	app.post('/cats/destroy/:id', function(req, res) {
		cats.remove(req, res)
	})
}