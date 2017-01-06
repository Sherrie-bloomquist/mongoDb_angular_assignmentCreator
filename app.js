var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var assignmentRouter = require('./routes/assignmentRouter');

app.use(bodyParser.json());

app.use('/assignment', assignmentRouter);

mongoose.connect('mongodb://localhost:27017/assignmentDatabase');

app.listen ('3000', function(){
  console.log('listening on 3000');
});//end app listen

app.use(express.static('public'));
