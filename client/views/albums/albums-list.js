'use strict';

angular.module('album')
.controller('AlbumsListCtrl', function($scope,$state,Album){
  bindPrimaryPhoto();

  $scope.afUser.$loaded(function(){
    $scope.names = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  });

  $scope.remove = function(album,index){
    Album.remove(album,index).then(function(){
      $scope.albums = $scope.afUser.albums;
    });
  };

  function bindPrimaryPhoto(){
    Album.bindPrimary();
    console.log('binding mother fuckin data');
  }

});
