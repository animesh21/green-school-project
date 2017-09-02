/**
 * Created by animesh on 1/9/17.
 */
angular.module('starter.user_settings', [])

  .controller('settingsCtrl', function ($scope, $ionicHistory, $ionicPopup, $state,
                                        AppServiceAPI, ValidationService) {

    'use strict';

    $scope.data = {
      setting_options: {
        1: {
          name: 'Clear Cache',
          onClick: $scope.clearUserCache
        },
        2: {
          name: 'Help',
          onClick: $scope.help
        },
        3: {
          name: 'Rate this app',
          onClick: $scope.help
        },
        4: {
          name: 'Sign out',
          onClick: $scope.signout
        }
      }
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

    $scope.clearUserCache = function () {
      $ionicHistory.clearCache().then(function (res) {
        console.log("Cleared the cache: " + JSON.stringify(res));
        $scope.showPopup("Info", "Successfully cleared all the saved cache");
      }, function (err) {
        console.error("Can't clear the cache: " + JSON.stringify(err));
      });
    };

    $scope.help = function () {
      $state.go('app.help');
    };

    $scope.signout = function () {
      $ionicPopup.prompt({
        title: "Confirmation",
        template: "<p>Do you really want to singout of the GSP app?</p>",
        buttons: [
          {
            text: 'Cancel', onTap: function (e) {
            return true;
          }
          },
          {
            text: 'OK', onTap: function (e) {
            AppServiceAPI.sync(100).then(function (res) {
              ValidationService.logoutUser();
            }, function (err) {
              console.log("Error while syncing: " + JSON.stringify(err));
            });

          }
          }
        ]
      });
    };


  });
