// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// server credentials: ssh -i ~/Downloads/GSP-files/access\ keys/gsppem.pem greenschool_u@52.25.148.111 -p 9090

angular.module('starter', ['ionic', 'starter.faq', 'starter.quiz',
  'starter.quiz2', 'starter.quiz3', 'multipleChoice.services',
  'starter.help', 'starter.menu', 'starter.login', 'ngCordova',
  'starter.home', 'starter.profile', 'starter.general',
  'starter.air', 'starter.energy', 'starter.food', 'starter.land', 'starter.water',
  'starter.waste', 'starter.feedback', 'starter.api', 'starter.validation',
  'starter.upload', 'starter.user_settings', 'starter.syncFromServer'])

  .run(function ($ionicPlatform, $cordovaSQLite, $window, $rootScope, AppServiceAPI, $state, $http) {

    'use strict';

    // for converting data from api to number
    $rootScope.typeOf = function (value) {
      return typeof value;
    };

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

      var db = null;
      if (window.cordova) {
        db = $cordovaSQLite.openDB({name: "quiz.db", location: 'default'}); //device
      }
      else {
        db = window.openDatabase("quiz.db", '1', 'my', 1024 * 1024 * 100); // browser
      }
      // $cordovaSQLite.execute(db, "drop table gsp_answers");
      // $cordovaSQLite.execute(db, "DROP TABLE gsp_users").then(function(res){
      //   console.log('Dropped gsp_users: ' + JSON.stringify(res));
      // }, function(err){
      //   console.error('Error dropping: ' + JSON.stringify(err));
      // });
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS gsp_answers (userid integer NOT NULL,questionid varchar(100) PRIMARY KEY,answer varchar(100),score integer,type integer)");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS gsp_users (id INTEGER PRIMARY KEY, " +
        "user_id INTEGER, email VARCHAR(200), password VARCHAR(50), school_name VARCHAR(200), " +
        "state INTEGER, completeness INTEGER DEFAULT 0, login_status INTEGER DEFAULT 0)")
        .then(function (res) {
        $cordovaSQLite.execute(db, "SELECT user_id, school_name, state FROM gsp_users WHERE login_status = ?", [1]).then(function (res) {
          console.log("Selected users: " + JSON.stringify(res.rows.length));
          var num_users = res.rows.length;
          if (num_users > 0) {
            var user_data = res.rows.item(0);
            console.log("Selected user: " + JSON.stringify(user_data));
            var userID = user_data.user_id;
            var schoolName = user_data.school_name;
            var state = user_data.state;
            $rootScope.states = {"1":"Andaman and Nicobar (AN)","2":"Andhra Pradesh (AP)","3":"Arunachal Pradesh (AR)","4":"Assam (AS)","5":"Bihar (BR)","6":"Chandigarh (CH)","7":"Chhattisgarh (CG)","8":"Dadra and Nagar Haveli (DN)","9":"Daman and Diu (DD)","10":"Delhi (DL)","11":"Goa (GA)","12":"Gujarat (GJ)","13":"Haryana (HR)","14":"Himachal Pradesh (HP)","15":"Jammu and Kashmir (JK)","16":"Jharkhand (JH)","17":"Karnataka (KA)","18":"Kerala (KL)","19":"Lakshdweep (LD)","20":"Madhya Pradesh (MP)","21":"Maharashtra (MH)","22":"Manipur (MN)","23":"Meghalaya (ML)","24":"Mizoram (MZ)","25":"Nagaland (NL)","26":"Odisha (OD)","27":"Puducherry (PY)","28":"Punjab (PB)","29":"Rajasthan (RJ)","30":"Sikkim (SK)","31":"Tamil Nadu (TN)","32":"Telangana (TG)","33":"Tripura (TR) ","34":"Uttar Pradesh (UP)","35":"Uttarakhand (UK)","36":"West Bengal (WB)","":"Select State"};
            $rootScope.user = userID;
            $rootScope.schoolName = schoolName;
            $http.get('http://greenschoolsprogramme.org/audit2017/api/Gsp/states/stateid/' + state)
              .then(function (res) {
              $rootScope.districts = res.data;
            }, function (err) {
              console.error('error in getting districts: ' + JSON.stringify(err));
            });
            $state.go('app.home');
          }
        }, function (err) {
          console.error("Error selecting user: " + JSON.stringify(err));
        });
      }, function (err) {
        console.error('Error in creating table: ' + JSON.stringify(err));
      });
      // $cordovaSQLite.execute(db, "DELETE FROM gsp_answers");
    }, function (error) {
      console.error('Error in platform ready: ' + error);
    });

  })

  .directive('stringToNumber', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function (value) {
          return '' + value;
        });
        ngModel.$formatters.push(function (value) {
          return parseFloat(value);
        });
      }
    };
  })

  .directive('limitTo', [function () {
    return {
      restrict: "A",
      link: function (scope, elem, attrs) {
        var limit = parseInt(attrs.limitTo);
        angular.element(elem).on("keypress", function (e) {
          if (this.value.length === limit) {
            e.preventDefault();
          }
        });
      }
    };
  }])

  .directive("fileread", [function () {
    return {
      scope: {
        fileread: "="
      },
      link: function (scope, element, attributes) {
        element.bind("change", function (changeEvent) {
          // scope.$apply(function () {
          //   scope.fileread = changeEvent.target.files;
          // });
          var reader = new FileReader();
          reader.onload = function (loadEvent) {
            scope.$apply(function () {
              scope.fileread = loadEvent.target.result;
            });
          };
          for (var i = 0; i < 1; i++) { //changeEvent.target.files.length; i++) {
            reader.readAsDataURL(changeEvent.target.files[i]);
          }
        });
      }
    };
  }])

  .config(function ($stateProvider, $urlRouterProvider) {

    'use strict';

    $stateProvider

      .state('app', {
        cache: false,
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('login', {
        url: '/login',
        cache: true,
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('app.home', {
        cache: false,
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('app.tab', {
        cache: false,
        url: '/tab',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html',
            controller: 'tab'
          }
        }
      })

      .state('app.profile', {
        cache: false,
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
          }
        }
      })

      .state('app.general1', {
        cache: false,
        url: '/general1',
        views: {
          'menuContent': {
            templateUrl: 'templates/general1.html',
            controller: 'gen1Ctrl'
          }
        }
      })

      .state('app.air1', {
        cache: false,
        url: '/air1',
        views: {
          'menuContent': {
            templateUrl: 'templates/air.html',
            controller: 'air1Ctrl'
          }
        }
      })

      .state('app.energy', {
        cache: false,
        url: '/energy',
        views: {
          'menuContent': {
            templateUrl: 'templates/energy.html',
            controller: 'energyCtrl'
          }
        }
      })

      .state('app.food', {
        cache: false,
        url: '/food',
        views: {
          'menuContent': {
            templateUrl: 'templates/food.html',
            controller: 'foodCtrl'
          }
        }
      })

      .state('app.land', {
        cache: false,
        url: '/land',
        views: {
          'menuContent': {
            templateUrl: 'templates/land.html',
            controller: 'landCtrl'
          }
        }
      })

      .state('app.water', {
        cache: false,
        url: '/water',
        views: {
          'menuContent': {
            templateUrl: 'templates/water.html',
            controller: 'waterCtrl'
          }
        }
      })

      .state('app.waste', {
        cache: false,
        url: '/waste',
        views: {
          'menuContent': {
            templateUrl: 'templates/waste.html',
            controller: 'wasteCtrl'
          }
        }
      })

      .state('app.feedback', {
        cache: false,
        url: '/feedback',
        views: {
          'menuContent': {
            templateUrl: 'templates/feedback.html',
            controller: 'feedbackCtrl'
          }
        }
      })

      .state('app.FAQ', {
        cache: false,
        url: '/FAQ',
        views: {
          'menuContent': {
            templateUrl: 'templates/FAQ.html',
            controller: 'faqCtrl'
          }
        }
      })

      .state('app.help', {
        cache: false,
        url: '/help',
        views: {
          'menuContent': {
            templateUrl: 'templates/help.html',
            controller: 'helpCtrl'
          }
        }
      })

      .state('app.settings', {
        cache: false,
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/user_settings.html',
            controller: 'settingsCtrl'
          }
        }
      })

      .state('app.syncFromServer', {
        cache: false,
        url: '/sync-from-server',
        views: {
          'menuContent': {
            templateUrl: 'templates/sync_from_server.html',
            controller: 'syncFromServerCtrl'
          }
        }
      })

      .state('app.quiz', {
        cache: false,
        url: '/quiz',
        views: {
          'menuContent': {
            templateUrl: 'templates/quiz.html',
            controller: 'QuestionCtrl'
          }
        }
      })

      .state('app.quiz2', {
        cache: false,
        url: '/quiz2',
        views: {
          'menuContent': {
            templateUrl: 'templates/quiz2.html',
            controller: 'QuestionCtrl2'
          }
        }
      })

      .state('app.quiz3', {
        cache: false,
        url: '/quiz3',
        views: {
          'menuContent': {
            templateUrl: 'templates/quiz3.html',
            controller: 'QuestionCtrl3'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');
  });
