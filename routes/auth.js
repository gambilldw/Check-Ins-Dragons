var authController = require('../controllers/authcontroller.js');
const db = require("../models");

module.exports = function (app, passport) {

    app.get('/', authController.login);

    app.get('/characterCreation', isLoggedIn, authController.characterCreation);

    app.get('/createUser', authController.createUser);

    app.get('/login', authController.login);

    app.get('/logout', authController.logout);

    app.get('/signup', authController.signup);

    app.get('/welcome', authController.welcome);

    app.get('/checkIn', authController.checkIn);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/characterCreation',
            failureRedirect: '/signup'
        }

    ));

    // Get route for getting all character info.
    app.get("/api/characters", function(req, res) {
        var query = {};
        if (req.query.characterName) {
          query.CharacterId = req.query.characterName;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Post.findAll({
          where: query,
          include: [db.User]
        }).then(function(dbPost) {
          res.json(dbPost);
        });
    });

    // Post route to save character to db.
    app.post('/api/characters', function(req, res) {
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