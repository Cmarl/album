'use strict';

angular.module('album')
.controller('AlbumsShowCtrl', function($scope,$state,$window,Album,Photo){
  $scope.name = $state.params.name;
  $scope.images = Album.getPhotos($scope.name);

  $scope.savePhoto = function(type,data,name){
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

  $scope.setPrimary = function(image,albumName){
    Photo.setPrimary(image, albumName);
  };

  $scope.deletePhoto = function(image,name){
    Album.deletePhoto(image,name);
  };

});
