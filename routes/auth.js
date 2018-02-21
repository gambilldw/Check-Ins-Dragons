var authController = require('../controllers/authcontroller.js');
const db = require("../models");

module.exports = function (app, passport) {

    app.get('/', authController.login);

    app.get('/characterCreation', isLoggedIn, authController.characterCreation);

    app.get('/createUser', authController.createUser);

    app.get('/login', authController.login);

    app.get('/logout',authController.logout);

    app.get('/signup', authController.signup);

    app.get('/welcome', authController.welcome);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/characterCreation',
            failureRedirect: '/signup'
        }

    ));

    // Post route to save character to db.
    app.post('/createCharacter', function(req, res) {
        console.log("======================================================================================" + req.body);
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.post('/signin', passport.authenticate('local-signin', {
	        successRedirect: '/characterCreation',
	        failureRedirect: '/login'
	    }

	));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

    function getRequest(req, res, next) {
        res.status(401);
        console.log(req);
        return next();
    }

}