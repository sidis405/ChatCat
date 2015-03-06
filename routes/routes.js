module.exports = function(express, app, passport) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		res.render('index.html', {title: 'Welcome to ChatCAT'});
	})

	router.get('/auth/facebook', passport.authenticate('facebook'));

	router.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/chatrooms',
		failRedirect: '/'
	}))

	router.get('/chatrooms', function(req, res, next) {
		res.render('chatrooms.html', {title: 'Chatrooms', user: req.user});
	})

	app.use('/', router);
}