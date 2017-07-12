angular.module('starter.general', [])

  .controller('gen1Ctrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });
    // defining object to store responses of the user to survey questions
    $scope.general = {};

    $scope.checkQ1 = function () {
      // alert('You changed the select value.');
      val1 = $scope.general.Q1G1;
      val2 = $scope.general.Q1G2;
      console.log("Val1: " + val1 + " Val2: " + val2);
      if (val1 && val2){
        console.log('both values defined');
        console.log('val1 > val2: ' + (+val1 > +val2));
        if(+val1 > +val2){
          alert('Higher level can not be less than lower level');
          $scope.general.Q1G2 = val1;
        }
      }
    };

    $scope.checkQ6 = function () {
      val = $scope.general.Q6G1;
      console.log('value of days: ' + val);
      if(val > 365){
        alert("No. of working days can't be greater than 365");
        $scope.general.Q6G1 = 365;
        // angular.element('#questiongeneraleight').val(365);
      }
    };

    $scope.questiongeneralfour = {
      choice: '1'
    };

    $scope.questiongeneralthree = {
      choice: 'A3'
    };

    $scope.questiongeneralten = {
      choice: 'A1'
    };

    $scope.questiongeneralnine = {
      One: 'N',
      Two: 'N',
      Three: 'N',
      Four: 'N',
      Five: 'N',
      Six: 'N',
      Seven: 'N',
      Eight: 'N',
      Nine: 'N',
      Ten: 'N',
      Q7G12: 'N'
    };
    AppServiceAPI.select(1).then(function (res) {

      if (res.rows.length > 0) {
        angular.forEach(res.rows, function (item, index) {
          questionid = res.rows.item(index).questionid;
          //console.log(questionid,res.rows.item(index).answer,item,index);
          $scope.general[questionid] = res.rows.item(index).answer;
        });
      }
      else {
        console.log("No Record Found");
      }
      //return data;
    });
    $scope.data = {};
    $scope.quiz2 = function (general) {

      angular.forEach(general, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 1);
      });
      AppServiceAPI.sync();
      $state.go('app.air1');
    };

    // $window.location.reload(true);
  });
