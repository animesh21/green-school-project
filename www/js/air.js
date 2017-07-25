angular.module('starter.air', [])

  .controller('air1Ctrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicModal, $ionicPlatform, $ionicPopup, $sce) {
    'use strict';

    $scope.air = {};

    $scope.progress = 10;

    $scope.roomRange = [];

    $scope.readMore = {};

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/klen-TOrXFA?enablejsapi=1');

    $scope.iFrameID = 'airFrame';

    // video modal for tutorial video
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      $scope.pauseVideo();
    });

    $scope.pauseVideo = function () {
      var iframe = document.getElementById("airFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      console.log('video paused');
    };

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

    // validation functions
    $scope.validVal = function (questionID) {
      if ($scope.air[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return parseInt($scope.air[questionID]) || 0;
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

    $scope.getQuestionID = function (n1, n2, n3) {
      return 'Q' + n1 + 'A' + n2 + 'S' + n3;
    };

    $scope.Q5Check = function (n1, n2, n3) {

      var qID2 = $scope.getQuestionID(n1, n2, 2);
      var qID3 = $scope.getQuestionID(n1, n2, 3);
      var qID4 = $scope.getQuestionID(n1, n2, 4);
      var totRowArea = $scope.air[qID2];
      var openRowArea = $scope.air[qID3];
      console.log('Inside Q5check: area:' + totRowArea + ', ' + openRowArea);
      if (+openRowArea > +totRowArea) {
        $scope.showPopup('Alert', "Open area can't be greater than total area!");
        $scope.air[qID3] = totRowArea;
      }
      $scope.air[qID4] = $scope.air[qID3] / $scope.air[qID2] * 100;
      var totColArea = {
        2: 0,
        3: 0
      };
      for (var i = 2; i <= 3; i++) {
        for (var j = 1; j <= $scope.air.Q4A1; j++) {
          totColArea[i] = (totColArea[i] || 0) + $scope.getAbsVal($scope.getQuestionID(5, j, i))
        }
      }
      $scope.air.Q5A110S2 = totColArea[2];
      $scope.air.Q5A110S3 = totColArea[3];
      $scope.air.Q5A110S4 = $scope.air.Q5A110S3 / $scope.air.Q5A110S2 * 100;
    };

    $scope.validateQ5 = function () {
      var qID, val;
      for (var i = 1; i <= $scope.air.Q4A1; i++) {
        qID = $scope.getQuestionID(5, i, 4);
        val = $scope.getAbsVal(qID);
        if (!val) {
          return false;
        }
      }
      return true;
    };

    $scope.updateQ5Rows = function () {
      var numRooms = parseInt($scope.air.Q4A1);
      var range = [];
      var minVal = 1;
      var maxVal;
      if (numRooms >= 10) {
        maxVal = 10;
      }
      else {
        maxVal = numRooms;
      }
      for (var i = minVal; i <= maxVal; i += 1) {
        range.push(i);
      }
      $scope.roomRange = range;
    };

    $scope.updateQ6 = function (n) {
      var qIDs = ['Q6A2S1B', 'Q6A2S1C', 'Q6A2S1V', 'Q6A2S1O', 'Q6A2S1T'];
      var qID;
      var qID1;
      var totalVehicles = 0;
      for (var i = 0; i < qIDs.slice(0, -1).length; i++) {
        qID = qIDs[i] + n;
        qID1 = qIDs[i] + '1';
        var vehicles = $scope.getAbsVal(qID);
        var maxVehicles = $scope.getAbsVal(qID1);
        if (vehicles > maxVehicles) {
          $scope.air[qID] = maxVehicles;
          $scope.showPopup('Alert', "This field can't be greater than total " +
            "no. of vehicles of this type.");
        }
        totalVehicles += $scope.getAbsVal(qID);
      }
      $scope.air[qIDs[qIDs.length - 1] + n] = totalVehicles;
    };

    $scope.updateQ6C = function (type) {
      console.log('inside update 6C');

      var numQues = [1, 2, 3, 4];
      var quesPrefix = 'Q6A2S3';
      var typeTotal = 0;
      for (var i = 0; i < numQues.length; i++) {
        typeTotal += $scope.getAbsVal(quesPrefix + type + numQues[i]);
      }

      $scope.air[quesPrefix + type + '5'] = typeTotal;

      var qMap = {
        'B': 1,
        'C': 2,
        'V': 3,
        'O': 4
      };
      var types = ['D', 'P', 'L', 'C', 'E', 'H', 'B'];
      var qID, qMaxID, maxVal, rowVal;
      angular.forEach(qMap, function (value, key) {
        qMaxID = 'Q6A2S1' + key + '1';
        maxVal = $scope.getAbsVal(qMaxID);
        rowVal = 0;
        for (i = 0; i < types.length; i++) {
          qID = 'Q6A2S3' + types[i] + value;
          rowVal += $scope.getAbsVal(qID);
          if (rowVal > maxVal) {
            $scope.air[qID] = 0;
            $scope.showPopup('Alert', "Sum of vehicles can't be greater" +
              " than total no. of vehicles of this type.");
            $scope.updateQ6C(type);
            break;
          }

        }

      });
    };

    $scope.validateQ6 = function () {
      var val = $scope.getAbsVal('Q6A1');
      if (val) {
        if (val >= 1 && val <= 2) {
          return true;
        }
        else {
          return $scope.validateQ6A() && $scope.validateQ6B() &&
            $scope.validateQ6C() && $scope.validateQ6D();
        }
      }
    };

    $scope.validateQ6A = function () {
      if ($scope.getAbsVal('Q6A4')) {
        return true;
      }
      return false;
    };

    $scope.validateQ6B = function () {
      if ($scope.getAbsVal('Q6A2S1T1')) {
        return true;
      }
      return false;
    };

    $scope.validateQ6C = function () {
      return true;  // TODO: validation to be implemented
    };

    $scope.validateQ6D = function () {
      if ($scope.validVal('Q6A3')) {
        return $scope.validVal('Q6A3S1');
      }
      return false;
    };

    $scope.updateQ7 = function (n) {
      // updating the concerned row total
      $scope.updateQ7Row(n);

      // updating the columns
      var qID;
      var val;
      var colTotals = [0, 0, 0, 0];
      var maxColTotals = [
        $scope.air.Q4G1S3,
        $scope.air.Q4G2S3,
        $scope.air.Q4G3S3,
        $scope.air.Q4G4S3
      ];
      for (var j = 0; j <= 3; j++) {
        for (var i = 1; i <= 11; i++) {
          qID = 'Q7A' + i + 'S' + (j + 1);
          val = $scope.getAbsVal(qID);
          if ((colTotals[j] + val) > maxColTotals[j]) {
            val = 0;
            $scope.air[qID] = val;
            $scope.updateQ7Row(n);
            $scope.showPopup('Alert', "Sum of this column" +
              " can't be greater than the value entered in" +
              " general section i.e. " + maxColTotals[j]);
            break;
          }
          colTotals[j] += val;
        }
        qID = 'Q7A12S' + (j + 1);
        $scope.air[qID] = colTotals[j];
      }
    };

    $scope.updateQ7Row = function (n) {
      var quesPrefix = 'Q7A' + n + 'S';
      var rowTotal = 0;
      for (var i  = 1; i <= 3; i++) {
        rowTotal += $scope.getAbsVal(quesPrefix + i);
      }
      $scope.air[quesPrefix + 4] = rowTotal;
    };

    $scope.validateQ7 = function () {
      var numTotal, numTotalAir;
      $ionicPlatform.ready(function () {
        $scope.getAnswer('Q4G4S3').then(function (res) {
          console.log('Num total: ' + res);
          numTotal = parseInt(res);
          numTotalAir = $scope.getAbsVal('Q7A12S4');
          if (numTotal != numTotalAir) {
            $scope.showPopup('Alert', "Total population of school entered above in Q.4 doesn't match with " +
              "total population entered in General section Q.4(a) i.e. " + numTotal);
          }
          else {
            $scope.quiz2($scope.air);
          }
        });
      });
    };

    $scope.checkQ8 = function () {
      var qID = 'Q8A1';
      var val1 = $scope.getAbsVal(qID);
      var val2;
      $ionicPlatform.ready(function () {
        $scope.getAnswer('Q4G1S3').then(function (res) {
          val2 = parseInt(res);
          if (val1 > val2) {
            $scope.air.Q8A1 = val2;

            $scope.showPopup('Alert', "This value can't be greater than total" +
              " no. of students entered in the General section i.e. " +  val2);
          }
        });
      });
    };

    $scope.validateQ9 = function () {
      var val = $scope.getAbsVal('Q9A1');
      if (val) {
        if (val == 1) {
          return true;
        }
        else if (val == 2) {
          return $scope.validVal('Q10A1');
        }
      }
      return false;
    };

    $scope.validNext = function () {
      return $scope.validateTeacher('A') && $scope.validateStudent('A') &&
        $scope.validVal('Q4A1') && $scope.validateQ5() &&
        $scope.validateQ6() &&
        $scope.validVal('Q8A1') && $scope.validateQ9();
      // return true;
    };

    $scope.updatePage = function () {
      $scope.updateQ5Rows();
      $scope.setQ4G();
    };

    $scope.setQ4G = function () {
      $ionicPlatform.ready(function () {
        $scope.getAnswer('Q4G4S3').then(function (res) {
          console.log('Value fo Q4G4S3(total population): ' + res);
          $scope.air.Q4G4S3 = parseInt(res);
        });
        // student's population
        $scope.getAnswer('Q4G1S3').then(function (res2) {
          $scope.air.Q4G1S3 = parseInt(res2);
          console.log('Students population: ' + res2);
        });
        // teacher's population
        $scope.getAnswer('Q4G2S3').then(function (res3) {
          $scope.air.Q4G2S3 = parseInt(res3);
          console.log('Teachers population: ' + res3);
        });
        // other staff population
        $scope.getAnswer('Q4G3S3').then(function (res4) {
          $scope.air.Q4G3S3 = parseInt(res4);
          console.log('Other staff: ' + res4);
        });

      });
    };
    // end validation functions

    $scope.saveData = function (data) {
      angular.forEach(data, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 2);
      });
      AppServiceAPI.sync();
    };

    $scope.goToPrev = function () {
      $state.go('app.general1');
    };

    $scope.toggleReadMore = function (n) {
      $scope.readMore[n] = 1 - ($scope.readMore[n] || 0);
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

      AppServiceAPI.select(2).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            var questionid = res.rows.item(index).questionid;
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.air[questionid] = res.rows.item(index).answer;
          });

        }
        else {
          console.log("No Record Found");
        }
        //return data;
      });

      $scope.data = {};

      $scope.quiz2 = function (air) {

        angular.forEach(air, function (item, index) {
          AppServiceAPI.update($rootScope.user, index, item, 10, 2);
        });
        // AppServiceAPI.select(2).then(function(res) {

        // 	if(res.rows.length > 0) {
        //         angular.forEach(res.rows, function(item,index) {
        //         	questionid = res.rows.item(index).questionid
        //         	console.log(questionid,res.rows.item(index).answer,item,index);
        //         	//$scope.air[questionid] = res.rows.item(index).answer;
        //         });

        // 	}
        // 	else
        // 	{
        // 		console.log("No Record Found")
        // 	}
        // 	//return data;
        // });

        AppServiceAPI.sync();
        $state.go('app.energy');
      };
    });
  });
