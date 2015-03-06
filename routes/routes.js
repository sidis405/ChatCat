module.exports = function(express, app) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		res.render('index.html', {title: 'Welcome to ChatCAT'});
	})

	router.get('/chatrooms', function(req, res, next) {
		res.render('chatrooms.html', {title: 'Chatrooms'});
	})

	app.use('/', router);
}