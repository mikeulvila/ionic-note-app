angular.module('app.controllers', [])

//---------------------------------//
//----- ADD NOTE PAGE CONTROL -----//
//---------------------------------//
.controller('addCtrl', function($scope, $stateParams, $state) {
  console.log("it's here");

  $scope.menuNotes;

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


})

//---------------------------------//
//----- EDIT NOTE CONTROL ---------//
//---------------------------------//
.controller('viewCtrl', function($scope, $stateParams, $state) {

  var notesObj;
  $scope.editMode = false;

  $scope.toggleEditMode = function() {
    if (!$scope.editMode) {
      $scope.editMode = true;
    } else if ($scope.editMode) {
      $scope.editMode = false;
    }
  };

  function editNote() {
    notesObj = JSON.parse(localStorage.getItem('notes')) || {};
    $scope.noteToView = notesObj[$stateParams.timeStamp];
  }
  editNote();

  $scope.deleteNote = function() {
    delete notesObj[$stateParams.timeStamp];
    localStorage.setItem('notes', JSON.stringify(notesObj));
    $scope.$parent.callNotes();
  }

  $scope.saveNote = function() {
    $scope.menuNotes[$scope.noteToView.id] = {
      id: $scope.noteToView.id,
      title: $scope.noteToView.title,
      date: $scope.noteToView.date,
      note: $scope.noteToView.note
    }
    localStorage.setItem('notes', JSON.stringify($scope.menuNotes));
    $scope.$parent.callNotes();
  }


})





