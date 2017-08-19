angular.module('starter.menu', [])
  .controller('menuCtrl', function ($scope, $state, $stateParams, $window, $rootScope,
                                    ValidationService, AppServiceAPI) {

    $scope.faq = function () {
      alert("faqqqq");
      $state.go('app.FAQ');
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

    $scope.water = function () {
      $state.go('app.water');
    };

    $scope.land = function () {
      $state.go('app.land');
    };

    $scope.energy = function () {
      $state.go('app.energy');
    };

    $scope.waste = function () {
      $state.go('app.waste');
    };

    $scope.food = function () {
      $state.go('app.food');
    };

    $scope.login = function () {
      $rootScope.user = null;
      $rootScope.school = null;
      AppServiceAPI.sync().then(function () {
        ValidationService.logoutUser();
      });
    };

    $scope.home = function () {
      // $window.location.reload(true);
      $state.go('app.home');
    };

    $scope.quiz = function () {
      // $window.location.reload(true);
      $state.go('app.quiz');
    };
  });
