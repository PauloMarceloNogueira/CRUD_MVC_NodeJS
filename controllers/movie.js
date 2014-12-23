var movie = require('../models/configure');
console.log('Aqui Chegou!');

exports.list = function(req , res){
	console.log('lala');
	movie.find(function(err,movies){
		res.send(movies);
	})
}