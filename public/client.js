console.log("in js");

var myApp = angular.module('myApp', [] );

myApp.controller('AssignmentController', ['$scope', '$http', function($scope, $http){
  console.log('NG');

$scope.getAssignment = function(){
  console.log('searching for:', $scope.assignmentNameIn);
  $http({
    method: "GET",
    url: '/assignment',
  }).then (function(response){
    console.log('back from get call:', response);
    $scope.assignmentResults = response.data;

  }); //end http GET call

}; //end getAssignment

$scope.postAssignment = function(){
  console.log('in postAssignment');
  var newAssignment = {
    assignment: $scope.assignmentNameIn,
    name: {
      firstName: $scope.firstNameIn,
      lastName: $scope.lastNameIn
    },
    score: $scope.scoreIn
  };//end new assignment object
  console.log('newAssignment', newAssignment);
  //make http call to database to send user inputs
  $http({
    method: 'POST',
    url: '/assignment',
    data: newAssignment
  }).then();
  $scope.getAssignment();

}; //end postAssignment

$scope.getAssignment();





}]); //end controller
