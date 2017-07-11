// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.faq', 'starter.quiz',
  'starter.quiz2', 'starter.quiz3', 'multipleChoice.services',
  'starter.help', 'starter.menu', 'starter.login', 'ngCordova',
  'starter.home', 'starter.home2', 'starter.air', 'starter.general',
  'starter.energy', 'starter.food', 'starter.land', 'starter.water',
  'starter.waste', 'starter.feedback', 'starter.api'])

  .run(function ($ionicPlatform, $cordovaSQLite, $window) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      if (window.cordova) {
        db = $cordovaSQLite.openDB({name: "quiz.db"}); //device
        console.log("Android");
      }
      else {
        db = window.openDatabase("quiz.db", '1', 'my', 1024 * 1024 * 100); // browser
        console.log("browser");
      }
      //db = $window.openDB("quiz.db");
      $cordovaSQLite.execute(db, "drop table gsp_answers");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS gsp_answers (userid integer NOT NULL,questionid varchar(100) PRIMARY KEY,answer varchar(100),score integer,type integer)");
      $cordovaSQLite.execute(db, "DELETE FROM gsp_answers");
    });
  })


  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('app.FAQ', {
        url: '/FAQ',
        views: {
          'menuContent': {
            templateUrl: 'templates/FAQ.html',
            controller: 'faqCtrl'
          }
        }
      })
      .state('app.help', {
        url: '/help',
        views: {
          'menuContent': {
            templateUrl: 'templates/help.html',
            controller: 'helpCtrl'
          }
        }
      })
      .state('app.quiz', {
        url: '/quiz',
        views: {
          'menuContent': {
            templateUrl: 'templates/quiz.html',
            controller: 'QuestionCtrl'
          }
        }
      })

      .state('app.quiz2', {
        url: '/quiz2',
        views: {
          'menuContent': {
            templateUrl: 'templates/quiz2.html',
            controller: 'QuestionCtrl2'
          }
        }
      })
      .state('app.quiz3', {
        url: '/quiz3',
        views: {
          'menuContent': {
            templateUrl: 'templates/quiz3.html',
            controller: 'QuestionCtrl3'
          }
        }
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })
      .state('app.home2', {
        url: '/home2',
        views: {
          'menuContent': {
            templateUrl: 'templates/home-modal2.html',
            controller: 'homeCtrl2'
          }
        }
      })

      .state('login', {
        url: '/login',
        cache: false,
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('app.tab', {
        url: '/tab',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html',
            controller: 'tab'
          }
        }
      })
      .state('app.air1', {
        url: '/air1',
        views: {
          'menuContent': {
            templateUrl: 'templates/air.html',
            controller: 'air1Ctrl'
          }
        }
      })
      .state('app.general1', {
        url: '/general1',
        views: {
          'menuContent': {
            templateUrl: 'templates/general1.html',
            controller: 'gen1Ctrl'
          }
        }
      })

      .state('app.energy', {
        url: '/energy',
        views: {
          'menuContent': {
            templateUrl: 'templates/energy.html',
            controller: 'energyCtrl'
          }
        }
      })
      .state('app.food', {
        url: '/food',
        views: {
          'menuContent': {
            templateUrl: 'templates/food.html',
            controller: 'foodCtrl'
          }
        }
      })

      .state('app.land', {
        url: '/land',
        views: {
          'menuContent': {
            templateUrl: 'templates/land.html',
            controller: 'landCtrl'
          }
        }
      })

      .state('app.water', {
        url: '/water',
        views: {
          'menuContent': {
            templateUrl: 'templates/water.html',
            controller: 'waterCtrl'
          }
        }
      })
      .state('app.waste', {
        url: '/waste',
        views: {
          'menuContent': {
            templateUrl: 'templates/waste.html',
            controller: 'wasteCtrl'
          }
        }
      })
      .state('app.feedback', {
        url: '/feedback',
        views: {
          'menuContent': {
            templateUrl: 'templates/feedback.html',
            controller: 'feedbackCtrl'
          }
        }
      })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');
  });
