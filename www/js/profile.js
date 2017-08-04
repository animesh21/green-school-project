/**
 * Created by animesh on 15/7/17.
 */

angular.module('starter.profile', [])

  .controller('profileCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                       AppServiceAPI, $ionicPlatform, $ionicPopup) {

    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    /*
     * Default data to be displayed on the form
     * This should become dynamic after in sync with the api
     * and database. TODO: make it dynamic
     */
    $scope.data = {

      countries: [
        {id: '1', name: 'India'},
        {id: '2', name: 'Pakistan'}
      ],

      states: [
        {id: '1', name: 'Andamean & Nicobar Islands'},
        {id: '34', name: 'Uttar Pradesh'}
      ],

      districts: [
        {id: '1', name: 'Lucknow'},
        {id: '2', name: 'Rae Bareli'}
      ],

      schoolCategories: [
        'Day Scholar',
        'Day Boarding',
        'Residential',
        'Day Scholar + Day Boarding',
        'Day Boarding + Residential',
        'Day Scholar + Residential',
        'Day Scholar + Day Boarding + Residential'
      ],

      schoolShifts: [
        'Morning',
        'Evening',
        'Both'
      ]

    };

    // defining object to store responses of the user to survey questions
    $scope.profile = {
      Q4P1: {id: '1', name: 'India'},
      Q5P1: {id: '34', name: 'Uttar Pradesh'},
      Q6P1: {id: '1', name: 'Lucknow'},
      Q10P1: '+91',
      Q14P1: '+91'
    };

    $scope.toolTips = {
        'Q12': "Coordinating teacher's name / Name of the teacher responsible for GSP Audit",
        'Q15': "Please choose what is applicable. If 60% or 75% of your school’s" +
               " population belongs to one category and the remaining to another, select the" +
               " category the majority of students belong to. For example: If 75% of" +
               " the students are day boarders and 25% are residential, select " +
               "‘Day Boarding’. But if 50% of the students are day boarders and" +
               " 50% are residential, select ‘Day Boarding + Residential’.",
        'Q16': "Not applicable in the case of residential school."
    };

    // function of displaying tooltip
    $scope.showToolTip = function (qNo) {
      var toolTip = $scope.toolTips[qNo];
      $scope.showPopup('Tool Tip', toolTip);
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

    // value of progress for this section
    $scope.progress = 5;

    $scope.validVal = function (questionID) {
      if ($scope.profile[questionID]) {
        return true;
      }
      return false;
    };

    $scope.validQ15 = function () {
      var val1 = $scope.getAbsVal('Q1S1');
      if (val1) {
        if (val1 == 3) {
          $scope.profile.Q2S1 = null;
          return true;
        }
        else if ($scope.getAbsVal('Q2S1')) {
          return true;
        }
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return $scope.profile[questionID] || 0;
    };

    $scope.validNext = function () {
      // var qID, isValidQues;
      // var questionsWith2ndPart = [9, 10, 14];  // these questions would be checked for id with `P2` prefix
      // for (var i = 5; i <= 15; i++) {
      //   if (i == 15) {
      //     isValidQues = $scope.validQ15();
      //   }
      //   else {
      //     if (questionsWith2ndPart.indexOf(i) == -1) {
      //       qID = 'Q' + i + 'P1';
      //     }
      //     else {
      //       qID = 'Q' + i + 'P2';
      //     }
      //     isValidQues = $scope.validVal(qID);
      //   }
      //   if (!isValidQues) {
      //     return false;
      //   }
      // }
      return true;
    };

    $scope.saveData = function () {
      AppServiceAPI.sync();
      angular.forEach($scope.profile, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 0);
      });
    };

    $ionicPlatform.ready(function () {
      AppServiceAPI.select(0).then(function (res) {
        if (res.rows.length > 0) {
          var questionid;
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
