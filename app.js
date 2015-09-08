// APP SETUP
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// Configure our app to use the parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Of course we need a port to talk to, we'll get that from our config
var config = require('./config');

// And all the different gadgets in our home
var tv = require('./modules/node-sonytv').SonyTV(config.tv.hostname, '/sony/IRCC', '/sony/accessControl', config.app.uuid, config.app.nickname);
tv.loadCookieToken();

// ROUTES
var router = express.Router();


// Routing middleware
router.use(function(req, res, next) {
    // Log our stuff
    console.log(req.body);
    next(); // make sure we go to the next routes and don't stop here
});

// Test route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// TV routes
router.route('/tv/on')

    // Receive POST request
    .post(function(req, res) {
        tv.powerOn(config.tv.mac);
        res.sendStatus(200);
    });


// Register our routes with the home prefix
app.use('/home', router);


// START THE SERVER
app.listen(8020);
console.log('Listening on port ' + 8020);

