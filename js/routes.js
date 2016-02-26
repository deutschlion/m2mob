angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController.page2', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('page3', {
    url: '/log',
    templateUrl: 'templates/page3.html',
    controller: 'LogCtrl'
  })

  .state('tabsController.page4', {
    url: '/setting',
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/tabs/home')



});
