var Analogy = require('../models/model');

var apiController = {

	get   :  function(req, res) {
		Analogy.find({}, function(err, result) {
			res.send(result)
		})
	},

	create  : function(req, res) {
		// req.body.keyword = req.body.keyword.split(', ')
		var analogy = new Analogy(req.body); 
		console.log(req.body)
		analogy.save(function(err, saveDoc) {
			console.log(err)
			res.send(saveDoc);
		})
	}

}

module.exports = apiController;