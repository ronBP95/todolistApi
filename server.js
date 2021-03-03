const express = require('express'),
  app = express(),

  mongoose = require('mongoose'),
  Task = require('./api/models/todolistModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

// Server Listening

port = process.env.PORT || 8000,
app.listen(port);


console.log(`The server is listening on port: ${port}`);