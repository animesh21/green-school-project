angular.module('starter.food', [])

  .controller('foodCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                    AppServiceAPI, $ionicPlatform, $sce, $ionicModal) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/9r3Lwrd9BUs?enablejsapi=1');

    $scope.iFrameID = 'foodFrame';

    // video modal for tutorial video
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      console.log("openModal");
      $scope.modal.show()
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
      var iframe = document.getElementById("foodFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*')
      console.log('video paused');
    };

    $scope.playVideo = function () {
      var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'playVideo' +   '","args":""}', '*');
      console.log('video resumed');
    };

    $ionicPlatform.ready(function () {

      AppServiceAPI.select(4).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.food[questionid] = res.rows.item(index).answer;
          });

        }
        else {
          console.log("No Record Found")
        }
        //return data;
      });
    });

    $scope.quiz2 = function (food) {

      angular.forEach(food, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 4)
      });
      AppServiceAPI.sync();
      $state.go('app.land');
    };
  });
