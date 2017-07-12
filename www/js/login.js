angular.module('starter.login', [])
.controller('loginCtrl', function($scope,$rootScope,$state, $stateParams,$cordovaInAppBrowser,$http,$ionicLoading,AppServiceAPI) {

	$scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner></ion-spinner>'
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

	 $scope.browser = function() {
	 	console.log("open url");
             options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'yes',
                closebuttoncaption: 'DONE?'
            };


            $cordovaInAppBrowser.open("http://www.greenschoolsprogramme.org/registration/", '_blank', options)
                .then(function(event) {
                    // success
                })
                .catch(function(event) {
                    // error
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
	$scope.submitForm=function(user)
	{
    $scope.show();

    var email = user.email.replace("@","-");
    var pass = user.password;
    $http.get("http://studio-tesseract.co/GSP/api/Gsp/users/email/"+email+"/password/"+pass)
    .then(function(response) {

        $rootScope.data = response['data']['data'];
        angular.forEach($rootScope.data, function(item,index) {
         $rootScope.user = item['user'];
         AppServiceAPI.insert(item['user'],index,item['Answer'],item['score'],item['type'])
         //console.log(index,item);

      });
        $scope.hide();
        $state.go('app.home');
        //AppServiceAPI.
        //$rootScope.select();
    });
  }
});
