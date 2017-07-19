angular.module('starter.general', [])

  .controller('gen1Ctrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicPlatform, $ionicPopup) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });
    // defining object to store responses of the user to survey questions
    $scope.general = {};

    // validation functions start
    $scope.validVal = function (questionID) {
      if ($scope.general[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return $scope.general[questionID] || 0;
    };

    $scope.validQ3 = function () {
      var val = $scope.general['Q3G1'];
      if (val) {
        if (+val == 5) {
          return $scope.validVal('Q3G1O');
        }
        else if (+val == 1) {
          return $scope.validVal('Q3G2');
        }
        else {
          return true;
        }
      }
      return false;
    };

    $scope.checkQ1 = function () {
      // alert('You changed the select value.');
      var val1 = $scope.general.Q1G1;
      var val2 = $scope.general.Q1G2;
      if (val1 && val2) {
        if (+val1 > +val2) {
          $scope.showPopup('Alert!', 'Higher level can not be less than lower level');
          $scope.general.Q1G2 = val1;
        }
        if (val1 < 5 && val2 <= 5) {
          $scope.promptQ1();
        }
      }
    };

    $scope.promptQ1 = function () {
      var myPopup = $ionicPopup.show({
        template: '<input type="radio" ng-model="general.Q10G1" ng-value="1" name="e">' +
        '<span>Regular GSP Audit</span>' +
        '<input type="radio" ng-model="general.Q10G1" ng-value="2" name="e">' +
        '<span>GSP Audit for primary sections</span>',
        title: 'Please select',
        subTitle: '<p class="text-white" style="color: #FFFFFF;">Would you like to take regular GSP Audit' +
        ' or GSP Audit for primary sections?</p>',
        scope: $scope,
        buttons: [
          {
            text: '<b>Save</b>',
            onTap: function (e) {
              if (!$scope.general.Q10G1) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.general.Q10G1;
              }
            }
          }
        ]
      });
    };

    $scope.checkQ6 = function () {
      var val = $scope.general.Q6G1;
      if (val > 365) {
        $scope.general.Q6G1 = 365;
        $scope.showPopup("Alert", "No. of working days can't be greater than 365");
        // angular.element('#questiongeneraleight').val(365);
      }
    };

    $scope.validNext = function () {
      return ($scope.validVal('Q1G1') && $scope.validVal('Q1G2') &&
      $scope.validVal('Q2G1') && $scope.validQ3() &&
      $scope.validVal('Q4G4S3') && $scope.validVal('Q5G1') &&
      $scope.validVal('Q6G1') && $scope.validVal('Q8G1') &&
      $scope.validVal('Q9G1'));

    };

    $scope.updateNumStudents = function (rowNum) {
      if (rowNum) {

        if (+rowNum == 1) {
          $scope.general['Q4G1S3'] = $scope.getAbsVal('Q4G1S1') +
            $scope.getAbsVal('Q4G1S2');
        }
        else if (+rowNum == 2) {
          $scope.general['Q4G2S3'] = $scope.getAbsVal('Q4G2S1') +
            $scope.getAbsVal('Q4G2S2');
        }
        else if (+rowNum == 3) {
          $scope.general['Q4G3S3'] = $scope.getAbsVal('Q4G3S1') +
            $scope.getAbsVal('Q4G3S2');
        }
        $scope.general['Q4G4S1'] = $scope.getAbsVal('Q4G1S1') +
          $scope.getAbsVal('Q4G2S1') +
          $scope.getAbsVal('Q4G3S1');

        $scope.general['Q4G4S2'] = $scope.getAbsVal('Q4G1S2') +
          $scope.getAbsVal('Q4G2S2') +
          $scope.getAbsVal('Q4G3S2');

        $scope.general['Q4G4S3'] = $scope.getAbsVal('Q4G4S1') + $scope.getAbsVal('Q4G4S2');
      }
    };
    // validation functions end

    // function for getting answer values from other sections
    $scope.getAnswer = function (questionID) {
      return AppServiceAPI.selectQuestion(questionID).then(function (res) {
        if (res.rows.length > 0) {
          var row = res.rows[0];
          var answer = row['answer'];
          console.log('returning answer: ' + answer);
          return answer;
        }
      }, function (err) {
        console.error('Error in db: ' + JSON.stringify(err));
      });
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
      })
    };

    $scope.saveData = function (data) {
      angular.forEach(data, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 1);
      });
      AppServiceAPI.sync();
    };

    $scope.goToPrev = function () {
      $state.go('app.profile');
    };

    $ionicPlatform.ready(function () {

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

    });

    $scope.quiz2 = function (general) {

      angular.forEach(general, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 1);
      });
      AppServiceAPI.sync();
      $state.go('app.air1');
    };
  });




