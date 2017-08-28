angular.module('starter.menu', [])
  .controller(
    'menuCtrl',
    function ($scope, $state, $stateParams, $window, $rootScope,
              ValidationService, AppServiceAPI) {

      $scope.home = function () {
        // $window.location.reload(true);
        $state.go('app.home');
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

      $scope.login = function () {
        AppServiceAPI.sync().then(function () {
          ValidationService.logoutUser();
        });
      };
    });
