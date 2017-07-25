angular.module('starter.energy', [])

  .controller('energyCtrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicPlatform, $sce, $ionicModal, $ionicPopup) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.energy = {};

    $scope.progress = 20;

    $scope.readMore = {};

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/i6DM3E5euRE?enablejsapi=1');

    $scope.iFrameID = 'energyFrame';

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
      var iframe = document.getElementById ("energyFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*');
      console.log('video paused');
    };

    // function for getting answer values from other sections
    $scope.getAnswer = function (questionID) {
      return AppServiceAPI.selectQuestion(questionID).then(function (res) {
        if (res.rows.length > 0) {
          var row = res.rows[0];
          var answer = row.answer;
          return answer;
        }
      }, function (err) {
        return err;
        console.error('Error in db: ' + JSON.stringify(err));
      });
    };

    // Validation functions start
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


    $scope.updateQ5 = function () {
      var val1, val2;
      $ionicPlatform.ready(function () {
        $scope.getAnswer('Q6A1').then(function (res) {
          console.log(JSON.stringify(res));
          if (res) {
            val1 = parseInt(res);
            val2 = $scope.energy.Q5E1;
            if (val1 <= 2 && val2 == 'Y'){
              $scope.showPopup('Alert', 'Your choice mismatch with answer given in air section Q3');
              $scope.energy.Q5E1 = 'N';
            }
            else if(val1 > 2 && val2 == 'N'){
              $scope.showPopup('Alert', 'Your choice mismatch with answer given in air section Q3');
              $scope.energy.Q5E1 = 'Y';
            }
            console.log('Value from air just after: ' + val1);
          }
        }, function (err) {
          console.log('Error in getting value from db: ' + JSON.stringify(err));
        });
      });
    };

    $scope.updateQ6 = function (n) {

      var conversionTable = {
        1: 3.6, // Electricity from grid
        2: 45.6, // Generator(Diesel)
        3: 43.93, // Petrol
        4: 44.8, // Diesel
        5: 37.24, // CNG
        6: 43.09, // Kerosene
        7: 20.92, // coal
        8: 18, // Animal waste(kg)
        9: 3.6, // Solar
        10: 3.6, // Wind
        11: 45.19, // LPG
        12: 37.24, // Piped Natural Gas
        13: 37.24, // Biogas
        14: 0, // Others
        16: 17.6 // Wood
      };

      // for updating question no. 6
      if (n == 9 || n == 10 || n == 13) {
        var qID9 = 'Q6E9S1';
        var qID10 = 'Q6E10S1';
        var qID13 = 'Q6E13S1';
        var val9, val10, val13;
        val9 = $scope.getAbsVal(qID9);
        val10 = $scope.getAbsVal(qID10);
        val13 = $scope.getAbsVal(qID13);
        if (val9 || val10 || val13) {
          $scope.energy.Q9E1 = 'Y';
        }
        else {
          $scope.energy.Q9E1 = 'N';
        }
      }

      var conversionFactor = conversionTable[n];
      var qID1 = 'Q6E' + n + 'S1';
      var qID2 = 'Q6E' + n + 'S2';

      $scope.energy[qID2] = $scope.getAbsVal(qID1) * conversionFactor;

      var totalEnergy = 0;
      var qID;
      angular.forEach(conversionTable, function (value, key) {
        qID = 'Q6E' + key + 'S2';
        totalEnergy += $scope.getAbsVal(qID);
      });
      $scope.energy.Q6E15S2 = totalEnergy;
    };

    $scope.validateQ9 = function () {
      var val = $scope.energy.Q9E1;
      if (val) {
        if (val == 'Y'){
          var val1 = $scope.validVal('Q9E1S1');
          var val2 = $scope.validVal('Q9E1S2');
          var val3 = $scope.validVal('Q9E1S3');
          var val4 = $scope.validVal('Q9E1S4');
          var val5 = $scope.validVal('Q9E1S5');
          if (val1 || val2 || val3 || val4 || val5) {
            return true;
          }
          else {
            return false;
          }
        }
        else  if (val == 'N') {
          return true;
        }
      }
      return false;
    };

    $scope.checkQ9E1 = function () {
      var qID9 = 'Q6E9S1';
      var qID10 = 'Q6E10S1';
      var qID13 = 'Q6E13S1';
      var val9, val10, val13;
      val9 = $scope.getAbsVal(qID9);
      val10 = $scope.getAbsVal(qID10);
      val13 = $scope.getAbsVal(qID13);
      if (val9 || val10 || val13) {
        if ($scope.energy.Q9E1 == 'N') {
          $scope.energy.Q9E1 = 'Y';
          $scope.showPopup('Alert', "You've entered value in solar, wind or biogas field in Q 3 above");
        }
      }
    };

    $scope.checkQ9E1S = function(n1, n2){
      var qID1 = 'Q9E1S' + n1;
      var qID2 = 'Q6E' + n2 + 'S1';
      var val2 = $scope.getAbsVal(qID2);
      console.log('Value of energy: ' + val2);
      if (val2 > 0) {
        $scope.showPopup('Alert', "You've entered value in this energy field above.");
        $scope.energy[qID1] = true;
      }
    };

    $scope.validQ7S3 = function (questionID) {
      var val = $scope.energy[questionID];
      if (val) {
        val = +val;
        console.log('Bee rating: ' + val);
        if (val > 5 || val < 1) {
          $scope.showPopup('Alert', "BEE rating should be between 1 to 5");
          $scope.energy[questionID] = 5;
        }
      }
    };

    $scope.validLimit = function (questionID, numLimit) {
      var val = +$scope.energy[questionID];
      if (val > numLimit) {
        $scope.showPopup("Alert", "This number can't be greater than " + numLimit);
        $scope.energy[questionID] = numLimit;
        // angular.element('#questiongeneraleight').val(365);
      }
    };

    $scope.validVal = function (questionID) {
      if ($scope.energy[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return parseFloat($scope.energy[questionID]) || 0;
    };

    $scope.validNext = function () {
      var validQ4 = $scope.validVal('Q4E1');
      var validQ5 = $scope.validVal('Q5E1');
      var validQ9 = $scope.validateQ9();
      var validQ10 = $scope.validVal('Q10E1');
      return ($scope.validateTeacher('E') && $scope.validateStudent('E') &&
              validQ4  && validQ5 &&
              validQ9 && validQ10);
    };
    // validation functions end

    $scope.loadPageData = function () {
      $scope.setQ5E1();
    };

    $scope.setQ5E1 = function () {
      $ionicPlatform.ready(function () {
        $scope.getAnswer('Q6A1').then(function (res) {
          var val = parseInt(res);
          if (val >=1 && val <=2) {
            $scope.energy.Q5E1 = 'N';
          }
          else if (val >=3 && val <= 5) {
            $scope.energy.Q5E1 = 'Y';
          }
        });
      });
    };

    $scope.saveData = function (data) {
      angular.forEach(data, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 3);
      });
      AppServiceAPI.sync();
    };

    $scope.goToPrev = function () {
      $state.go('app.air1');
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
      });
    };

    $ionicPlatform.ready(function () {
      AppServiceAPI.select(3).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            var questionid = res.rows.item(index).questionid;
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.energy[questionid] = res.rows.item(index).answer;
          });
        }
        else {
          console.log("No Record Found");
        }
        //return data;
      });
    });

    $scope.quiz2 = function (energy) {

      angular.forEach(energy, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 3);
      });
      AppServiceAPI.sync();
      $state.go('app.food');
    };
  });
