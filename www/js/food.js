angular.module('starter.food', [])

  .controller('foodCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                    AppServiceAPI, $ionicPlatform, $sce, $ionicModal, $ionicPopup,
                                    ValidationService, UploadService, $ionicLoading) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    //File Upload Code Starts Here
    $scope.images = {
      Mid_Day_Meal: [],
      Lunch_Boxes: [],
      Canteen_Food_Items: [],
      Traditional_Food_Items_In_Canteen: [],
      Audit_Team_doing_Survey: [],
      UPPF: []
    };

    $scope.getWebImages = function () {
      var image_keys = Object.keys($scope.images);
      return UploadService.getImages(image_keys).then(function (res) {
        $scope.image_lookup = res;
        // console.log('Image lookup in air: ' + JSON.stringify($scope.image_lookup));
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

    $scope.food = {};

    $scope.other = {};

    $scope.toolTips = {
      'T2': "Packaged food is any food item which is commercially prepared," +
            " processed for a longer shelf life and is ready to eat and drink.",
      'Q1': "Any place, permanent or temporary, run by school, outsourced to" +
            " vendors, self help groups, shopkeepers to sell products " +
            "during/after/before school timings/duration should be considered.",
      'T3': "Any place, permanent or temporary, run by school, outsourced" +
            " to vendors or self help groups or shopkeepers, to sell " +
            "products during/after/before schools hours should be" +
            " considered. If the space is limited please create the table" +
            " in a word document and upload as attachment. Option to " +
            "upload has been provided at the end of the section.",
      'Q3': "For types and varieties of packaged food is any food item," +
            " please mention each brand and flavour available in your" +
            " school. For example, if Lay’s chips are available, mention" +
            " if it is baked, herbs and onions, original salted, sunkissed" +
            " tomatoes, american style cream onion, etc. (Please note it " +
            "is advisable not to have hawkers, vendors and shops selling" +
            " ultra processed packaged items near the school)",
      'Q4': "Traditional Indian snacks are any food item prepared within" +
            " the school on the same day for immediate consumption. " +
            "Monitor over a period of a month.",
      'Q4A': "If space is limited, please create the table in a word " +
             "document and upload as attachment. Option to upload has" +
             " been provided at the end of the section.",
      'Q5': "Traditional Indian beverages are any drink items prepared" +
            " within the school on the same day for immediate consumption." +
            " Monitor over a period of a month.",
      'Q5A': "If space is limited, please create the table in a word " +
             "document and upload as attachment. Option to upload has" +
             " been provided at the end of the section.",
      'Q6A': "For example, Kitkat chocolate as consolation prize or " +
             "food/discount coupons of Dominos or Pizza hut.",
      'Q7A': "For example, Fanta, small packets of chips or Kurkure, etc.",
      'Q8A': "For example, Complan, Quaker Oats, Cadbury, etc."
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
      14: 'Packaged Juice'
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

    $scope.loadPageData = function () {
      $ionicPlatform.ready(function () {
        // type of school i.e. day boarding, residential etc.
        $scope.getAnswer('Q1S1').then(function (res) {
          console.log('Value of Q1S1: ' + res);
          $scope.other.Q1S1 = parseInt(res);
          if (parseInt(res) >= 3) {
            $scope.food.Q4F1 = 'Y';
          }
        });

        // type of school i.e govt, private etc.
        $scope.getAnswer('Q9G1').then(function (res) {
          console.log('Q9G1: ' + res);
          $scope.other.Q9G1 = parseInt(res);
        });
      });
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

    $scope.checkQ4 = function () {
      console.log('checking Q4');
      if ($scope.food.Q4F1 === 'N' && $scope.other.Q1S1 >= 3) {
        $scope.showPopup('Alert', "You've chosen to be a residential" +
          " school in Profile section, but you're selecting 'No' in Q1.");
      }
    };

    $scope.checkQ5 = function () {
      if ($scope.food.Q5F1 === 'N' && $scope.other.Q9G1 === 1) {
        $scope.showPopup('Alert', "You've chosen to be a government school in" +
          " General section, but you're selecting 'No' in this question.");
      }
    };

    $scope.checkQ5F1 = function () {
      console.log('Response in this ques: ' + $scope.food.Q5F1S1 +
        '\nResponse in General section: ' + $scope.other.Q9G1);
      var val1 = $scope.food.Q5F1S1;  // response in this section
      var val2 = $scope.other.Q9G1;  // response in General section
      if (val1 === 1 && val2 === 3) {
        $scope.showPopup('Alert', "You're a private school but you've chosen government" +
          " scheme in this question.");
      }
      else if (val1 === 2 && val2 === 1) {
        $scope.showPopup('Alert', "You're a government school but you've chosen" +
          " school's initiative in this question.");
      }
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
        if (val === 'Y') {
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
        else if (val === 'N') {
          s1 = $scope.food.Q5F1S1;
          if (s1 === 'N') {
            return true;
          }
          else if(s1 === 'Y') {
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
      if (val === 'N') {
        return true;
      }
      else if (val === 'Y') {
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
      if (val === 'N') {
        return true;
      }
      else if (val === 'Y') {
        var qID2 = 'Q' + n + 'F2';
        return $scope.validVal(qID2);
      }
      else {
        return false;
      }
    };

    $scope.validateQ11 = function () {
      var val = $scope.food.Q11F1;
      if (val === 'N') {
        return true;
      }
      else if (val === 'Y') {
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
      var validate = $scope.validateTeacher('F') && $scope.validateStudent('F') &&
             $scope.validVal('Q4F1') && $scope.validateQ5() &&
             $scope.validateQ7AndQ8(7) && $scope.validateQ7AndQ8(8) &&
             $scope.validateQ9AndQ10(9) && $scope.validateQ9AndQ10(10) &&
             $scope.validateQ11() && $scope.validateQ12() && $scope.validateQ13();
      $rootScope.sectionsCompleted = validate;
      if (validate) {
        return true;
      }
      else {
        return false;
      }
    };
    // end validation functions

    // primary section validations
    $scope.validNextPrimary = function () {
      var validate = $scope.validateTeacher('F') && $scope.validateStudent('F') &&
             $scope.validVal('Q4F1') && $scope.validateQ5() &&
             // $scope.validateQ7AndQ8(7) && $scope.validateQ7AndQ8(8) &&
             $scope.validateQ9AndQ10(9) && $scope.validateQ9AndQ10(10) &&
             $scope.validateQ11() && $scope.validateQ12() && $scope.validateQ13();
      $rootScope.sectionsCompleted = validate;
      if (validate) {
        return true;
      }
      else {
        return false;
      }
    };

    // function for getting answer values from other sections
    $scope.getAnswer = function (questionID) {
      return AppServiceAPI.selectQuestion(questionID).then(function (res) {
        if (res.rows.length > 0) {
          var row = res.rows.item(0);
          return row.answer;
        }
      }, function (err) {
        return err;
        console.error('Error in db: ' + JSON.stringify(err));
      });
    };

    $scope.saveData = function () {
      ValidationService.saveData($scope.food, 4).then(function () {
        AppServiceAPI.sync(4).then(function () {
          ValidationService.logoutUser();
        });
      });
    };

    $scope.goToPrev = function () {
      ValidationService.saveData($scope.food, 4).then(function () {
        AppServiceAPI.sync(4).then(function () {
          $state.go('app.energy');
        });
      });
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

      $scope.getWebImages();

      ValidationService.getData(4).then(function (res) {
        for (var qID in res) {
          $scope.food[qID] = res[qID];
        }
      });
    });

    $scope.quiz2 = function (food) {
      AppServiceAPI.updateUserCompleteness($rootScope.user, 40)
        .then(function (res) {
          console.log('Upldated completeness in food: ' + JSON.stringify(res));
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
      ValidationService.quiz2(food, 4).then(function () {
        AppServiceAPI.sync(4).then(function () {
          $state.go('app.land');
        });
      });
    };
  });
