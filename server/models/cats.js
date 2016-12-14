// require mongoose module
var mongoose = require('mongoose');

// create schema
var CatSchema = new mongoose.Schema({
	name: String,
	age: Number,
	color: String,
	personality: String,
}, {timestamps: true})

// register Schema in Models as 'Cat'
var Cat = mongoose.model('Cat', CatSchema);
