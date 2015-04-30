'use strict';

angular.module('album')
.controller('AlbumsListCtrl', function($scope,$state,Album,Photo){

  $scope.getPrimary = function(index){
    var primary = Photo.getPrimary(index);
    console.log(primary);
  };

  $scope.afUser.$loaded(function(){
    $scope.names = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  });

  $scope.remove = function(album,index){
    Album.remove(album,index).then(function(){
      $scope.albums = $scope.afUser.albums;
    });
  };

});
