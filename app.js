// APP SETUP
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// Configure our app to use the parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Of course we need a port to talk to
var port = process.env.PORT || 8020;

// ROUTES
var router = express.Router();


// Routing middleware
router.use(function(req, res, next) {
    // Log our stuff
    console.log(req);
    next(); // make sure we go to the next routes and don't stop here
});

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// Register our routes
app.use('/home', router);

var bravia = require('./modules/bravia');

// START THE SERVER
app.listen(port);
console.log('Listening on port ' + port);

