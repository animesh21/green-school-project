angular.module('starter.login', [])
  .controller('loginCtrl', function ($scope, $rootScope, $state, $stateParams, $cordovaInAppBrowser, $http, $ionicLoading, AppServiceAPI, $ionicPopup, $q) {

    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner>'
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

    $scope.browser = function () {
      console.log("open url");
      options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes',
        closebuttoncaption: 'DONE?'
      };

      $cordovaInAppBrowser.open("http://www.studio-tesseract.co/GSP/login/register/", '_blank', options)
        .then(function (event) {
          // success
          console.log('successfully opened the url');
        })
        .catch(function (event) {
          // error
          console.error("url couldn't be opened: " + event);
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

    /////////////////////login form submission////////
    // $scope.insert = function(userid,questionid,answer,score,type) {
    //       var query = "INSERT INTO gsp_answers (userid,questionid,answer,score,type) VALUES (?,?,?,?,?)";
    //       $cordovaSQLite.execute(db, query, [userid,questionid,answer,score,type]).then(function(res) {
    //           console.log("INSERT ID -> " + res.insertId);
    //       }, function (err) {
    //           console.error(err);
    //       });
    //       }
    // $rootScope.data = {};
    // $rootScope.select = function(type) {
    //   var query = "SELECT questionid,answer FROM gsp_answers";
    //   $cordovaSQLite.execute(db, query).then(function(res) {
    //               if(res.rows.length > 0)
    //               {
    //                   angular.forEach(res.rows, function(item,index) {
    //                       questionid = res.rows.item(index).questionid

    //                       $rootScope.data[questionid] = res.rows.item(index).answer
    //                      /*$scope.data.push({
    //                         questionid : res.rows.item(index).answer
    //                       });*/
    //                       //console.log($rootScope.data);
    //                     });

    //                 }
    //                 else
    //                 {
    //                     console.log("No results found");
    //                 }
    //           },
    //           function (err) {
    //               console.error(err);
    //           });
    // }

    // $rootScope.update = function(questionid,answer,type)
    // {
    //   var query = "SELECT questionid,answer FROM gsp_answers WHERE questionid = ?,type = ?";
    //       $cordovaSQLite.execute(db, query, [questionid,type]).then(function(res) {
    //           if(res.rows.length > 0)
    //           {
    //             var query = "UPDATE TABLE gsp_answers SET answer = ? WHERE questionid = ? AND type = ?";
    //             $cordovaSQLite.execute(db, query, [answer,questionid,type]).then(function(res) {
    //                 if(res.rows.length > 0)
    //                   alert("Success");
    //             });

    //           }
    //           else
    //           {
    //               var query = "INSERT INTO gsp_answers (userid,questionid,answer,score,type) VALUES (?,?,?,?,?)";
    //               $cordovaSQLite.execute(db, query, [userid,questionid,answer,score,type]).then(function(res) {
    //                   console.log("INSERT ID -> " + res.insertId);
    //               }, function (err) {
    //                   console.error(err);
    //               });
    //           }
    //       },
    //       function (err)
    //       {
    //           console.error(err);
    //       });

    // }

    $scope.submitForm = function (user) {
      // list of all promises
      var promises = [];

      $scope.show();

      var email = user.email.replace("@", "-");
      var pass = user.password;
      console.log('username: ' + email);
      $http.get("http://studio-tesseract.co/GSP/api/Gsp/users/email/" + email + "/password/" + pass)
        .then(function (response) {
          // console.log('Response from API: ' + JSON.stringify(response));
          if (!response.data.data) {
            $scope.hide();
            $scope.showPopup(
              'Invalid Credentials!',
              'The credentials you entered did not match, please try again with valid credentials.'
            );
            $state.go('login');
          }
          else {
            $rootScope.data = response.data.data;
            angular.forEach($rootScope.data, function (answerObj, quesID) {
              // create a $q deffered promise
              var deferred = $q.defer();

              console.log(JSON.stringify(quesID));
              console.log(JSON.stringify(answerObj));
              if (answerObj.type == '0') {
                console.log('Answer: ' + JSON.stringify(answerObj.Answer));
              }
              $rootScope.user = answerObj.user;
              AppServiceAPI.insert(answerObj.user, quesID, answerObj.Answer, answerObj.score, answerObj.type).then(function (res) {

                // promise successfully resolved
                deferred.resolve(res);
              }, function (err) {
                $scope.hide();
                console.error('Error inserting data: ' + JSON.stringify(err));

              });

              // add to the list of promises
              promises.push(deferred.promise);
            });

            $scope.hide();
            $state.go('app.home');

            $scope.showLoading('Please wait while syncing the database');

            $q.all(promises).then(function (results) {
              $scope.hide();
              $scope.showPopup('Done', 'Your survey data is now synced to the portal');
            });
            //AppServiceAPI.
            //$rootScope.select();
          }
        }, function (error) {
          $scope.hide();
          console.error('Error in the response: ' + JSON.stringify(error));
        });
    };
  });
