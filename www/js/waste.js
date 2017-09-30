angular.module('starter.waste', [])

  .controller('wasteCtrl', function ($scope, $state, $window, $stateParams, AppServiceAPI, $rootScope,
                                     $ionicPlatform, $ionicModal, $sce, $ionicPopup, ValidationService,
                                     $ionicLoading, UploadService) {

    'use strict';

    //File Upload Code Starts Here
    $scope.images = {
      Segregation_Source_Classrooms: [],
      Audit_Team_Weighing_Solid_Waste: [],
      Composting_Pit: [],
      Recycling_Machine: [],
      'E-Waste': [],
      'E-waste_authorised_dealer': [],
      Housekeeping: [],
      Buring_Waste: [],
      Waste_Policy: [],
      Water_Policy: [],
      School_Initiatives: [],
      Audit_Team_Doing_Survey_Waste: []
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

    $scope.waste = {};

    $scope.other = {};

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
      },

      wasteGeneratedOrRecycled: {
        1: {
          task: 'Task 3: How much waste does your school generate?',
          readLess: 'There is nothing',
          readMore: 'known as waste – waste is just a misplaced resource. Therefore ideally,' +
          ' a school should not generate any waste. But there is waste, as most human activities' +
          ' result in some waste. Wastes are of many types such as bio-degradable and non-biodegradable,' +
          ' hazardous and non-hazardous, etc. Each of these categories has to be handled carefully.' +
          ' Please wear gloves, masks while handling waste. E-waste should be handled by adults.<br/>' +
          ' <b>To Collect Data:</b> Arrange a meeting between the student audit team and the key people' +
          ' in your house-keeping staff. Let the students describe the project with them. Segregate all ' +
          'waste, put them in small packs and weigh using a spring balance. If the practice of segregation' +
          ' of waste has already been adopted, then it will be easy to find out the amount of waste paper' +
          ' and other common trash. For Silt and Soil – Put a small mesh wire under the dustbin. And find' +
          ' the amount collected beneath. Or pour the waste on a mesh, so that the dust and silt passes' +
          ' through and then weigh the silt.',
          ques: '3. Determine the quantity of waste generated in your school.(in kilogram)',
          genOrRec: {
            c1: 'GENERATE',
            c2: 'generated'
          },
          qNum: 6,
          uploadName: 'Audit_Team_Weighing_Solid_Waste',
          uploadText: ['Picture of audit team weighing solid waste',
            'Picture of types of solid waste generated']
        },
        2: {
          task: 'Task 4: How much waste does your school treat/recycle?',
          readLess: '<b>To Collect Data:</b> ',
          readMore: 'Find out whether your school has any waste recycling facility like compost pit,' +
          ' paper recycling machine, etc. If you have a paper recycling unit, the person in charge will' +
          ' definitely be recording the input and output from the unit. If the school is selling newspapers' +
          ' or bottles or metal scrap to the local waste dealer (kabadiwala), that can also be included in' +
          ' the quantity recycled.',
          ques: '4(a) Please provide quantity of which is applicable.',
          genOrRec: {
            c1: 'REUSE/RECYCLE',
            c2: 'reused/recycled'
          },
          qNum: 8,
          uploadName: 'Composting_Pit',
          uploadText: ['Pictures of recycling units - composting pit']
        }
      },

      wasteTypes: {
        1: {
          alpha: 'A',
          len: 4,
          name: 'A. Biodegradable/Wet Waste',
          subTypes: {
            1: 'Garden/horticulture waste',
            2: 'Kitchen waste—Raw',
            3: 'Kitchen waste—Cooked',
            4: 'Wet waste from classrooms etc.'
          }
        },

        2: {
          alpha: 'B',
          len: 7,
          name: 'B. Dry/recyclable waste',
          subTypes: {
            1: 'Plastic',
            2: 'Paper',
            3: 'Wood or classroom furniture',
            4: 'Glass',
            5: 'Metal',
            6: 'Thermocol',
            7: 'Tetra Packs'
          }
        },

        3: {
          alpha: 'C',
          len: 2,
          name: 'C. Domestic hazardous waste',
          subTypes: {
            1: 'Hazardous and toxic waste(Paints, lab waste, etc)',
            2: 'Oil from DG sets'
          }
        },

        4: {
          alpha: 'D',
          len: 1,
          name: 'D. E-Waste',
          subTypes: {
            1: 'E-waste'
          }
        },

        5: {
          alpha: 'E',
          len: 1,
          name: 'E. Biomedical waste',
          subTypes: {
            1: 'Biomedical waste such as syringes, band–aids, expired medicines etc.'
          }
        }
      },

      wasteTypesPrimary: {
        1: 'Garden waste/Horticulture waste',
        2: 'Kitchen waste',
        3: 'Paper',
        4: 'Plastic',
        5: 'Wood, glass, metal, classroom furniture',
        6: 'E-waste',
        7: 'Biomedical waste',
        8: 'Sanitary waste',
        9: 'Construction and Demolition(C&D) waste',
        10: 'Hazardous waste'
      },

      compostingMethodologies: {
        1: 'Natural composting without added microbes',
        2: 'Vermi composting',
        3: 'Mechanical composting (with electricity/ machines)'
      },

      purposeOfCompost: {
        1: 'For horticultural purposes',
        2: 'For school garden',
        3: 'For sale',
        4: 'For charity'
      },

      wasteCategories: {
        1: {
          name: 'Paper',
          isReadMore: true,
          readMore: '(e.g. used notebooks, used examination paper, subscription newspaper and magazines)'
        },
        2: {
          name: 'Plastic',
          isReadMore: true,
          readMore: '(e.g. plastic bottles)'
        },
        3: {
          name: 'Horticultural waste',
          isReadMore: false
        },
        4: {
          name: 'E-waste',
          isReadMore: true,
          readMore: '(e.g. broken, unusable computers)'
        },
        5: {
          name: 'Hazardous waste',
          isReadMore: true,
          readMore: '(e.g. diesel fuel, battery)'
        },
        6: {
          name: 'Wood, glass, metal',
          isReadMore: false
        },
        7: {
          name: 'Biomedical waste',
          isReadMore: true,
          readMore: '(e.g. waste from the nurse’s room in school, such' +
            ' as band-aids, syringes)'
        },
        8: {
          name: 'Others',
          isReadMore: false
        }
      },

      appliances: {
        1: 'TVs',
        2: 'VCR or DVD players',
        3: 'Refrigerators and freezers',
        4: 'Washing machines',
        5: 'Air conditioners',
        6: 'Heaters',
        7: 'Microwaves',
        8: 'Ovens',
        9: 'Toasters',
        10: 'Electric kettles',
        11: 'Personal computers',
        12: 'Laptop computers',
        13: 'Notebook computers',
        14: 'Notepad computers',
        15: 'Printers',
        16: 'Copying equipment(photocopiers)',
        17: 'Projectors',
        18: 'Whiteboards',
        19: 'Typewriters',
        20: 'Calculators',
        21: 'Fax machines',
        22: 'Telex',
        23: 'Telephones',
        24: 'Pay telephones',
        25: 'Mobiles',
        26: 'Answering systems',
        27: 'Induction cookers',
        28: 'Geysers/water heaters'
      },

      wasteCollectors: {
        1: 'Kabadiwalla/ Scrapdealer',
        2: 'Taken back by manufacturer/vendor',
        3: 'Authorized dealer',
        4: 'Authorized dismantler'
      },

      wasteDestination: {
        1: 'Open dumping',
        2: 'Designated dumping site (Dhalao)',
        3: 'Landfill site',
        4: "Don't know"
      },

      whereToBurn: {
        1: 'Inside the school',
        2: 'Outside the school'
      },

      wasteBurnType: {
        1: 'Horticultural',
        2: 'Plastic',
        3: 'Tyres',
        4: 'Paper'
      },

      awarenessDrives: {
        1: 'As part of the curriculum',
        2: 'As part of extracurricular activities such as guest lectures',
        3: 'By the showcasing of posters and stickers'
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
      'Q2': "Students will have to count the number of waste disposal points in" +
      " the school as, for instance, one dustbin, two dustbins or more. If there" +
      " are no dustbins, please say zero (o)",
      'Q5W3': 'common area includes reception, corridors etc.',
      'Q3': 'Please note that some categories of waste may happen daily, weekly,' +
      ' monthly, bi-annually or annually. Please convert these to monthly ' +
      'average before entering.',
      'Q4': 'In kg/day or kg/month, you can check daily waste generation and ' +
      'then find out how much of it goes for recycling or treatment.',
      'Q8': 'Please give the numbers of items in working condition and those ' +
      'that are not. Kindly check the store room of the school and find out ' +
      'equipment that are lying unused because of maintenance and operation ' +
      'issues, also count the number of equipments under working condition. ' +
      'This will help to inventorise electronic waste.'
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
    $scope.$on('modal.hidden', function () {
      $scope.pauseVideo();
    });

    $scope.pauseVideo = function () {
      var iframe = document.getElementById("wasteFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
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

    $scope.loadPageData = function () {
      $ionicPlatform.ready().then(function (res) {
        $scope.getAnswer('Q4G4S3').then(function (res) {
          console.log('Total Population: ' + res);
          $scope.other.Q4G4S3 = parseInt(res);
        }, function (err) {
          console.error('Error in population: ' + JSON.stringify(err));
        });
      }, function (err) {
        console.error('Error in device ready: ' + JSON.stringify(err));
      });
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

    $scope.updateQ6AndQ8 = function (qNum, i, j) {
      var qID, val;
      var total = 0.0;
      for (var k = 1; k <= j; k++) {
        qID = 'Q' + qNum + 'Wa' + i + 'S' + k;
        val = parseFloat($scope.waste[qID]) || 0;
        if (qNum === 8) {
          var qID2 =  'Q' + 6 + 'Wa' + i + 'S' + k;
          var val2 = parseFloat($scope.waste[qID2]) || 0;
          if (!val2){
            val = 0;
            $scope.waste[qID] = 0;
            $scope.showPopup('Alert', 'First enter the value in waste generated question above');
            break;
          }
          else if (val > val2) {
            val = 0;
            $scope.waste[qID] = 0;
            $scope.showPopup('Alert', "Recycled waste can't be greater than generated waste i.e. " + val2);
            break;
          }
        }
        if (val) {
          total += val;
        }
      }
      var perCapitaWaste = total / 30.0 / $scope.other.Q4G4S3;
      if (j > 1) {
        $scope.perCapitaOffset = 2;
        $scope.waste['Q' + qNum + 'Wa' + i + 'S' + k] = total;

        $scope.waste['Q' + qNum + 'Wa' + i + 'S' + (k + 1)] = perCapitaWaste.toFixed(2);
      }
      else {
        $scope.perCapitaOffset = 1;
        $scope.waste['Q' + qNum + 'Wa' + i + 'S' + k] = perCapitaWaste.toFixed(2);
      }
    };

    $scope.updateQ12 = function (i, j) {
      var qID, val;
      if (j === 1) {
        qID = 'Q12Wa' + i + 'S1';
        val = parseInt($scope.waste[qID]) || 0;
        if (val && val > 5) {
          val = 5;
          $scope.waste[qID] = val;
          $scope.showPopup('Alert', "BEE rating can't be greater than 5");
        }
      }
      else {
        var total = 0;
        for (var k = 2; k < 4; k++) {
          qID = 'Q12Wa' + i + 'S' + k;
          // console.log('qID: ' + qID);
          val = parseInt($scope.waste[qID]) || 0;
          // console.log('Number of appliances: ' + val);
          if (val) {
            total += val;
          }
        }
        $scope.waste['Q12Wa' + i + 'S4'] = total;
      }
    };

    // validation functions start
    $scope.validVal = function (questionID) {
      if ($scope.waste[questionID]) {
        return true;
      }
      return false;
    };

    $scope.validateTeacher = function (section) {
      var qFirstName, qLastName, qEmail, isValid;
      for (var i = 1; i <= 3; i++) {
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
      return validate;
    };
    // validation functions end

    $scope.saveData = function () {
      ValidationService.saveData($scope.waste, 7).then(function () {
        AppServiceAPI.sync(7).then(function () {
          ValidationService.logoutUser();
        });
      });
    };

    $scope.goToPrev = function () {
      ValidationService.saveData($scope.waste, 7).then(function () {
        AppServiceAPI.sync(7).then(function () {
          $state.go('app.water', {}, {'reload': true});
        });
      });
    };

    $ionicPlatform.ready(function () {
      $scope.getWebImages();

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
      AppServiceAPI.updateUserCompleteness($rootScope.user, 100)
        .then(function (res) {
          console.log('Upldated completeness in profile: ' + JSON.stringify(res));
          AppServiceAPI.getUserCompleteness($rootScope.user).then(function (res) {
            console.log("User completeness from db: " + JSON.stringify(res));
            if (res.rows.length > 0) {
              var completeness_data = res.rows.item(0);
              $rootScope.completeness = completeness_data.completeness;
              console.log('User completeness set to : ' + JSON.stringify($rootScope.completeness));
              console.log('User webProgress is: ' + JSON.stringify($rootScope.webProgress));
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
      ValidationService.quiz2(waste, 7).then(function () {
        AppServiceAPI.sync(7).then(function () {
          $state.go('app.feedback');
        });
      });
    };
  });
