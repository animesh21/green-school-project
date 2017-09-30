/**
 * Created by animesh on 29/8/17.
 */
angular.module('starter.upload', [])
  .service('UploadService', function ($http, $cordovaCamera, $rootScope, $cordovaActionSheet, $q,
                                      AppServiceAPI, $ionicLoading, $ionicPopup) {

    'use strict';

    var imageUrl = 'http://greenschoolsprogramme.org/audit2017/api/gsp/image?userid=';

    var _takePic = function () {
      var actionSheetOptions = {
        title: 'Select a picture/document',
        buttonLabels: ['Camera', 'Choose from device'],
        addCancelButtonWithLabel: 'Cancel',
        androidEnableCancelButton: true
      };

      return $cordovaActionSheet.show(actionSheetOptions).then(function (btnIndex) {
        if (btnIndex === 2) {
          return _cameraFunc(Camera.PictureSourceType.PHOTOLIBRARY);
        } else if (btnIndex === 1) {
          return _cameraFunc(Camera.PictureSourceType.CAMERA);
        }
      }, function (err) {
        return err;
      });
    };

    var _cameraFunc = function (sourceType) {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: sourceType,
        allowEdit: false,
        targetWidth: 600,
        targetHeight: 500,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
      return $cordovaCamera.getPicture(options);
    };

    var _uploadImage = function (image_data, data_id, ques) {
      var server = 'http://www.greenschoolsprogramme.org/audit2017/upload.php';
      var userID = $rootScope.user;
      console.log("uploading image with userID: " + userID);
      var username = $rootScope.schoolName.replace(/ /g, '_');
      var fileName = username + '_' + data_id + '_' + ques + '.jpg';
      var data = {
        fileName: fileName,
        user_id: userID
      };
      data.profile_image = image_data;
      var req = {
        method: 'POST',
        url: server,
        headers: {'Content-Type': "application/x-www-form-urlencoded"},
        data: data
      };
      return $http(req).then(function (response) {
        console.log("Uploaded image: " + JSON.stringify(response));
        return response;
      }, function (err) {
        console.error('Error in uploading: ' + JSON.stringify(err));
        return err;
      });
    };

    var _showLoading = function (message) {
      $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner><p>' +
        message + '</p>'
      });
    };

    var _hideLoading = function () {
      $ionicLoading.hide();
    };

    var _showPopup = function (title, message) {
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

    var _syncFromServer = function () {

      return AppServiceAPI.selectUser(1).then(function (res) {
        var item = res.rows.item(0);
        var email = item.email;
        var password = item.password;
        console.log('email: ' + email + ', password: ' + password);

        return $http.get("http://greenschoolsprogramme.org/audit2017/api/Gsp/users/email/" + email + "/password/" + password)
        // $http.get("http://127.0.0.1/GSP/api/Gsp/users/email/" + email + "/password/" + password)
          .then(function (response) {
            // console.log('Response from API: ' + JSON.stringify(response));
            var answer_data = response.data.data;
            var school_data = response.data.school;
            // getting state of the school
            var state = school_data.state;

            var promises = [];

            // getting districts of the corresponding state from the api
            $http.get('http://greenschoolsprogramme.org/audit2017/api/Gsp/states/stateid/' + state)
            // $http.get('http://localhost/GSP/api/Gsp/states/stateid/' + state)
              .then(function (res) {
                $rootScope.districts = res.data;
                // console.log('Districts fetched: ' + JSON.stringify($rootScope.districts));
              });

            angular.forEach(answer_data, function (answerObj, quesID) {
              // create a $q deffered promise
              var deferred = $q.defer();

              AppServiceAPI.insert(answerObj.user, quesID, answerObj.Answer, answerObj.score, answerObj.type)
                .then(function (res) {
                  // promise successfully resolved
                  deferred.resolve(res);
                }, function (err) {
                  console.error('Error inserting data: ' + JSON.stringify(err));
                });

              // add to the list of promises
              promises.push(deferred.promise);
            });

            angular.forEach(school_data, function (val, key) {
              var deferred = $q.defer();
              AppServiceAPI.insert($rootScope.user, key, val.toString(), 0, 0)
                .then(function (res) {
                  deferred.resolve(res);
                }, function (err) {
                  console.log('Error in: ' + key + ', ' + val);
                  console.error('Error while inserting data: ' + JSON.stringify(err));
                });
              promises.push(deferred.promise);
            });

            _showLoading('Please wait while syncing the database');

            return $q.all(promises).then(function (results) {
              _hideLoading();
              _showPopup('Done', 'Your survey data is now synced to the portal');
            }, function (err) {
              _hideLoading();
              console.log("Couldn't resolve all promises: " + JSON.stringify(err));
            });
          });
      });
    };

    var _getImages = function (image_keys) {

      return $http.get(imageUrl + $rootScope.user).then(function (res) {
        var webImages = res.data;
        // console.log("Images from web: " + JSON.stringify($scope.webImages));
        var image_lookup = {};
        for (var i = 0; i < image_keys.length; i++) {
          var image_key = image_keys[i];
          var item_list = [];
          for (var j = 0; j < webImages.length; j++) {
            var filename = webImages[j].file_name;
            var n = filename.search(image_key);
            if (n > 0) {
              item_list.push(filename);
            }
          }
          image_lookup[image_key] = item_list;
        }
        // console.log('Image lookup: ' + JSON.stringify(image_lookup));
        return image_lookup;
      });
    };

    return {
      uploadImage: _uploadImage,
      takePic: _takePic,
      syncFromServer: _syncFromServer,
      getImages: _getImages
    };
  });
