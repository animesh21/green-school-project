angular.module('starter.water', [])

  .controller('waterCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                     AppServiceAPI, $ionicPlatform, $ionicModal, $sce, $ionicPopup,
                                     ValidationService, $ionicLoading, UploadService) {

    'use strict';

    //File Upload Code Starts Here
    $scope.images = {
      Task_4_Supporting_docs: [],
      Water_Treatment_Process: [],
      Flow_Chart_Hand_Drwan: [],
      Supporting_Document_Water: []
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

    $scope.water = {};

    $scope.data = {

      typesOfConsumption: {
        1: 'Drinking',
        2: 'Toilet flushing',
        3: 'Personal cleaning',
        4: 'Washing clothes',
        5: 'Cooking',
        6: 'Cleaning Utensils',
        7: 'Washing Vegetables',
        8: 'Mopping Floors',
        9: 'Gardening',
        10: 'Others'
      },

      waterSupplier: {
        1: 'Municipality',
        2: 'Panchayat',
        3: 'Public Health Engineering Department (PHED)',
        4: 'Private Supplier',
        5: 'School’s own supply (bore well, rainwater harvesting facility, etc)'
      },

      catchmentAreas: {
        1: 'Rooftop',
        2: 'Paved',
        3: 'Unpaved',
        4: 'Rooftop + paved',
        5: 'Paved + unpaved',
        6: 'Rooftop + unpaved',
        7: 'Rooftop + paved + unpaved'
      },

      howHarvested: {
        1: 'By storing',
        2: 'By recharging groundwater',
        3: 'Combination of both'
      },

      rainWaterUses: {
        1: 'Drinking',
        2: 'Gardening',
        3: 'Mopping',
        4: 'Toilets',
        5: 'Washing Vehicles',
        6: 'Kitchen (Cooking / Washing vegetables and utensils)',
        7: 'Shower, Brushing teeth, Bathing, Hand washing',
        8: 'Swimming Pool',
        9: 'Fire Fighting',
        10: 'Desert Coolers'
      },

      locationOfTanks: {
        1: 'Underground',
        2: 'Overground',
        3: 'Semi-underground',
        4: 'Overground + semi-underground',
        5: 'Underground + semi-underground',
        6: 'Underground + overground + semi-underground'
      },

      materialOptions: {
        1: 'PVC',
        2: 'RCC',
        3: 'Brick',
        4: 'Combination of PVC, RCC and Brick'
      },

      rechargeStructuresPrimary: {
        1: 'Recharge well',
        2: 'Recharge trenches',
        3: 'Recharge through ponds/water bodies'
      },

      rechargeStructures: {
        1: 'Percolation pit/tank',
        2: 'Recharge through abandoned dug well',
        3: 'Recharge through abandoned tube well/bore well',
        4: 'Recharge pits',
        5: 'Recharge trenches',
        6: 'Recharge through ponds/water bodies',
        7: 'Soak pit'
      },

      storageRechargeRatio: {
        1: 'Storage = Recharge',
        2: 'Storage > Recharge',
        3: 'Recharge > Storage',
        4: 'Only Recharge',
        5: 'Only Storage'
      },

      rainWaterStructures: {
        1: 'Conduits',
        2: 'Gutters',
        3: 'Filter unit',
        4: 'First flush',
        5: 'Storage tank',
        6: 'Collection sump',
        7: 'Pump unit',
        8: 'Recharge structure'
      },

      filterUnit: {
        1: 'Before storage tank',
        2: 'Before recharge system',
        3: 'Before both storage tank and recharge system',
        4: 'We do not use filters'
      },

      typeOfFilter: {
        1: 'Sand gravel filter',
        2: 'Charcoal filter',
        3: 'Readymade on line filter',
        4: 'Chemical used'
      },

      catchmentClean: {
        1: 'Pre-monsoon',
        2: 'Post-monsoon',
        3: 'Does not follow any such pattern'
      },

      groundWaterTrend: {
        1: 'If there was a decrease, please specify',
        2: 'If there was an increase, please specify',
        3: 'No change'
      },

      groundWaterLevelChange: {
        1: 'Less than a metre annually',
        2: '1-5 metres annually',
        3: 'More than 5 metres annually'
      },

      hygienePractices: {
        1: 'Does the school have separate toilets for males and females?',
        2: 'Are there sufficient toilets for women in your school?',
        3: 'Are there sufficient toilets for men in your school?',
        4: 'Are the toilets accessible and safe to use for children?',
        5: 'Are the toilets accessible and safe to use for differently' +
           ' abled children?',
        6: 'Are the toilets accessible and safe to use for differently' +
           ' abled staff (teaching and non-teaching)?',
        7: 'Are the toilets situated in the right location in terms of' +
           ' privacy and safety?',
        8: 'Is there sufficient light during day time?'
      },

      hygienePracticesPrimary: {
        9: 'Do you use soap to wash hands before and after lunch?',
        10: 'Do you use soap to wash hands before and after using the toilet?'
      },

      numToilets: {
        1: 'Girls',
        2: 'Boys',
        3: 'Common'
      },

      toiletCleanFreq: {
        1: 'Once a day',
        2: 'Twice a day',
        3: 'More than twice a day'
      },

      howDoesReuse: {
        1: 'Gardening',
        2: 'Flushing',
        3: 'Recharge Ground Water'
      },

      fateOfWasteWater: {
        1: 'Wastewater flows directly to the drains',
        2: 'Used for groundwater recharge',
        3: 'Used for gardening and horticulture'
      }

    };

    $scope.getList = function (n) {
      var arr = [];
      for(var i = 1; i <= n; i++) {
        arr.push(i);
      }
      return arr;
    };

    $scope.toolTips = {

      'Q1': "The school will use a glass (250 ml) for drinking during the" +
            " audit period; they should know the volume of flush tank " +
            "(if they have a flush) or volume of bucket they are using " +
            "for washing clothes, etc. To measure total water used in" +
            " Kitchen, first measure the quantity of water (in litres) " +
            "that could be used, before commencing the activity. Example:" +
            " Use buckets, utensils, jars of known volume. Please monitor" +
            " over a period of 15 working days.",

      'Q4W9': "To measure total water used in Gardening, first find " +
              "out what is the method of watering garden.<ul><li>1. If " +
              "water from water storage tank is used with hose pipes" +
              " then measure the capacity of storage tank. Fill the " +
              "storage tank before watering session. After watering " +
              "the plants, measure the water left in the tank. " +
              "Subtract the quantity of water left in the tank by " +
              "total storage capacity of the tank.</li><li>2. If garden" +
              " is watered manually with buckets then measure the " +
              "capacity of the bucket and multiply by number of times" +
              " the bucket is filled to water plants.</li><li>3. If " +
              "sprinkler irrigation is used to water garden, then " +
              "measure the quantity of water released by the " +
              "sprinklers and multiply it by the time the sprinkler" +
              " system works.</li>The observations should be carried" +
              " out when more than 90 per cent of school strength is" +
              " present.",

      'Q5': "Please tick 'Yes' if your school follows the following " +
            "practices: Do upload images/jpegs, where relevant",

      'Q7': "Toilets for women include wash basin(s) and water closet(s);" +
            " Toilets for men include wash basin(s) and water closet(s)," +
            " and may or may not include urinals."
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

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/Wh2INoQoaMw?enablejsapi=1');

    $scope.iFrameID = 'waterFrame';

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
      var iframe = document.getElementById("waterFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*')
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

    $scope.validVal = function (questionID) {
      if ($scope.water[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return parseFloat($scope.water[questionID]) || 0;
    };

    $scope.updateQ2 = function () {
      var val = $scope.water.Q5W3;
      if (val) {
        $scope.water.Q8W2 = 'Y';
      }
    };

    $scope.updateQ4 = function () {
      var qIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (x) {
        return 'Q4W' + x;
      });
      var totVal = 0;
      for (var i = 0; i < qIDs.length - 1; i++) {
        totVal += $scope.getAbsVal(qIDs[i]);
      }
      $scope.water[qIDs[10]] = totVal;
    };

    $scope.updateQ6 = function () {
      var val1 = $scope.water.Q5W3;
      var val2 = $scope.water.Q8W2;
      if (val1 && val2 === 'N') {
        $scope.water.Q8W2 = 'Y';
        $scope.showPopup('Alert', "You've selected 'Rain water' in Q2 above.");
      }
      else if (!val1 && val2 === 'Y') {
        $scope.water.Q5W3 = true;
      }
    };

    $scope.updateQ13 = function () {
      var qIDs = ['Q13W1S1', 'Q13W1S2', 'Q13W1S3', 'Q13W1S4'];
      var qID, val, total = 0;
      for (var i = 0; i < (qIDs.length - 1); i++) {
        qID = qIDs[i];
        val = parseInt($scope.water[qID]) || 0;
        if (val) {
          total += val;
        }
      }

      $scope.water[qIDs[3]] = total;
    };

    $scope.updateQ20 = function () {
      var qID1 = 'Q20W1';
      var qID2, val1;
      val1 = $scope.water[qID1];
      if (val1) {
        if (val1 === 'Y') {
          qID2 = 'Q20W3';
        }
        else if (val1 === 'N') {
          qID2 = 'Q20W2';
        }
        $scope.water[qID2] = null;
      }
    };

    $scope.validNext = function () {
      var validate = $scope.validateTeacher('W') && $scope.validateStudent('W');
      return validate;
    };
    // validation functions end

    $scope.saveData = function () {
      ValidationService.saveData($scope.water, 6).then(function () {
        AppServiceAPI.sync(6).then(function () {
          ValidationService.logoutUser();
        });
      });
    };

    $scope.goToPrev = function () {
      ValidationService.saveData($scope.water, 6).then(function () {
        AppServiceAPI.sync(6).then(function () {
          $state.go('app.land');
        });
      });
    };

    $ionicPlatform.ready(function () {

      $scope.getWebImages();

      ValidationService.getData(6).then(function (res) {
        for (var qID in res) {
          $scope.water[qID] = res[qID];
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

    $scope.quiz2 = function (water) {
      AppServiceAPI.updateUserCompleteness($rootScope.user, 75)
        .then(function (res) {
          console.log('Upldated completeness in profile: ' + JSON.stringify(res));
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
      ValidationService.quiz2(water, 6).then(function () {
        AppServiceAPI.sync(6).then(function () {
          $state.go('app.waste');
        });
      });
    };
    // $window.location.reload(true);

  });
