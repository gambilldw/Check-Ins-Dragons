var exports = module.exports = {}

exports.login = function (req, res) {

    res.render('login');

}

exports.signup = function (req, res) {

    res.render('signup');

}

exports.welcome = function (req, res) {

    res.render('welcome', { name: req.user.firstname });

}

exports.characterCreation = function (req, res) {

    res.render('characterCreation', { name: req.user.firstname });

}

exports.createUser = function (req, res) {

    res.render('createUser');

}

exports.checkIn = function (req, res) {

    res.render('checkIn', { name: req.user.firstname });

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

}