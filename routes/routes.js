module.exports = function(express, app) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		res.render('index.html', {title: 'Welcome to ChatCAT'});
	})

	router.get('/chatrooms', function(req, res, next) {
		res.render('chatrooms.html', {title: 'Chatrooms'});
	})

	router.get('/setcolor', function(req, res, next) {
		req.session.favColor = "Red";
		res.send('Setting favorite color!');
	})

	router.get('/getcolor', function(req, res, next) {
		res.send('Favorite Color: ' + (req.session.favColor===undefined ? "Not Found" : req.session.favColor));
	})

	app.use('/', router);
}