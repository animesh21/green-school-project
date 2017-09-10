angular.module('starter.validation', [])
  .factory('ValidationService', function ($ionicLoading, $ionicPopup, $q, $rootScope,
                                          AppServiceAPI, $state, $http) {

    var showPopup = function (title, message) {
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

    var showLoading = function (message) {
      $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner><p>' +
                  message + '</p>'
      });
    };

    var hide = function () {
      $ionicLoading.hide();
    };

    return {
      required_val: function () {
        return true;
      },

      validateTeacher: function (section) {
        var qNameID, qEmailID;
        for (var i = 1; i <= 3; i++) {
          qNameID = 'Q1L' + i + 'S1';
          qEmailID = 'Q1L' + i + 'S2';
        }
        return true;
      },

      quiz2: function (answers, type) {
        var promises = [];
        showLoading('Please wait');
        angular.forEach(answers, function (item, index) {
          var deferred = $q.defer();
          console.log('Q: ' + index + ', A: ' + item + ', User: ' + $rootScope.user);
          AppServiceAPI.update($rootScope.user, index, item, 10, type).then(function (res) {
            deferred.resolve(res);
          }, function (err) {
            hide();
            console.error('Error saving answers');
          });
          promises.push(deferred.promise);
        });
        return $q.all(promises).then(function (res) {
          hide();
          showPopup('Done', "Answers saved successfully");
          return res;
        }, function (err) {
          hide();
          console.error("Couldn't resolve all promises: " + JSON.stringify(err));
          return err;
        });
      },

      saveData: function (sectionData, sectionID) {
        var promises = [];
        showLoading('Please wait');
        angular.forEach(sectionData, function (item, index) {
          var deferred = $q.defer();
          AppServiceAPI.update($rootScope.user, index, item, 10, sectionID)
            .then(function (res) {
              deferred.resolve(res);
            }, function (err) {
              console.error('Error while saving in db');
            });
          promises.push(deferred.promise);
        });
        return $q.all(promises).then(function (res) {
          hide();
          showPopup('Saved', "Answers saved successfully");
        }, function (err) {
          hide();
          console.error("Couldn't save all the answers");
        });
      },

      logoutUser: function () {
        AppServiceAPI.logoutUser($rootScope.user).then(function (res) {
          console.log('Logged out user from db: ' + JSON.stringify(res.rowsAffected));
          AppServiceAPI.deleteAllAnswers($rootScope.user).then(function (res) {
            console.log("Deleted all the answers from the database: " + JSON.stringify(res));
          }, function (err) {
            console.error("Error in deleting answers: " + JSON.stringify(err));
          });
          $rootScope.school = null;
          $rootScope.user = null;
          $state.go('login');
        }, function (err) {
          console.error("Can't logout user from db: " + JSON.stringify(err));
        });
      },

      getData: function (sectionID) {

        return AppServiceAPI.select(sectionID).then(function (res) {
          var queryData = {};
          // console.log('Query response: ' + JSON.stringify(res.rows));
          if (res.rows.length > 0) {
            var item;
            for (var i = 0; i < res.rows.length; i++) {
              item = res.rows.item(i);
              queryData[item.questionid] = item.answer;
            }
          }
          else {
            console.log("No Record Found");
          }
          // console.log('returning: ' + JSON.stringify(queryData));
          return queryData;
        });
      }
    };
  });
