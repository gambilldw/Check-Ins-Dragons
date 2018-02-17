var exports = module.exports = {}

exports.login = function(req, res) {
	
    res.render('login');
 
}

exports.signup = function(req, res) {
 	
    res.render('signup');
 
}

exports.welcome = function(req, res) {
    
    res.render('welcome', { username: req.user.firstname });
 
}

exports.characterCreation = function (req, res) {

    res.render('characterCreation', { username: req.user.firstname });

}

exports.createUser = function (req, res) {

    res.render('createUser');

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

}