/**
 * Created by animesh on 1/9/17.
 */
angular.module('starter.syncFromServer', [])
.controller('syncFromServerCtrl', function ($scope, UploadService) {

  'use strict';

  $scope.syncFromServer = function () {
    UploadService.syncFromServer().then(function (res) {
      console.log("Synced to the server: " + JSON.stringify(res));
    });

  };
});
