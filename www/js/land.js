angular.module('starter.land', [])

  .controller('landCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                    AppServiceAPI, $ionicPlatform, $sce, $ionicPopup, $ionicModal, ValidationService) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.land = {};

    $scope.toolTips = {
      'Q1A': "Ideally, total green landscaped area on-ground available in" +
             " school should be 30 per cent of total site area (in " +
             "square meters). Also, total green area on exposed roof " +
             "&amp; terraces should be 50 per cent of the total area" +
             " of exposed roof &amp; terrace (in square meters).",
      'Q4L12': "Please give number of floors only."
    };

    // function of displaying tooltip
    $scope.showToolTip = function (qNo) {
      var toolTip = $scope.toolTips[qNo];
      $scope.showPopup('Tool Tip', toolTip);
    };

    $scope.progress = 40;

    $scope.readMore = {};

    $scope.toggleReadMore = function (n) {
      $scope.readMore[n] = 1 - ($scope.readMore[n] || 0);
    };

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' +
      'todM6wToHHQ?enablejsapi=1');

    $scope.iFrameID = 'landFrame';

    // video modal for tutorial video
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      console.log("openModal");
      $scope.modal.show()
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
      var iframe = document.getElementById("landFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*')
      console.log('video paused');
    };

    // validation functions start
    $scope.validVal = function (questionID) {
      if ($scope.land[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return parseFloat($scope.land[questionID]) || 0;
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

    $scope.updateQ4 = function () {
      var qIDs = ['Q4L2', 'Q4L3', 'Q4L4', 'Q4L6', 'Q4L7', 'Q4L8'];
      var val;
      var totVal = 0;
      var totValL5 = 0;
      for (var i = 0; i < qIDs.length; i++) {
        val = $scope.getAbsVal(qIDs[i]);
        totVal += val;
        // sum of b1 and b2
        if (i === 1 || i === 2) {
          totValL5 += val;
        }
      }
      $scope.land.Q4L1 = totVal;
      $scope.land.Q4L5 = totValL5;
    };

    $scope.updateQ5 = function (n) {
      var qIDs = [1, 2, 3].map(function (x) {
        return 'Q5L' + n + 'S' + x;
      });
      var totVal = 0;
      for (var i = 0; i < qIDs.length - 1; i++) {
        totVal += $scope.getAbsVal(qIDs[i]);
      }
      $scope.land[qIDs[2]] = totVal;
    };

    $scope.validNext = function () {
      var validate = $scope.validateTeacher('L') && $scope.validateStudent('L');
      $rootScope.sectionsCompleted.land = validate;
      return validate;
    };
    // validation functions end

    // function for getting answer values from other sections
    $scope.getAnswer = function (questionID) {
      return AppServiceAPI.selectQuestion(questionID).then(function (res) {
        if (res.rows.length > 0) {
          var row = res.rows.item(0);
          return row.answer;
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
      });
    };

    $scope.saveData = function () {
      ValidationService.saveData($scope.land, 5).then(function () {
        AppServiceAPI.sync(5).then(function () {
          ValidationService.logoutUser();
        });
      });
    };

    $scope.goToPrev = function () {
      ValidationService.saveData($scope.land, 5).then(function () {
        $state.go('app.food');
      });
    };

    $ionicPlatform.ready(function () {

      ValidationService.getData(5).then(function (res) {
        for (var qID in res) {
          $scope.land[qID] = res[qID];
        }
      });
    });

    $scope.quiz2 = function (land) {
      ValidationService.quiz2(land, 5);
      AppServiceAPI.sync(5);
      $state.go('app.water');
    };
  });
