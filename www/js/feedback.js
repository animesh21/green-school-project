angular.module('starter.feedback', [])

  .controller(
    'feedbackCtrl',
    function ($scope, $state, $window, $stateParams, ValidationService,
              AppServiceAPI, $ionicPlatform, $ionicPopup) {
      $(document).ready(function () {
        $('.progressBarIndicator').css("background", "red");
      });

      $scope.feedback = {};

      $scope.data = {
        yesNo: {
          1: ['Y', 'Yes'],
          2: ['N', 'No']
        },

        ratings: {
          1: 'Good',
          2: 'Average',
          3: 'Bad'
        },

        Q6Types: {
          1: 'Content',
          2: 'Distribution of time among tasks',
          3: 'Sequencing of questions',
          4: 'Sequencing of questions'
        },

        howManyTimes: {
          1: 'Never',
          2: 'Once',
          3: 'Twice',
          4: 'More than twice'
        },

        uploadedDocs: {
          1: 'PUC certificates of not more than five buses',
          2: 'Picture of Air Quality Monitoring equipment of school',
          3: 'Fuel Bill',
          4: 'Picture of School owned vehicles',
          5: 'Electricity Bill',
          6: 'Picture of 5 star appliances used by school',
          7: 'Picture of Renewable sources of Energy',
          8: 'Picture of Mid-day meal being served',
          9: 'Photographs of lunch boxes',
          10: 'Picture of Canteen selling UPPF',
          11: 'Traditional food items sold in canteen',
          12: 'Pictures of Events sponsored by UPPF companies',
          13: 'Pictures of Green Cover',
          14: 'Pictures of landscaped area',
          15: 'Building construction plan',
          16: 'Pictures of bio-pesticides',
          17: 'Pictures of dustbins in classroom showing segregation at source',
          18: 'Pictures of playground with more than two dustbins',
          19: 'Picture of audit team weighing solid waste',
          20: 'Picture of types of solid waste generated',
          21: 'Pictures of recycling units - composting pit, paper recycling machine,' +
          ' selling paper to kabadiwala, recyclers, etc',
          22: 'Pictures of housekeeping staff disposing different types of solid waste',
          23: 'Pictures of burning waste',
          24: 'Pictures of Electronic items used by school and storage of' +
          ' non-working electronic items',
          25: 'Certificate of disposing e-waste from authorised dealer/dismantler',
          26: 'Waste Policy',
          27: 'Pictures of various school initiatives e.g. rally, debate, street play,' +
          ' art competition, etc',
          28: 'Pictures of respective audit teams doing survey'
        }
      };

      $scope.progress = 100;

      $scope.getList = function (n) {
        var arr = [];
        for (var i = 1; i <= n; i++) {
          arr.push(i);
        }
        return arr;
      };

      $scope.updateQ11 = function () {
        $scope.feedback.Q1Fe11S1 = '';
      };

      $scope.validNext = function () {
        return true;
      };

      $scope.saveData = function () {
        ValidationService.saveData($scope.feedback, 8).then(function () {
          AppServiceAPI.sync(8).then(function () {
            ValidationService.logoutUser();
          });
        });

      };

      $scope.goToPrev = function () {
        ValidationService.saveData($scope.feedback, 8).then(function () {
          AppServiceAPI.sync(8).then(function () {
            $state.go('app.waste');
          });
        });
      };

      $ionicPlatform.ready(function () {

        ValidationService.getData(8).then(function (res) {
          for (var qID in res) {
            $scope.feedback[qID] = res[qID];
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

      $scope.quiz2 = function (feedback) {
        ValidationService.quiz2(feedback, 8).then(function () {
          AppServiceAPI.sync(8).then(function () {
            $state.go('app.home');
          });
        });
      };

    });
