const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js');

const app = express()

//app.use('/static', express.static(__dirname + '/public/js/cjsDom.js'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
//setting middleware
app.use('/static', express.static(__dirname + '/public')); //Serves resources from public folder
app.use('/icase', express.static(__dirname + '/public/js/itarget/icase')); //Serves resources from public folder

app.use('/', routes);

app.listen(8080)