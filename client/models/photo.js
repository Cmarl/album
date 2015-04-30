'use strict';

angular.module('album')
.factory('Photo', function($rootScope,$firebaseObject,$firebaseArray){

  function Photo(){
  }

  Photo.setPrimary = function(image, albumName){
    var fbPrimes = $rootScope.fbUser.child('primaryPictures');

    var fbPicture = fbPrimes.child(albumName);
    var afPicture = $firebaseObject(fbPicture);
    if (!$rootScope.primary){
      $rootScope.primary = {};
    }
    $rootScope.primary[albumName] = image.$value;

    albumName = afPicture;
    afPicture.url = image.$value;
    afPicture.$save();
  };

  Photo.getPrimary = function(index){
    var fbPrimes = $rootScope.fbUser.child('primaryPictures');
    var afPrimes = $firebaseArray(fbPrimes);
    afPrimes.$loaded().$getRecord(index);
  };

  return Photo;
});
