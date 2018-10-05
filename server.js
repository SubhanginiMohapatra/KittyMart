var express = require('express');
var app = express();
var loginController = require('./server/loginService');
var path = require('path');
app.set('views', path.join(__dirname, '/client'));
app.set('view engine','ejs');
app.use(express.static('./client'));
loginController(app);
app.listen(3000);