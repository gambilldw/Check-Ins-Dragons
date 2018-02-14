var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.login = function(req, res) {
 
    res.render('login');
 
}

exports.characterCreation = function(req, res) {
 
    res.render('characterCreation');
 
}

exports.createUser = function(req, res) {
 
    res.render('createUser');
 
}

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}