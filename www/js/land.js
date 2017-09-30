angular.module('starter.land', [])

  .controller('landCtrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI,
                                    $ionicPlatform, $sce, $ionicPopup, $ionicModal, ValidationService,
                                    $ionicLoading, UploadService) {

    'use strict';

    //File Upload Code Starts Here
    $scope.images = {
      Green_Cover: []
    };

    $scope.getWebImages = function () {
      var image_keys = Object.keys($scope.images);
      return UploadService.getImages(image_keys).then(function (res) {
        $scope.image_lookup = res;
        return res;
      }, function (err) {
        console.error("Error in image lookup: " + JSON.stringify(err));
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

    $scope.get0List = function (n) {
      var arr = [];
      for(var i = 0; i < n; i++) {
        arr.push(i);
      }
      return arr;
    };

    $scope.takepic = function (data_id) {
      var num_images = $scope.images[data_id].length;
      if (num_images >= 3) {
        $scope.showPopup('Alert', "Can't upload more than 3 images in one question from mobile");
      }
      else {
        $ionicPlatform.ready().then(function () {
          UploadService.takePic().then(function (imageData) {
            // var imageStr = "data:image/jpeg;base64," + imageData;
            // console.log('Image data: ' + imageStr);
            $scope.images[data_id].push(imageData);
          }, function (err) {
            console.error("Error in getting picture: " + JSON.stringify(err));
          });
        }, function (err) {
          console.error("Error in platform ready: " + JSON.stringify(err));
        });
      }
    };

    $scope.upload = function (data_id) {
      var images = $scope.images[data_id];
      var numImages = images.length;
      if (numImages <= 0) {
        $scope.showPopup('Warning', "Please select an image first");
      }
      else {
        $scope.showLoading('Uploading, please wait');
        for (var i = 0; i < images.length; i++) {
          var image_data = images[i];
          var ques = 'mobile_' + i;
          if (image_data) {
            UploadService.uploadImage(image_data, data_id, ques);
          }
        }
        $scope.hide();
        $scope.showPopup('Success', numImages + " images uploaded successfully");
      }
    };

    $scope.remove = function (data_id) {
      $scope.images[data_id].pop();
    };
    // file upload code ends

    $scope.land = {};

    $scope.data = {
      typesOfArea: {
        1: 'No. of Playgrounds',
        2: 'No. of Kachcha(unpaved) playgrounds with grass',
        3: 'No. of Pucca(paved) playgrounds',
        4: 'No. of constructed buildings - Academic',
        5: 'No. of constructed buildings - Official',
        6: 'No. of floors(does not include ground floor)',
        7: 'Rooftop/Terrace Gardens'
      }
    };

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

    // $scope.progress = $rootScope.completeness;
    $scope.progress = $rootScope.webProgress;

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
      console.log('going previous to food');
      ValidationService.saveData($scope.land, 5).then(function () {
        AppServiceAPI.sync(5).then(function () {
          $state.go('app.food');
        });
      });
    };

    $ionicPlatform.ready(function () {

      $scope.getWebImages();

      ValidationService.getData(5).then(function (res) {
        for (var qID in res) {
          $scope.land[qID] = res[qID];
        }
      });
    });

    $scope.quiz2 = function (land) {
      AppServiceAPI.updateUserCompleteness($rootScope.user, 50)
        .then(function (res) {
          console.log('Upldated completeness in land: ' + JSON.stringify(res));
          AppServiceAPI.getUserCompleteness($rootScope.user).then(function (res) {
            console.log("User completeness from db: " + JSON.stringify(res));
            if (res.rows.length > 0) {
              var completeness_data = res.rows.item(0);
              $rootScope.completeness = completeness_data.completeness;
              console.log('User completeness set to : ' + JSON.stringify($rootScope.completeness));
              if ($rootScope.completeness > $rootScope.webProgress) {
                $rootScope.webProgress = $rootScope.completeness;
              }
            }
          }, function (err) {
            console.error("Can't get completeness: " + JSON.stringify(err));
          });
        }, function (err) {
          console.error('Error in updating completeness: ' + JSON.stringify(err));
        });
      ValidationService.quiz2(land, 5).then(function () {
        AppServiceAPI.sync(5).then(function () {
          $state.go('app.water');
        });
      });
    };
  });
