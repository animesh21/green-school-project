angular.module('starter.menu', [])
  .controller(
    'menuCtrl',
    function ($scope, $state, $stateParams, $window, $rootScope,
              ValidationService, AppServiceAPI, $ionicPopup) {

      'use strict';

      $scope.home = function () {
        // $window.location.reload(true);
        $state.go('app.home');
      };

      $scope.showPopup = function (title, message) {
        $scope.popup = $ionicPopup.show({
            title: title,
            template: message,
            buttons: [
                {
                    'text': 'OK'
                }
            ]
        });
      };

      $scope.iconHeight = 30;

      $scope.iconWidth = 30;

      $scope.syncFromServer = function () {
        $state.go('app.syncFromServer');
      };

      $scope.profile = function () {
        $state.go('app.profile');
      };

      $scope.general = function () {
        if ($rootScope.completeness >= 5) {
          $state.go('app.general1');
        }
        else {
          $scope.showPopup('Alert', "Please complete profile section first");
        }
      };

      $scope.air = function () {
        if ($rootScope.completeness >= 10) {
          $state.go('app.air1');
        }
        else {
          $scope.showPopup('Alert', "Please complete general section first");
        }
      };

      $scope.energy = function () {
        if ($rootScope.completeness >= 20) {
          $state.go('app.energy');
        }
        else {
          $scope.showPopup('Alert', "Please complete air section first");
        }
      };

      $scope.food = function () {
        if ($rootScope.completeness >= 30) {
          $state.go('app.food');
        }
        else {
          $scope.showPopup('Alert', "Please complete energy section first");
        }
      };

      $scope.land = function () {
        if ($rootScope.completeness >= 40) {
          $state.go('app.land');
        }
        else {
          $scope.showPopup('Alert', "Please complete food section first");
        }
      };

      $scope.water = function () {
        if ($rootScope.completeness >= 50) {
          $state.go('app.water');
        }
        else {
          $scope.showPopup('Alert', "Please complete land section first");
        }
      };

      $scope.waste = function () {
        if ($rootScope.completeness >= 75) {
          $state.go('app.waste');
        }
        else {
          $scope.showPopup('Alert', "Please complete water section first");
        }
      };

      $scope.feedback = function () {
        if ($rootScope.completeness >= 100) {
          $state.go('app.feedback');
        }
        else {
          $scope.showPopup('Alert', "Please complete the survey first");
        }
      };

      $scope.faq = function () {
        $state.go('app.FAQ');
      };

      $scope.help = function () {
        $state.go('app.help');
      };

      $scope.toggleHelp = function () {
        if ($state.current.name === 'app.help') {
          $state.go('app.home');
        }
        else {
          $state.go('app.help');
        }
      };

      $scope.settings = function () {
        console.log('going to settings');
        $state.go('app.settings');
      };

      $scope.login = function () {
        AppServiceAPI.sync(100).then(function () {
          ValidationService.logoutUser();
        });
      };
    });
