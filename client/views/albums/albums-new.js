'use strict';

angular.module('album')
.controller('AlbumsNewCtrl', function($scope, Album, $state){
  //$scope.albums

  $scope.newAlbum = function(album){
    Album.new(album).then(function(){
      $state.go('albums.list');
    });
  };
});
