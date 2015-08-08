var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res) {
		res.render('templates/search')
	}
};

module.exports = indexController;