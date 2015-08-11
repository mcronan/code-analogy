var mongoose = require('mongoose');

var analogySchema = mongoose.Schema({
	technology    : String,
	// keyword       : [String],
	analogy       : String,
	user		: String
});

var Analogy = mongoose.model('Analogy', analogySchema);

module.exports = Analogy;