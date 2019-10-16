// require our dependencies
require('dotenv').config();
const express      	= require('express');
const path 			= require('path')
const port          = process.env.PORT || 5000;
var expressLayouts 	= require('express-ejs-layouts');
var bodyParser     	= require('body-parser');
var app            	= express();


// use ejs and express layouts. MUST come before routing!
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
var router = require('./routes/main_routes');
app.use('/', router);


// configure static files location
app.use(express.static(__dirname + '/public'));

// start our app server
app.listen(port, () => {
  console.log(`The web app is now running on port ${port}  at http://localhost:${port}.`); 
})
