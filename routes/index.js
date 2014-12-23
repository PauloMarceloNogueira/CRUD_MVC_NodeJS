
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


exports.config = function(req, res){
  res.render('config', { title: 'Configuração' })
};

exports.allMovies = function(req,res){
	res.render('list', {type: 'Movies'})
};

exports.cadastro = function(req,res){
	res.render('cadastro');
};