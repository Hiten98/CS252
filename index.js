//set up express
const express = require('express');
const app = express();

//set up body parser for JSON
const bodyParser = require('body-parser');

// set up https
var fs = require('fs');

//set up morgan
const morgan = require('morgan');

//site addr
var site = 'http://52.14.66.192:9090/';

//use morgan to log everything
app.use(morgan('dev'));

const request = require('request');

//set up port
var port = (process.env.PORT || 9090 || 443);


//setting up CORS
//app.use(express.methodOverride());
// ## CORS middleware
//
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

//set bodyParser
app.use(bodyParser.json());

//routes
app.post('/LOGIN', function (req, res) {
  request.post(
    site + 'LOGIN',
    {
      json: {
        'email': req.body.email,
        'password': req.body.password
      }
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})


app.listen(port, function () {
  console.log("listening on " + port);
  // request.post(
  //   site + 'GET-GRAPH-VALUES',
  //   {
  //     json: {
  //       'currency': 'JPY'
  //     }
  //   },
  //   function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       console.log(body);
  //     }
  //   }
  // )
})

console.log("Hey");
