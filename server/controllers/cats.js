// require mongoose
var mongoose = require('mongoose');

// set Cat schema from model
var Cat = mongoose.model('Cat');

// wrap in module.exports function
module.exports = {
	show: function(req, res) {
		Cat.find({}, function(err, cats){
		if(err) {
			console.log('Oh noes, something went wrong');
		}
		else{
			console.log('Found the cats!');
		}
		console.log(cats);
	 	res.render("index.ejs", {cats: cats});
	})
	},
	create: function(req, res) {
		console.log('POST DATA', req.body);

		var cat = new Cat({
			name: req.body.name,
			age: req.body.age,
			color: req.body.color,
			personality: req.body.personality
		});

		cat.save(function(err){
			if (err){
				console.log('Could not save - something went wrong...');
			}
			else {
				console.log('Successfully added a cat!')
			}
		})
		res.redirect('/');
		},
	view: function(req, res) {
		Cat.find({_id: req.params.id}, function(err, one_cat){
		if (err) {
			console.log("No kitty found for view! Something went wrong...");
		}
		else{
			console.log("Found the kitty for view!");
		}
		console.log(one_cat);
		res.render("view.ejs", {one_cat: one_cat});
	})
	},
	editForm: function(req, res) {
		Cat.find({_id: req.params.id}, function(err, one_cat){
		if (err){
			console.log("No kitty found for edit! Something went wrong...");
		}
		else {
			console.log("Found the kitty for edit!");
		}
		res.render("edit.ejs", {one_cat: one_cat});
	})
	},
	edit: function(req, res) {
		console.log("POST DATA", req.body);
		Cat.update({_id: req.params.id}, req.body, function(err, result){
			if (err) {
				console.log("Could not update cat information");
			}
			else {
				console.log("Successfully updated cat information!")
			}
		res.redirect('/');
		})
	},
	remove: function(req, res) {
		console.log("POST DATA", req.body);
		Cat.remove({_id: req.params.id}, function(err, result){
			if (err) {
				console.log("Could not remove cat information");
			}
			else {
				console.log("Successfully removed cat information!")
			}
		res.redirect('/');
	})
	}
}