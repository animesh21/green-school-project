angular.module('starter.food', [])

  .controller('foodCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                    AppServiceAPI, $ionicPlatform, $sce, $ionicModal, $ionicPopup) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.food = {};

    $scope.progress = 30;

    $scope.readMore = {};

    $scope.toggleReadMore = function (n) {
      $scope.readMore[n] = 1 - ($scope.readMore[n] || 0);
    };

    $scope.midDayMeals = {
      1: 'Rice',
      2: 'Wheat',
      3: 'Pulses/dal',
      4: 'Vegetables',
      5: 'Egg',
      6: 'Porridge',
      7: 'Upma',
      8: 'Khichdi',
      9: 'Curd/Butter milk',
      10: 'Biscuits',
      11: 'Packaged chips',
      12: 'Bread butter',
      13: 'Sandwich',
      14: 'Packaged Juice',
      15: 'Other'
    };

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/9r3Lwrd9BUs?enablejsapi=1');

    $scope.iFrameID = 'foodFrame';

    // video modal for tutorial video
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      console.log("openModal");
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      $scope.pauseVideo();
    });

    $scope.pauseVideo = function () {
      var iframe = document.getElementById("foodFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*')
      console.log('video paused');
    };

    // validation functions
    $scope.validVal = function (questionID) {
      if ($scope.food[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return parseFloat($scope.food[questionID]) || 0;
    };

    $scope.validateTeacher = function (section) {
      var qFirstName, qLastName, qEmail, isValid;
      for(var i = 1; i <= 3; i++) {
        qFirstName = 'Q1' + section + i + 'S1';
        qLastName = 'Q1' + section + i + 'S3';
        qEmail = 'Q1' + section + i + 'S2';
        isValid = $scope.validVal(qFirstName) && $scope.validVal(qEmail) &&
          $scope.validVal(qLastName);
        if (isValid) {
          return true;
        }
      }
      return false;
    };

    $scope.validateStudent = function (section) {
      var qFirstName, qLastName, qGrade, isValid;
      for (var i = 1; i <= 10; i++) {
        qFirstName = 'Q3' + section + i + 'S1';
        qLastName = 'Q3' + section + i + 'S2';
        qGrade = 'Q3' + section + i + 'S3';
        isValid = $scope.validVal(qFirstName) && $scope.validVal(qLastName) &&
          $scope.validVal(qGrade);
        if (isValid) {
          return true;
        }
      }
      return false;
    };

    $scope.getQ5ID = function (n) {
      return 'Q5F2S' + n;
    };

    $scope.checkQ5F1S2 = function () {
      var val = $scope.food.Q5F1S2;
      $scope.getAnswer('Q4G1S3').then(function (res) {
        var val2 = parseInt(res);
        if (val > val2)  {
          $scope.food.Q5F1S2 = val2;
          $scope.showPopup('Alert', "This value can't be greater than " +
            "total no. of students entered in General section");
        }
      });
    };

    $scope.checkQ5F1S3 = function () {
      var val1 = parseInt($scope.food.Q5F1S2);
      var val2 = parseInt($scope.food.Q5F1S3);
      if (val2 > val1) {
        $scope.food.Q5F1S3 = val1;
        $scope.showPopup('Alert', "This value can't be greater than " +
          "no. of students who bring lunch i.e. " + val1);
      }
    };

    $scope.validateQ5 = function () {
      var qID = 'Q5F1';
      var val = $scope.food.Q5F1;
      if (val) {
        var s1, s2, s3, s4;
        if (val == 'Y') {
          s1 = $scope.validVal('Q5F1S1');
          s2 = true;
          var qID2;
          angular.forEach($scope.midDayMeals, function (value, key) {
            qID2 = $scope.getQ5ID(key);
            if (!$scope.validVal(qID2)){
              s2 = false;
            }
          });
          s3 = $scope.validVal('Q5F3');
          if (s1 && s2 && s3) {
            return true;
          }
          else {
            return false;
          }
        }
        else if (val == 'N') {
          s1 = $scope.food.Q5F1S1;
          if (s1 == 'N') {
            return true;
          }
          else if(s1 == 'Y') {
            s2 = $scope.validVal('Q5F1S2');
            s3 = $scope.validVal('Q5F1S3');
            s4 = $scope.validVal('Q5F1S4');
            if (s2 && s3 && s4) {
              return true;
            }
            else {
              return false;
            }
          }
        }
      }
      else {
        return false;
      }

    };

    $scope.updateQ5F3 = function () {
      $ionicPlatform.ready(function () {
        var val1 = $scope.food.Q5F3;
        var val2;
        $scope.getAnswer('Q4G1S3').then(function (res) {
          val2 = parseInt(res);
          if (val1 > val2) {
            $scope.food.Q5F3 = val2;
            $scope.showPopup('Alert', "This number can't be greater than total" +
              "student population entered in General section i.e. " + val2);
          }
        });
      });
    };

    $scope.validateQ7AndQ8 = function (n) {
      var qID = 'Q' + n + 'F1';
      var val = $scope.food[qID];
      if (val == 'N') {
        return true;
      }
      else if (val == 'Y') {
        return $scope.validateF1S(n);
      }
      else {
        return false;
      }
    };

    $scope.validateF1S = function (n) {
      var qIDPrefix = 'Q'+ n + 'F1S';
      var qID;
      for(var i = 1; i <= 5; i++) {
        qID = qIDPrefix + i;
        if ($scope.validVal(qID)) {
          return true;
        }
      }
      return false;
    };

    $scope.validateQ9AndQ10 = function (n) {
      var qID = 'Q' + n + 'F1';
      var val = $scope.food[qID];
      if (val == 'N') {
        return true;
      }
      else if (val == 'Y') {
        var qID2 = 'Q' + n + 'F2';
        return $scope.validVal(qID2);
      }
      else {
        return false;
      }
    };

    $scope.validateQ11 = function () {
      var val = $scope.food.Q11F1;
      if (val == 'N') {
        return true;
      }
      else if (val == 'Y') {
        return $scope.validVal('Q11F2') && $scope.validVal('Q11F3');
      }
      return false;
    };

    $scope.validateQ12 = function () {
      // using validator for questions 9 and 10 because this question also
      // has the same pattern
      return $scope.validateQ9AndQ10(12);
    };

    $scope.validateQ13 = function () {
      // using validator for questions 9 and 10 because this question also
      // has the same pattern
      return $scope.validateQ9AndQ10(13);
    };

    $scope.validNext = function () {
      return $scope.validateTeacher('F') && $scope.validateStudent('F') &&
             $scope.validVal('Q4F1') && $scope.validateQ5() &&
             $scope.validateQ7AndQ8(7) && $scope.validateQ7AndQ8(8) &&
             $scope.validateQ9AndQ10(9) && $scope.validateQ9AndQ10(10) &&
             $scope.validateQ11() && $scope.validateQ12() && $scope.validateQ13();
    };
    // end validation functions

    // function for getting answer values from other sections
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

    $scope.saveData = function (data) {
      angular.forEach(data, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 4);
      });
      AppServiceAPI.sync();
    };

    $scope.goToPrev = function () {
      $state.go('app.energy');
    };

    $scope.showPopup = function (title, message) {
      var popup = $ionicPopup.show({
        title: title,
        template: message,
        buttons: [
          {
            'text': 'OK'
          }
        ]
      })
    };

    $ionicPlatform.ready(function () {

      AppServiceAPI.select(4).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.food[questionid] = res.rows.item(index).answer;
          });

        }
        else {
          console.log("No Record Found")
        }
        //return data;
      });
    });

    $scope.quiz2 = function (food) {

      angular.forEach(food, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 4);
      });
      AppServiceAPI.sync();
      $state.go('app.land');
    };
  });
