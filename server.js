var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
  
// For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
  
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // Session secret
app.use(passport.initialize());
app.use(passport.session()); // Persistent login sessions
  
// For Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
// Models
var models = require("./models");
 
// Routes 
var authRoute = require('./routes/auth.js')(app,passport);
 
// Load passport strategies 
require('./config/passport/passport.js')(passport, models.user);
 
// Sync Database 
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});
 
app.listen(5000, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});