// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var pushData;

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    var notificationOpenedCallback = function(jsonData) {
      console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
      alert(JSON.stringify(jsonData));
    };

    window.plugins.OneSignal.init("5bd42e49-a7a2-4f21-b3c1-349871663f4c",
                                 {googleProjectNumber: "408077626469", autoRegister: true},
                                 notificationOpenedCallback);

    // Show an alert box if a notification comes in when the user is in your app.
    window.plugins.OneSignal.enableInAppAlertNotification(true);

    window.plugins.OneSignal.getIds(function(ids) {
      pushData = ids;
      console.log('getIds: ' + JSON.stringify(ids));
    });

  });
})

.config(function($ionicConfigProvider) {
  //
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.tabs.position("bottom");
})

.filter('isOnline', function() {
  return function(input) {
    return input ? 'В сети' : 'Не в сети';
  };
})

.filter('isGuard', function() {
  return function(input) {
    return input ? 'На охране' : 'Снят с охраны';
  };
})

.filter('isGuardButton', function() {
  return function(input) {
    return input ? 'Снять с охраны' : 'Поставить на охрану';
  };
});
