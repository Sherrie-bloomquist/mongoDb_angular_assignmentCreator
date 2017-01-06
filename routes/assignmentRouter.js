var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Assignment = require('../models/assignment');

//------get assignments from database---------//
router.get('/', function(req, res){
  Assignment.find({}, function(err, assignmentResults){
    if (err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('assignments -->', assignmentResults);
      res.send(assignmentResults);
    }
  }); //end Assignment.find
}); //end router.get


//-------send assignments to the database---------//
router.post('/', function(req, res){
  console.log('in assignment post');
  console.log('req.body', req.body);
  var sentData = req.body;

  var newAssignment = new Assignment({
    assignment_name: sentData.assignment,
    name: {
      firstName: sendData.firstName,
      lastName: sendData.lastName
    },
    score: sentData.score,
  });//end newAssignment

  newAssignment.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new assignment created');
      res.sendStatus(200);
    }
  }); //end newAssignment.save
}); //end router.post

module.exports = router;
