/**
 * Created by animesh on 15/7/17.
 */

angular.module('starter.profile', [])

  .controller('profileCtrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicPlatform) {

    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    // defining object to store responses of the user to survey questions
    $scope.profile = {};

    $scope.validVal = function (questionID) {
      if ($scope.profile[questionID]) {
        return true;
      }
      return false;
    };

    $scope.validQ15 = function () {
      var val1 = $scope.getAbsVal('Q1S1');
      if (val1) {
        if (+val1 >= 1 && +val1 <= 2) {
          return true;
        }
        else if ($scope.getAbsVal('Q2S1')) {
          return true
        }
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return $scope.profile[questionID] || 0;
    };

    $scope.validNext = function () {
      return $scope.validQ15();
    };

    $scope.saveData = function () {
      AppServiceAPI.sync();
      angular.forEach(profile, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 0);
      });
    };

    $ionicPlatform.ready(function () {
      AppServiceAPI.select(0).then(function (res) {
        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid;
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.profile[questionid] = res.rows.item(index).answer;
          });
        }
        else {
          console.log("No Record Found");
        }
        //return data;
      });

    });

    $scope.quiz2 = function (profile) {

      angular.forEach(profile, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 0);
      });
      AppServiceAPI.sync();
      $state.go('app.general1');
    };
  });
