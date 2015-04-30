'use strict';

angular.module('album')
.factory('Photo', function($rootScope,$firebaseObject){

  function Photo(){
  }

  Photo.setPrimary = function(image, albumName){
    var fbPrimes = $rootScope.fbUser.child('primaryPictures');
    var fbPicture = fbPrimes.child(albumName);
    var afPicture = $firebaseObject(fbPicture);
    $rootScope.primary[albumName] = image.$value;
    albumName = afPicture;
    afPicture.url = image.$value;
    afPicture.$save();
  };

  return Photo;
});
