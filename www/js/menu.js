angular.module('starter.menu', [])
  .controller(
    'menuCtrl',
    function ($scope, $state, $stateParams, $window, $rootScope,
              ValidationService, AppServiceAPI) {

      'use strict';

      $scope.home = function () {
        // $window.location.reload(true);
        $state.go('app.home');
      };

      $scope.syncFromServer = function () {
        $state.go('app.syncFromServer');
      };

      $scope.profile = function () {
        $state.go('app.profile');
      };

      $scope.general = function () {
        $state.go('app.general1');
      };

      $scope.air = function () {
        $state.go('app.air1');
      };

      $scope.energy = function () {
        $state.go('app.energy');
      };

      $scope.food = function () {
        $state.go('app.food');
      };

      $scope.land = function () {
        $state.go('app.land');
      };

      $scope.water = function () {
        $state.go('app.water');
      };

      $scope.waste = function () {
        $state.go('app.waste');
      };

      $scope.feedback = function () {
        $state.go('app.feedback');
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
