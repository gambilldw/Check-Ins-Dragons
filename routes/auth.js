var authController = require('../controllers/authcontroller.js');
const db = require("../models");

module.exports = function(app, passport) {
 app.get('/', function(req, res) {
    // db.user.findAll({where : {
    //     firstName : "brian"
    // }}).then(function (data) {
    //     let firstName = data[0].dataValues.firstname;
    //     res.render("home", {name : firstName});
    // })
    // console.log(res);
    res.render('login');
    // res.render("login", {name: "steven"})
    //query to grab data from db

});
    app.get('/signup', authController.signup);
 
    app.get('/signin', authController.signin);
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
 
    ));

    app.get('/characterCreation', authController.characterCreation);

    app.get('/createUser', authController.createUser);

    app.get('/login', authController.login);

    app.get('/dashboard',isLoggedIn, authController.dashboard);

    app.get('/logout',authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
	        successRedirect: '/dashboard',
	        failureRedirect: '/signin'
	    }
 
	));

    function isLoggedIn(req, res, next) {
 
	    if (req.isAuthenticated())
	     
	        return next();
	         
	    res.redirect('/signin');
 
	}

}