angular.module('starter.air', [])

  .controller('air1Ctrl', function ($scope, $rootScope, $state, $window, $stateParams, AppServiceAPI, $ionicModal, $ionicPlatform, $ionicPopup, $sce) {

    $scope.air = {};

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
    $scope.$on('modal.hidden', function() {
      $scope.pauseVideo();
    });

    $scope.pauseVideo = function () {
      var iframe = document.getElementById("airFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*');
      console.log('video paused');
    };

    // validation functions
    $scope.validVal = function (questionID) {
      if ($scope.air[questionID]) {
        return true;
      }
      return false;
    };

    $scope.getAbsVal = function (questionID) {
      return $scope.air[questionID] || 0;
    };

    $scope.validateTeacher = function () {
      var teacherName1 = $scope.air.Q1A1S1;
      var teacherName2 = $scope.air.Q1A2S1;
      var teacherName3 = $scope.air.Q1A3S1;

      var teacherEmail1 = $scope.air.Q1A1S2;
      var teacherEmail2 = $scope.air.Q1A2S2;
      var teacherEmail3 = $scope.air.Q1A3S2;

      var teacherDetail1 = teacherName1 && teacherEmail1;
      var teacherDetail2 = teacherName2 && teacherEmail2;
      var teacherDetail3 = teacherName3 && teacherEmail3;

      return teacherDetail1 || teacherDetail2 || teacherDetail3
    };

    $scope.validStaff = function () {
      var staffName1 = $scope.air.Q2A1S1;
      var staffName2 = $scope.air.Q2A2S1;
      var staffName3 = $scope.air.Q2A3S1;
      var staffName4 = $scope.air.Q2A4S1;
      var staffName5 = $scope.air.Q2A5S1;

      var staffEmail1 = $scope.air.Q2A1S2;
      var staffEmail2 = $scope.air.Q2A2S2;
      var staffEmail3 = $scope.air.Q2A3S2;
      var staffEmail4 = $scope.air.Q2A4S2;
      var staffEmail5 = $scope.air.Q2A5S2;

      var staffDetail1 = staffName1 && staffEmail1;
      var staffDetail2 = staffName2 && staffEmail2;
      var staffDetail3 = staffName3 && staffEmail3;
      var staffDetail4 = staffName4 && staffEmail4;
      var staffDetail5 = staffName5 && staffEmail5;

      return staffDetail1 || staffDetail2 || staffDetail3 || staffDetail4 || staffDetail5
    };

    $scope.validateStudent = function () {
      var studentName1 = $scope.air.Q3A1S1;
      var studentName2 = $scope.air.Q3A2S1;
      var studentName3 = $scope.air.Q3A3S1;
      var studentName4 = $scope.air.Q3A4S1;
      var studentName5 = $scope.air.Q3A5S1;
      var studentName6 = $scope.air.Q3A6S1;
      var studentName7 = $scope.air.Q3A7S1;
      var studentName8 = $scope.air.Q3A8S1;
      var studentName9 = $scope.air.Q3A9S1;
      var studentName10 = $scope.air.Q3A10S1;

      var studentEmail1 = $scope.air.Q3A1S2;
      var studentEmail2 = $scope.air.Q3A2S2;
      var studentEmail3 = $scope.air.Q3A3S2;
      var studentEmail4 = $scope.air.Q3A4S2;
      var studentEmail5 = $scope.air.Q3A5S2;
      var studentEmail6 = $scope.air.Q3A5S2;
      var studentEmail7 = $scope.air.Q3A5S2;
      var studentEmail8 = $scope.air.Q3A5S2;
      var studentEmail9 = $scope.air.Q3A5S2;
      var studentEmail10 = $scope.air.Q3A5S2;

      var studentGrade1 = $scope.air.Q3A1S3;
      var studentGrade2 = $scope.air.Q3A2S3;
      var studentGrade3 = $scope.air.Q3A3S3;
      var studentGrade4 = $scope.air.Q3A4S3;
      var studentGrade5 = $scope.air.Q3A5S3;
      var studentGrade6 = $scope.air.Q3A5S3;
      var studentGrade7 = $scope.air.Q3A5S3;
      var studentGrade8 = $scope.air.Q3A5S3;
      var studentGrade9 = $scope.air.Q3A5S3;
      var studentGrade10 = $scope.air.Q3A5S3;

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

    $scope.getQuestionID = function (n1, n2, n3) {
      return 'Q' + n1 + 'A' + n2 + 'S' + n3;
    };

    $scope.Q5Check = function (n1, n2, n3) {

      var qID2 = $scope.getQuestionID(n1, n2, 2);
      var qID3 = $scope.getQuestionID(n1, n2, 3);
      var qID4 = $scope.getQuestionID(n1, n2, 4);
      var totRowArea = $scope.air[qID2];
      var openRowArea = $scope.air[qID3];
      console.log('Inside Q5check: area:' + totRowArea + ', ' + openRowArea)
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
        for (var j = 1; j <= $scope.air['Q4A1']; j++) {
          totColArea[i] = (totColArea[i] || 0) + $scope.getAbsVal($scope.getQuestionID(5, j, i))
        }
      }
      $scope.air['Q5A110S2'] = totColArea[2];
      $scope.air['Q5A110S3'] = totColArea[3];
      $scope.air['Q5A110S4'] = $scope.air['Q5A110S3'] / $scope.air['Q5A110S2'] * 100;
    };

    $scope.updateQ5Rows = function () {
      var numRooms = parseInt($scope.air['Q4A1']);
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

    $scope.validateQ5 = function () {
      for (var i = 1; i <= $scope.air['Q4A1']; i++) {
        if (!$scope.validVal($scope.getQuestionID(5, i, 4))) {
          return false;
        }
      }
      return true;
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

      var numQues = [1, 2, 3, 4];
      var QuesPrefix = 'Q6A2S3';
      var typeTotal = 0;
      for (var i = 0; i < numQues.length; i++) {
        typeTotal += $scope.getAbsVal(QuesPrefix + type + i);
      }
      $scope.air[QuesPrefix + type + '5'] = typeTotal;
    };

    $scope.validNext = function () {
      // return $scope.validateTeacher() && $scope.validateStudent() &&
      return $scope.validVal('Q4A1') && $scope.validateQ5();
    };
    // end validation functions

    $scope.saveData = function (data) {
      angular.forEach(data, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 1);
      });
      AppServiceAPI.sync();
    };

    $scope.goToPrev = function () {
      $state.go('app.energy');
    };

    $scope.toggleReadMore = function (n) {
      console.log('toggling read more');
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

    //$scope.air = $rootScope.data;
    // $scope.select = function(type) {

    //     var query = "SELECT questionid,answer FROM gsp_answers WHERE type = ?";
    //     $cordovaSQLite.execute(db, query, [type]).then(function(res) {
    //     		if(res.rows.length > 0) {
    //                    angular.forEach(res.rows, function(item,index) {
    //                        questionid = res.rows.item(index).questionid
    //                    	$scope.air[questionid] = res.rows.item(index).answer
    //                        console.log($scope.air);
    //                      });
    //                  }
    //                 else{
    //                      console.log("No results found");
    //                  }
    //            },
    //            function (err) {
    //                console.error(err);
    //            });
    //  		};

    //$scope.air = $rootScope.select(2);
    //console.log($scope.air);

    $ionicPlatform.ready(function () {

      AppServiceAPI.select(2).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid;
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
          AppServiceAPI.update($rootScope.user, index, item, 10, 2)
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

    });
  });
