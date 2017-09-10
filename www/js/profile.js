/**
 * Created by animesh on 15/7/17.
 */

angular.module('starter.profile', [])

  .controller('profileCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                       AppServiceAPI, $ionicPlatform, $ionicPopup, $ionicLoading,
                                       $q, ValidationService, $http) {

    'use strict';
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });
    /*
     * Default data to be displayed on the form
     * This should become dynamic after in sync with the api
     * and database.
     */
    $scope.data = {

      countries: [
        'India',
        'Pakistan'
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

    // setting default state and district
    $scope.data.states = $rootScope.states;
    $scope.data.districts = $rootScope.districts;

    // defining object to store responses of the user to survey questions
    $scope.profile = {
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

    $scope.showLoading = function (message) {
      $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner><p>' +
        message + '</p>'
      });
    };

    $scope.hide = function () {
      $ionicLoading.hide();
    };

    // value of progress for this section
    $scope.progress = $rootScope.completeness;

    $scope.validVal = function (questionID) {
      if ($scope.profile[questionID]) {
        return true;
      }
      return false;
    };

    $scope.updateDistricts = function () {
      var url = 'http://greenschoolsprogramme.org/audit2017/api/Gsp/states/stateid/' + $scope.profile.state;
      // var url = 'http://localhost/GSP/api/Gsp/states/stateid/' + $scope.profile.state;
      $http.get(url).then(function (res) {
        // console.log('Response of districts: ' + JSON.stringify(res));
        $scope.data.districts = res.data;
      }, function (err) {
        console.error('Error at the district endpoint: ' + JSON.stringify(err));
      });
    };

    $scope.validQ15 = function () {
      var val1 = $scope.getAbsVal('Q1S1');
      if (val1) {
        if (val1 === 3 || val1 === 5 || val1 === 6 || val1 === 7) {
          $scope.profile.Q2S1 = 0;
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
      var qID, isValidQues;
      var qIDs = ['state', 'district', 'city', 'pincode', 'telephone',
        'mobile', 'principle_name', 'coname', 'coemail', 'comobile'];
      var questionsWith2ndPart = [9, 10, 14];  // these questions would be checked for id with `P2` prefix
      for (var i = 5; i <= 15; i++) {
        if (i === 15) {
          isValidQues = $scope.validQ15();
        }
        else {
          qID = qIDs[i - 5];
          isValidQues = $scope.validVal(qID);
        }
        if (!isValidQues) {
          return false;
        }
      }
      return true;
    };

    $scope.saveData = function () {
      ValidationService.saveData($scope.profile, 0).then(function () {
        AppServiceAPI.sync(0).then(function () {
          ValidationService.logoutUser();
        });
      });
    };

    $ionicPlatform.ready(function () {




      ValidationService.getData(0).then(function (res) {
        // console.log('Returned: ' +  JSON.stringify(res));
        for (var qID in res) {
          $scope.profile[qID] = res[qID];
        }
        // console.log(JSON.stringify($scope.profile));
      });

    });

    $scope.quiz2 = function (profile) {
      AppServiceAPI.updateUserCompleteness($rootScope.user, 5)
        .then(function (res) {
          console.log('Upldated completeness in profile: ' + JSON.stringify(res));
          AppServiceAPI.getUserCompleteness($rootScope.user).then(function (res) {
            console.log("User completeness from db: " + JSON.stringify(res));
            if (res.rows.length > 0) {
              var completeness_data = res.rows.item(0);
              $rootScope.completeness = completeness_data.completeness;
              console.log('User completeness set to : ' + JSON.stringify($rootScope.completeness));
            }
          }, function (err) {
            console.error("Can't get completeness: " + JSON.stringify(err));
          });
        }, function (err) {
          console.error('Error in updating completeness: ' + JSON.stringify(err));
        });
      ValidationService.quiz2(profile, 0).then(function () {
        AppServiceAPI.sync(0).then(function () {
          $state.go('app.general1');
        }, function (err) {
          console.error('Error while sending to the api: ' + JSON.stringify(err));
        });
      }, function (err) {
        console.error('Error while saving to db: ' + JSON.stringify(err));
      });

    };
  });
