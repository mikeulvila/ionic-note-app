angular.module('app.controllers', [])

//---------------------------------//
//----- ADD NOTE PAGE CONTROL -----//
//---------------------------------//
.controller('addCtrl', function($scope, $stateParams) {
  console.log("it's here");

  $scope.menuNotes;
  $scope.noteToView;

  function callNotes() {
    console.log("called the callNotes()");
    $scope.menuNotes = JSON.parse(localStorage.getItem('notes')) || {};
  }

  callNotes();

  $scope.addNoteToStorage = function(noteTitle, noteContent) {
    var notesObj = JSON.parse(localStorage.getItem('notes')) || {};
    var timeStamp = Date.now();
    notesObj[timeStamp] = {
      id: timeStamp,
      title: noteTitle,
      note: noteContent
    };
    console.log("the new note is >>>>", notesObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    callNotes();
  };


  $scope.noteToView = $scope.menuNotes[$stateParams.timeStamp];


})

