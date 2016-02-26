angular.module('app.controllers', [])

.controller('HomeCtrl',['$scope', '$interval', 'Devices', function($scope, $interval,  Devices) {
  $scope.device = {
    online: false,
    guard: false,
    alarm: false
  }
  //
  var updater;
  updater = $interval(function() {
    var p = Devices.get();
    p.$promise.then(function(d){
      console.log("d: ",d);
      if(d != $scope.device){
        $scope.device = d;
      }
    });
  }, 5000);

  $scope.updateDevice= function(){
    $scope.device.updby = "owner";
    Devices.patch($scope.device);
  };

  if(window.pushData){
    $scope.device.user_id = window.pushData.userId;
    $scope.device.push_token = window.pushData.pushToken;
  }
  //
  $scope.resetAlarm = function(){
    $scope.device.alarm = false;
    $scope.updateDevice();
    console.log("reset alarm");
  };
  // $scope.guard = false;
  $scope.toggleGuard = function(){
    $scope.device.guard = !$scope.device.guard;
    $scope.updateDevice();
    console.log($scope.device);
  }
}])

.controller('LogCtrl', function($scope) {
  $scope.pushData = window.pushData;
})

.controller('SettingsCtrl', function($scope) {
  $scope.pushNotification = { checked: true };
  $scope.pushNotificationChange = function() {
    window.plugins.OneSignal.setSubscription($scope.pushNotification.checked);
  };
})

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Вашу машину эвакуируют!',
     okText: 'Уже бегу!',
     okType: 'button-assertive',
   });

   alertPopup.then(function(res) {
     console.log('Закрыл алерт');
     // Тут нужно отправлять инфу в брокера
   });
 };

});
