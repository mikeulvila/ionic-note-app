angular.module('app.controllers', [])

//---------------------------------//
//----- ADD NOTE PAGE CONTROL -----//
//---------------------------------//
.controller('pageCtrl', function($scope) {
  console.log("it's here");

  $scope.addNoteToStorage = function(noteTitle, noteContent) {
    var notesObj = JSON.parse(localStorage.getItem('notes')) || {};
    var timeStamp = Date.now();
    notesObj[timeStamp] = {
      title: noteTitle,
      note: noteContent
    };
    console.log("the new note is >>>>", notesObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
  };


})

// //---------------------------------//
// //----- ADD NOTE PAGE CONTROL -----//
// //---------------------------------//
// .controller('pageCtrl', function($scope) {
//   console.log("it's here");





// })

