'use strict';

angular.module('album')
.controller('NavCtrl', function($rootScope, $scope, $state, $firebaseObject, User){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
      $rootScope.fbUser = $rootScope.fbRoot.child('users/' + data.uid);
      $rootScope.afUser = $firebaseObject($rootScope.fbUser);
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $rootScope.fbUser = null;
      $rootScope.afUser = null;
    }
    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        console.info(data);
        return data.password.email;
      case 'twitter':
        console.info(data);
        return data.twitter.username;
      case 'github':
        console.info(data);
        return data.github.displayName;
      case 'google':
        console.info(data);
        return data.google.displayName;
      }
    }
  });
