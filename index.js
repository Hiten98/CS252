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
app.get('/' , function (req, res) {
  console.log('in here');
    request.get(site).on('response', function (response) {
        console.log(response.statusCode);
        res.send(response.statusCode);
    });
});

app.post('/LOGIN', function (req, res) {
  var x = req.body;
  request.post(
    site + 'LOGIN',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//register
app.post('/REGISTER', function (req, res) {
  var x = req.body;
  request.post(
    site + 'REGISTER',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//refresh token
app.post('/REFRESH-TOKEN', function (req, res) {
  var x = req.body;
  request.post(
    site + 'REFRESH-TOKEN',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//verify token
app.post('/VERIFY-TOKEN', function (req, res) {
  var x = req.body;
  request.post(
    site + 'VERIFY-TOKEN',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//update things
app.post('/UPDATE-THINGS', function (req, res) {
  var x = req.body;
  request.post(
    site + 'UPDATE-THINGS',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//reset password
app.post('/RESET-PASSWORD', function (req, res) {
  var x = req.body;
  request.post(
    site + 'RESET-PASSWORD',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

///get latest values
app.post('/GET-LATEST-VALUE', function (req, res) {
  var x = req.body;
  request.post(
    site + 'GET-LATEST-VALUE',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//get graph values
app.post('/GET-GRAPH-VALUES', function (req, res) {
  var x = req.body;
  request.post(
    site + 'GET-GRAPH-VALUES',
    {
      json: x
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.send(response.body);
      }
    }
  )
})

//get users
app.post('/GET-USER', function (req, res) {
  var x = req.body;
  request.post(
    site + 'GET-USER',
    {
      json: x
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
