angular.module('app.controllers', [])

//---------------------------------//
//----- ADD NOTE PAGE CONTROL -----//
//---------------------------------//
.controller('addCtrl', function($scope, $stateParams, $state) {
  console.log("it's here");

  $scope.menuNotes;
  $scope.noteToView;

  $scope.callNotes = function() {
    console.log("called the callNotes()");
    $scope.menuNotes = JSON.parse(localStorage.getItem('notes')) || {};
  }

  $scope.callNotes();

  $scope.addNoteToStorage = function(noteTitle, noteContent) {
    var notesObj = JSON.parse(localStorage.getItem('notes')) || {};
    var timeStamp = Date.now();
    var dateObj = new Date(timeStamp);
    var date = dateObj.toDateString();
    notesObj[timeStamp] = {
      id: timeStamp,
      title: noteTitle,
      date: date,
      note: noteContent
    };
    console.log("the new note is >>>>", notesObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    $scope.callNotes();
  };

  $scope.noteToView = $scope.menuNotes[$stateParams.timeStamp];

})

//---------------------------------//
//----- EDIT NOTE CONTROL ---------//
//---------------------------------//
.controller('editCtrl', function($scope, $stateParams, $state) {

  var notesObj;

  function editNote() {
    notesObj = JSON.parse(localStorage.getItem('notes')) || {};
    $scope.noteToEdit = notesObj[$stateParams.noteid];
  }
  editNote();

  $scope.saveNote = function() {
    notesObj[$stateParams.noteid] = {
      id: $stateParams.noteid,
      title: $scope.noteToEdit.title,
      date: $scope.noteToEdit.date,
      note: $scope.noteToEdit.note
    }
    localStorage.setItem('notes', JSON.stringify(notesObj));
    $scope.$parent.callNotes();

  }

})





