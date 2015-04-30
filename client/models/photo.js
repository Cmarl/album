'use strict';

angular.module('album')
.factory('Photo', function($rootScope,$firebaseObject,$firebaseArray){

  function Photo(){
  }

  Photo.setPrimary = function(image, albumName){
    var fbPrimes = $rootScope.fbUser.child('primary-pictures');
    //var afPrimes = $firebaseArray(fbPrimes);

    var fbPicture = fbPrimes.child(albumName);
    var afPicture = $firebaseObject(fbPicture);

    afPicture.url = image.$value;
    afPicture.$save();
  };

  return Photo;
});
