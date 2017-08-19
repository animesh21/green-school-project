angular.module('starter.waste', [])

  .controller('wasteCtrl', function ($scope, $state, $window, $stateParams, AppServiceAPI, $rootScope,
                                     $ionicPlatform, $ionicModal, $sce, $ionicPopup, ValidationService) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.waste = {};

    $scope.data = {
      yesNo: {
        1: ['Y', 'Yes'],
        2: ['N', 'No']
      },

      whoSegregates: {
        1: 'Students and teachers',
        2: 'Housekeeping (Sweeper)',
        3: 'Gardener',
        4: 'Ragpickers',
        5: 'Other'
      },

      categoriesSegregated: {
        1: 'Two',
        2: 'Three',
        3: 'More than three'
      },

      wasteCollectionPoints: {
        1: 'Classrooms',
        2: 'Playgrounds',
        3: 'Common area',
        4: 'Staffroom',
        5: 'Laboratory',
        6: 'Canteen',
        7: 'Clinic/sick room',
        8: 'Library',
        9: 'Toilets',
        10: 'Others'
      }
    };

    $scope.toolTips = {
      'Q2': "Students will have to count the number of waste disposal points in" +
      " the school as, for instance, one dustbin, two dustbins or more. If there" +
      " are no dustbins, please say zero (o)",
      'Q5W3': 'common area includes reception, corridors etc.'
    };

    // function of displaying tooltip
    $scope.showToolTip = function (qNo) {
      var toolTip = $scope.toolTips[qNo];
      $scope.showPopup('Tool Tip', toolTip);
    };

    $scope.progress = 75;

    $scope.readMore = {};

    $scope.toggleReadMore = function (n) {
      $scope.readMore[n] = 1 - ($scope.readMore[n] || 0);
    };

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/CI-iGmii5Yk?enablejsapi=1');

    $scope.iFrameID = 'wasteFrame';

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
      var iframe = document.getElementById("wasteFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*');
      console.log('video paused');
    };

    $scope.updateQ5 = function (row, column) {
      $scope.updateQ5Row(row);
      $scope.updateQ5Column(column);

      // updating final total cell
      var qIDs = [1, 2, 3, 4, 5].map(function (col) {
        return 'Q5Wa11S' + col;
      });
      var qID, val, total = 0;
      for (var i = 0; i < (qIDs.length - 1); i++) {
        qID = qIDs[i];
        val = $scope.waste[qID] || 0;
        total += parseInt(val);
      }
      $scope.waste[qIDs[4]] = total;
    };

    $scope.updateQ5Row = function (row) {
      var qIDs = [1, 2, 3, 4, 5].map(function (col) {
        return 'Q5Wa' + row + 'S' + col;
      });
      var qID, val, total = 0;
      for (var i = 0; i < (qIDs.length - 1); i++) {
        qID = qIDs[i];
        val = $scope.waste[qID] || 0;
        total += parseInt(val);
      }
      $scope.waste[qIDs[4]] = total;
    };

    $scope.updateQ5Column = function (column) {
      var qIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        .map(function (row) {
          return 'Q5Wa' + row + 'S' + column;
        });
      var qID, val, total = 0;
      for (var i = 0; i < (qIDs.length - 1); i++) {
        qID = qIDs[i];
        val = $scope.waste[qID] || 0;
        total += parseInt(val);
      }
      $scope.waste[qIDs[10]] = total;
    };

    // validation functions start
    $scope.validVal = function (questionID) {
      if ($scope.water[questionID]) {
        return true;
      }
      return false;
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

    $scope.validNext = function () {
      var validate = $scope.validateTeacher('Wa') && $scope.validateStudent('Wa');
      $rootScope.sectionsCompleted.waste = validate;
      return validate;
    };
    // validation functions end

    $scope.saveData = function () {
      ValidationService.saveData($scope.waste, 7);
      AppServiceAPI.sync(7);
    };

    $scope.goToPrev = function () {
      ValidationService.saveData($scope.waste, 7).then(function () {
        $state.go('app.water');
      });
    };

    $ionicPlatform.ready(function () {

      ValidationService.getData(7).then(function (res) {
        for (var qID in res) {
          $scope.waste[qID] = res[qID];
        }
      });
    });

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

    $scope.quiz2 = function (waste) {
      ValidationService.quiz2(waste, 7);
      AppServiceAPI.sync(7);
      $state.go('app.home1');
    };
    // $window.location.reload(true);
  });
