angular.module('starter.energy', [])

  .controller('energyCtrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI,
                                      $ionicPlatform, $sce, $ionicModal, $ionicPopup, ValidationService,
                                      $ionicLoading, UploadService) {

    'use strict';

    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    //File Upload Code Starts Here
    $scope.images = {
      Electricity_Bill: [],
      Fuels_Bills: [],
      Five_Star_Appliances: [],
      Alternative_Source_of_Energy: [],
      Supporting_Document_Energy: []
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

    $scope.energy = {
      'Q7E1S1': 0,
      'Q7E2S1': 0,
      'Q7E3S1': 0,
      'Q7E4S1': 0,
      'Q7E5S1': 0,
      'Q7E6S1': 0,
      'Q7E7S1': 0
    };

    $scope.data = {
      sourcesOfEnergy: {
        1: 'Electricity from the board (kwh)',
        2: 'Electricity from generator (diesel) (litres)',
        3: 'Petrol (litres)',
        4: 'Diesel (litres)',
        5: 'CNG (kg)',
        6: 'Kerosene (litres)',
        7: 'Coal (kg)',
        8: 'Animal waste (kg)',
        9: 'Solar (kwh)',
        10: 'Wind (kWh)',
        11: 'LPG (kg)',
        12: 'Piped Natural Gas (kg)',
        13: 'Biogas (kg)',
        14: 'Others(Specify)',
        16: 'Wood (kg)'
      },
      appliances: {
        2: {name: 'Air Conditioners', unit: 'tons'},
        3: {name: 'Refrigerator', unit: 'litres'},
        4: {name: 'Microwave', unit: 'litres'},
        5: {name: 'Tube Lights', unit: 'watts'},
        6: {name: 'CFL Bulbs', unit: 'watts'},
        7: {name: 'LED Lights', unit: 'watts'},
        8: {name: 'Fans', unit: 'watts'},
        9: {name: 'Incandescent bulbs', unit: 'watts'},
        10: {name: 'Overhead projector(smart classroom)', unit: 'watts'}
      }
    };

    $scope.toolTips = {
      'Q6': "Enter an integer in Type of use field according to the " +
            "following:<br/>1. Lighting<br/> 2. Housekeeping<br/> 3. Cooking " +
            "<br/> 4. Transport <br/> 5. Teaching/ learning aid<br/> 0. If " +
            "your school does not use a particular source of energy, then enter 0."
    };

    // function of displaying tooltip
    $scope.showToolTip = function (qNo) {
      var toolTip = $scope.toolTips[qNo];
      $scope.showPopup('Tool Tip', toolTip);
    };

    // $scope.progress = $rootScope.completeness;
    $scope.progress = $rootScope.webProgress;

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
          var row = res.rows.item(0);
          return row.answer;
        }
      }, function (err) {
        console.error('Error in db: ' + JSON.stringify(err));
        return err;
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
            if (val1 <= 2 && val2 === 'Y'){
              $scope.showPopup('Alert', 'Your choice mismatch with answer given in air section Q3');
              $scope.energy.Q5E1 = 'N';
            }
            else if(val1 > 2 && val2 === 'N'){
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
        2: 44.8, // Generator(Diesel)
        3: 43.93, // Petrol
        4: 44.8, // Diesel
        5: 37.24, // CNG
        6: 43.09, // Kerosene
        7: 20.92, // coal
        8: 13.77, // Animal waste(kg)
        9: 3.6, // Solar
        10: 3.6, // Wind
        11: 45.19, // LPG
        12: 13.77, // Piped Natural Gas
        13: 13.77, // Biogas
        14: 0, // Others
        16: 13.28 // Wood
      };

      // for updating question no. 6
      if (n === 9 || n === 10 || n === 13) {
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
      }

      var conversionFactor = conversionTable[n];
      var qID1 = 'Q6E' + n + 'S1';
      var qID2 = 'Q6E' + n + 'S2';

      var valInMJ = $scope.getAbsVal(qID1) * conversionFactor;
      $scope.energy[qID2] = valInMJ.toFixed(2);

      var totalEnergy = 0;
      var qID;
      angular.forEach(conversionTable, function (value, key) {
        qID = 'Q6E' + key + 'S2';
        totalEnergy += $scope.getAbsVal(qID);
      });
      $scope.energy.Q6E15S2 = totalEnergy.toFixed(2);
    };

    $scope.validateQ6E1 = function () {
      if ($scope.energy.Q4E1 === 'Y') {
        return $scope.validVal('Q6E1S1') && $scope.validVal('Q6E1S3');
      }
      return true;
    };

    $scope.validateQ9 = function () {
      var val = $scope.energy.Q9E1;
      if (val) {
        if (val === 'Y'){
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
        else  if (val === 'N') {
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
        if ($scope.energy.Q9E1 === 'N') {
          $scope.energy.Q9E1 = 'Y';
          $scope.showPopup('Alert', "You've entered value in solar, wind or biogas field in Q3 above");
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

    $scope.updateQ6S3 = function (n, event) {
      var qID = 'Q6E' + n + 'S3';  // question ID of the current input
      var charCode = (event.which) ? event.which : event.keyCode;
      if (!(charCode > 31 && (charCode < 48 || charCode > 53))) {
        var val = $scope.energy[qID];  // value in input box
        // if input size is zero then don't do any further modification
        if (!val) {
          return true;
        }
        // otherwise check for number already present
        var valArr = val.split(',');
        var strVal = String.fromCharCode(charCode);
        var isValidKey = valArr.indexOf(strVal) === -1;
        if (valArr.indexOf(strVal) === -1) {
          val = val + ',';
          $scope.energy[qID] = val;
          return true;
        }
        else {
          event.preventDefault();
        }
      }
      else {
        event.preventDefault();
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
      var validQ6E1 = $scope.validateQ6E1();
      var validQ9 = $scope.validateQ9();
      var validQ10 = $scope.validVal('Q10E1');

      var validate = ($scope.validateTeacher('E') && $scope.validateStudent('E') &&
              validQ4  && validQ5 &&
              validQ9 && validQ10 && validQ6E1);
      if (validate) {
        return true;
      }
      else {
        return false;
      }
    };
    // validation functions end

    // Primary validation functions
    $scope.validateQ6P = function () {
      var arr = [1, 2, 3, 4, 5, 6, 7, 16, 8, 9, 10, 11, 12, 13];
      var qID, val;
      for (var i = 0; i < arr.length; i++) {
        qID = 'Q6E' + arr[i];
        if(!$scope.validVal(qID)) {
          // console.log('Q6 not valid');
          return false;
        }
      }
      // console.log('Q6 valid in primary');
      return true;
    };

    $scope.validNextPrimary = function () {
      var validQ4 = $scope.validVal('Q4E1');
      var validQ5 = $scope.validVal('Q5E1');
      var validQ6EP = $scope.validateQ6P();
      // var validQ9 = $scope.validateQ9();

      var validate = ($scope.validateTeacher('E') && $scope.validateStudent('E') &&
              validQ4  && validQ5 && validQ6EP);
      if (validate) {
        return true;
      }
      else {
        return false;
      }
    };

    $scope.loadPageData = function () {
      console.log('loading energy page data');
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

    $scope.saveData = function () {
      ValidationService.saveData($scope.energy, 3).then(function () {
        AppServiceAPI.sync(3).then(function () {
          ValidationService.logoutUser();
        });
      });
    };

    $scope.goToPrev = function () {
      ValidationService.saveData($scope.energy, 3).then(function () {
        AppServiceAPI.sync(3).then(function () {
          console.log('going to air page');
          $state.go('app.air1');
        });
      });
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
      $scope.getWebImages();
      ValidationService.getData(3).then(function (res) {
        for (var qID in res) {
          $scope.energy[qID] = res[qID];
        }
      });
    });

    $scope.quiz2 = function (energy) {
      AppServiceAPI.updateUserCompleteness($rootScope.user, 30)
        .then(function (res) {
          console.log('Upldated completeness in energy: ' + JSON.stringify(res));
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
      ValidationService.quiz2(energy, 3).then(function () {
        AppServiceAPI.sync(3).then(function () {
          $state.go('app.food');
        }, function (err) {
          console.error("Can't save to api: " + JSON.stringify(err));
        }, function (err) {
          console.error('Error in saving to db: ' + JSON.stringify(err));
        });
      });
    };

  });
