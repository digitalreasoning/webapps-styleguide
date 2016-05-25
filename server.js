// server.js
// load the things we need
var express = require('express');
var expressLess = require('express-less');
var app = express();
var styleguideJSON = require('./styleguide.json');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/less-css', expressLess(__dirname + '/less', { debug: true }));

// use res.render to load up an ejs view file
app.use(express.static('./'));

// index page 
app.get('/', function(req, res) {
    res.render('index', {
    	elements: styleguideJSON.elements
    });
});

app.listen(8081);
console.log('8081 is the magic port');