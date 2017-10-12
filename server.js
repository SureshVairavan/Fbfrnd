var connect = require('connect');
var http = require('http');
var express = require('express');
var frndctrl = require('./controllers/friendlist_control');
/*var frndservice = require('./services/frndlist_sevice');
var frnddao = require('./dao/frndlist_dao');
*/
var app = connect();
/*var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
*/
// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// store session state in browser cookie
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// respond to all requests
app.use(function(req, res){
res.end('Hello from Connect!\n');
console.log('Hello from connect');
});

//create router for facebook user
var router = express.Router();
router.route('/frndctrl');

app.use('/api', router);

//create node.js http server and listen on port
app.listen(3000);