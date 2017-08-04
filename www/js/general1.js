angular.module('starter.general', [])

  .controller('gen1Ctrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicPlatform, $ionicPopup) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });
    // defining object to store responses of the user to survey questions
    $scope.general = {
      Q1G1: 1,
      Q1G2: 12
    };

    $scope.data = {
      availableLowerLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      availableHigherLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };

    $scope.toolTips = {
        'Q1': 'If your school has classes from Grade 6 to 11, your response' +
              ' will be lowest level of grade: Grade 6 and Highest level of grade:' +
              ' Grade 11. If your school has only one Grade (Grade 7) then your' +
              ' response for both will be Grade 7',
        'Q3': "For `Other`: School-specific curriculum board of education, " +
              "for e.g. `Open Learning` etc.",
        'Q4A': "Permanent members are students, teachers, non-teaching staff" +
               " such as technical and administrative staff, guards etc.",
        'Q4B': "Visitors are students from other schools, teachers from other " +
               "schools, technicians, NGOs, contractors and laborers, vendors," +
               " chief guests, etc . Please provide the average number of " +
               "visitors for any month, between August - October.",
        'Q5': "On an average, a day scholar school runs for 220-230 days in a year." +
              " Residential schools may have more number of working days.",
        'Q7': "Urban area has a municipality/corporation/cantonment board/notified" +
              " town area, a minimum population of 5000 and a density of population" +
              " of at least 400 per square kilometer. Any area which is not covered" +
              " by the definition of Urban is Rural."
    };

    // function of displaying tooltip
    $scope.showToolTip = function (qNo) {
      var toolTip = $scope.toolTips[qNo];
      $scope.showPopup('Tool Tip', toolTip);
    };

    // progress corresponding to current section
    $scope.progress = 5;

    // function for getting answer values from other sections(from db)
    $scope.getAnswer = function (questionID) {
      return AppServiceAPI.selectQuestion(questionID).then(function (res) {
        if (res.rows.length > 0) {
          var row = res.rows[0];
          return row.answer;
        }
      }, function (err) {
        return err;
        console.error('Error in db: ' + JSON.stringify(err));
      });
    };

    $scope.setQ1S1 = function () {
      $ionicPlatform.ready(function () {
        $scope.getAnswer('Q1S1').then(function (res) {
          console.log('Getting Q1S1: ' + res);
          $scope.general.Q1S1 = res;
        }, function (err) {
          console.error("Can't get Q1S1: " + JSON.stringify(err));
        });
      });

    };

    // validation functions start
    $scope.validVal = function (questionID) {
      if ($scope.general[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return parseInt($scope.general[questionID]) || 0;
    };

    $scope.validQ3 = function () {
      var val = $scope.general.Q3G1;
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
      var val1 = $scope.general.Q1G1;
      var val2 = $scope.general.Q1G2;
      if (val1 && val2) {
        if (+val1 > +val2) {
          $scope.showPopup('Alert!', 'Higher level can not be less than the lower level');
          $scope.general.Q1G2 = val1;
        }
        if (val1 <= 5 && val2 <= 5) {
          $scope.general.Q10G1 = 2;  // GSP audit for primary section
        }
        else {
          $scope.general.Q10G1 = 1;  // Regular GSP audit
        }
        console.log('Primary updated: ' + $scope.general.Q10G1);
      }
    };

    $scope.updatedQ2 = function (n) {
      var val = parseInt($scope.Q2G1);
      var qID = 'Q4G1S';
      if ($scope.general.Q2G1 == 1) {
        console.log('setting girls to 0');
        $scope.general[qID + 2] = 0;
      }
      else if ($scope.general.Q2G1 == 2) {
        $scope.general[qID + 1] = 0;
      }
      $scope.general[qID + 3] = parseInt($scope.general[qID + 1]) + parseInt($scope.general[qID + 2]);
    };

    $scope.validateQ4 = function () {
      var qID = 'Q4G1S3';
      return $scope.validVal(qID);
    };

    $scope.checkQ6 = function () {
      var val = $scope.general.Q6G1;
      if (val > 366) {
        $scope.general.Q6G1 = 366;
        $scope.showPopup("Alert", "No. of working days can't be greater than 366");
        // angular.element('#questiongeneraleight').val(365);
      }
    };

    $scope.validNext = function () {
      // return ($scope.validVal('Q1G1') && $scope.validVal('Q1G2') &&
      // $scope.validVal('Q2G1') && $scope.validQ3() &&
      // $scope.validateQ4() && $scope.validVal('Q5G1') &&
      // $scope.validVal('Q6G1') && $scope.validVal('Q8G1') &&
      // $scope.validVal('Q9G1'));
      return true;
    };

    $scope.updateNumStudents = function (rowNum) {
      if (rowNum) {

        if (+rowNum == 1) {
          $scope.general.Q4G1S3 = $scope.getAbsVal('Q4G1S1') +
            $scope.getAbsVal('Q4G1S2');
        }
        else if (+rowNum == 2) {
          $scope.general.Q4G2S3 = $scope.getAbsVal('Q4G2S1') +
            $scope.getAbsVal('Q4G2S2');
        }
        else if (+rowNum == 3) {
          $scope.general.Q4G3S3 = $scope.getAbsVal('Q4G3S1') +
            $scope.getAbsVal('Q4G3S2');
        }
        $scope.general.Q4G4S1 = $scope.getAbsVal('Q4G1S1') +
          $scope.getAbsVal('Q4G2S1') +
          $scope.getAbsVal('Q4G3S1');

        $scope.general.Q4G4S2 = $scope.getAbsVal('Q4G1S2') +
          $scope.getAbsVal('Q4G2S2') +
          $scope.getAbsVal('Q4G3S2');

        $scope.general.Q4G4S3 = $scope.getAbsVal('Q4G4S1') + $scope.getAbsVal('Q4G4S2');
      }
    };
    // validation functions end

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




