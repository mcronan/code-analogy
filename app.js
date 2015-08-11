var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeanalogy')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
// angular needs to parse json
app.use(bodyParser.json());

app.get('/', indexController.index);
app.get('/templates/search', indexController.search)

app.get('/api/analogies', apiController.get);
app.post('/api/analogies', apiController.create);

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});