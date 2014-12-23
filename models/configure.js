var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://localdev.scup.com/movies');

var movieSchema = new Schema({
	title : String,
	codigo: String
});



module.exports = mongoose.model('Movies',movieSchema);

