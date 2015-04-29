'use strict';

angular.module('album')
.factory('Album', function($rootScope, $firebaseArray, $firebaseObject){

  function Album(){
  }

  Album.new = function(name){
    var names = $rootScope.afUser.names ? $rootScope.afUser.names.split(',') : [];
    names.push(name);
    $rootScope.afUser.names = names.join(',');
    return $rootScope.afUser.$save();
  };

  Album.remove = function(album,index){
    var fbAlbum = $rootScope.fbUser.child('albumList/'+album);
    var afAlbum = $firebaseObject(fbAlbum);

    return afAlbum.$remove();
  };


  Album.addPhoto = function(data,name){
    var fbAlbum = $rootScope.fbUser.child('albumList/'+name);
    var afAlbum = $firebaseArray(fbAlbum);

    return afAlbum.$add(data);
  };

  Album.getPhotos = function(album){
    var fbAlbum = $rootScope.fbUser.child('albumList/'+album);
    return $firebaseArray(fbAlbum);
  };

  return Album;
});
