'use strict';

angular.module('album')
.controller('AlbumsShowCtrl', function($scope,$state,$window,Album){
  $scope.name = $state.params.name;
  $scope.images = Album.getPhotos($scope.name);
  //$scope.images.$watch()

  $scope.savePhoto = function(type,data,name){
    // var imgData;
    switch (type){
      case 'url':
        Album.addPhoto(data,name);
        break;
      case 'upload':
        previewFile();
    }
  };

  function previewFile () {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      Album.addPhoto(reader.result, $scope.name);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }
});
