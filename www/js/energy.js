angular.module('starter.energy', [])

  .controller('energyCtrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicPlatform, $sce, $ionicModal) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.energy = {};

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

    // Validation functions start
    $scope.validateTeacher = function () {
      var teacherName1 = $scope.energy.Q1E1S1;
      var teacherName2 = $scope.energy.Q1E2S1;
      var teacherName3 = $scope.energy.Q1E3S1;

      var teacherEmail1 = $scope.energy.Q1E1S2;
      var teacherEmail2 = $scope.energy.Q1E2S2;
      var teacherEmail3 = $scope.energy.Q1E3S2;

      var teacherDetail1 = teacherName1 && teacherEmail1;
      var teacherDetail2 = teacherName2 && teacherEmail2;
      var teacherDetail3 = teacherName3 && teacherEmail3;

      return teacherDetail1 || teacherDetail2 || teacherDetail3
    };

    $scope.validStaff = function () {
      var staffName1 = $scope.energy.Q2E1S1;
      var staffName2 = $scope.energy.Q2E2S1;
      var staffName3 = $scope.energy.Q2E3S1;
      var staffName4 = $scope.energy.Q2E4S1;
      var staffName5 = $scope.energy.Q2E5S1;

      var staffEmail1 = $scope.energy.Q2E1S2;
      var staffEmail2 = $scope.energy.Q2E2S2;
      var staffEmail3 = $scope.energy.Q2E3S2;
      var staffEmail4 = $scope.energy.Q2E4S2;
      var staffEmail5 = $scope.energy.Q2E5S2;

      var staffDetail1 = staffName1 && staffEmail1;
      var staffDetail2 = staffName2 && staffEmail2;
      var staffDetail3 = staffName3 && staffEmail3;
      var staffDetail4 = staffName4 && staffEmail4;
      var staffDetail5 = staffName5 && staffEmail5;

      return staffDetail1 || staffDetail2 || staffDetail3 || staffDetail4 || staffDetail5
    };

    $scope.validateStudent = function () {
      var studentName1 = $scope.energy.Q3E1S1;
      var studentName2 = $scope.energy.Q3E2S1;
      var studentName3 = $scope.energy.Q3E3S1;
      var studentName4 = $scope.energy.Q3E4S1;
      var studentName5 = $scope.energy.Q3E5S1;
      var studentName6 = $scope.energy.Q3E6S1;
      var studentName7 = $scope.energy.Q3E7S1;
      var studentName8 = $scope.energy.Q3E8S1;
      var studentName9 = $scope.energy.Q3E9S1;
      var studentName10 = $scope.energy.Q3E10S1;

      var studentEmail1 = $scope.energy.Q3E1S2;
      var studentEmail2 = $scope.energy.Q3E2S2;
      var studentEmail3 = $scope.energy.Q3E3S2;
      var studentEmail4 = $scope.energy.Q3E4S2;
      var studentEmail5 = $scope.energy.Q3E5S2;
      var studentEmail6 = $scope.energy.Q3E5S2;
      var studentEmail7 = $scope.energy.Q3E5S2;
      var studentEmail8 = $scope.energy.Q3E5S2;
      var studentEmail9 = $scope.energy.Q3E5S2;
      var studentEmail10 = $scope.energy.Q3E5S2;

      var studentGrade1 = $scope.energy.Q3E1S3;
      var studentGrade2 = $scope.energy.Q3E2S3;
      var studentGrade3 = $scope.energy.Q3E3S3;
      var studentGrade4 = $scope.energy.Q3E4S3;
      var studentGrade5 = $scope.energy.Q3E5S3;
      var studentGrade6 = $scope.energy.Q3E5S3;
      var studentGrade7 = $scope.energy.Q3E5S3;
      var studentGrade8 = $scope.energy.Q3E5S3;
      var studentGrade9 = $scope.energy.Q3E5S3;
      var studentGrade10 = $scope.energy.Q3E5S3;

      var studentDetail1 = studentEmail1 && studentGrade1 && studentName1;
      var studentDetail2 = studentEmail2 && studentGrade2 && studentName2;
      var studentDetail3 = studentEmail3 && studentGrade3 && studentName3;
      var studentDetail4 = studentEmail4 && studentGrade4 && studentName4;
      var studentDetail5 = studentEmail5 && studentGrade5 && studentName5;
      var studentDetail6 = studentEmail6 && studentGrade6 && studentName6;
      var studentDetail7 = studentEmail7 && studentGrade7 && studentName7;
      var studentDetail8 = studentEmail8 && studentGrade8 && studentName8;
      var studentDetail9 = studentEmail9 && studentGrade9 && studentName9;
      var studentDetail10 = studentEmail10 && studentGrade10 && studentName10;

      var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
      if (studentDetail1) {
        n1 = 1;
      }
      else {
        n1 = 0;
      }
      if (studentDetail2) {
        n2 = 1;
      }
      else {
        n2 = 0;
      }
      if (studentDetail3) {
        n3 = 1;
      }
      else {
        n3 = 0;
      }
      if (studentDetail4) {
        n4 = 1;
      }
      else {
        n4 = 0;
      }
      if (studentDetail5) {
        n5 = 1;
      }
      else {
        n5 = 0;
      }
      if (studentDetail6) {
        n6 = 1;
      }
      else {
        n6 = 0;
      }
      if (studentDetail7) {
        n7 = 1;
      }
      else {
        n7 = 0;
      }
      if (studentDetail8) {
        n8 = 1;
      }
      else {
        n8 = 0;
      }
      if (studentDetail9) {
        n9 = 1;
      }
      else {
        n9 = 0;
      }
      if (studentDetail10) {
        n10 = 1;
      }
      else {
        n10 = 0;
      }
      var sum = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;

      return sum >= 5;
    };

    $scope.validQ7S3 = function (questionID) {
      var val = $scope.energy[questionID];
      if (val) {
        val = +val;
        if (val > 5) {
          alert("BEE rating can't be greater than 5");
          $scope.energy[questionID] = 5;
        }
      }
    };

    $scope.validLimit = function (questionID, numLimit) {
      val = +$scope.energy[questionID];
      console.log('value of days: ' + val);
      if (val > numLimit) {
        alert("This number can't be greater than " + numLimit);
        $scope.energy[questionID] = numLimit;
        // angular.element('#questiongeneraleight').val(365);
      }
    };

    $scope.validRadio = function (questionID) {
      if ($scope.energy[questionID]) {
        return true;
      }
      return false;
    };

    $scope.validNext = function () {
      var validQ4 = $scope.validRadio('Q4E1');
      var validQ5 = $scope.validRadio('Q5E1');
      var validQ9 = $scope.validRadio('Q9E1');
      var validQ10 = $scope.validRadio('Q10E1');
      return ($scope.validateTeacher() && $scope.validateStudent() &&
              validQ4 && validQ5 && validQ9 && validQ10);
    };
    // validation functions end

    $scope.saveData = function (data) {
      angular.forEach(data, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 1);
      });
      AppServiceAPI.sync();
    };

    $scope.goToPrev = function () {
      $state.go('app.air1');
    };

    $ionicPlatform.ready(function () {
      AppServiceAPI.select(3).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid;
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
        AppServiceAPI.update($rootScope.user, index, item, 10, 3)
      });
      AppServiceAPI.sync();
      $state.go('app.food');
    };
  });
