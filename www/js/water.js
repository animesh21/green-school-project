angular.module('starter.water', [])

  .controller('waterCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                     AppServiceAPI, $ionicPlatform, $ionicModal, $sce, $ionicPopup) {

    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/Wh2INoQoaMw?enablejsapi=1');

    $scope.iFrameID = 'waterFrame';

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
      var iframe = document.getElementById("waterFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*')
      console.log('video paused');
    };

    $ionicPlatform.ready(function () {

      AppServiceAPI.select(6).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid;
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.water[questionid] = res.rows.item(index).answer;
          });

        }
        else {
          console.log("No Record Found")
        }
        //return data;
      });
    });

    $scope.quiz2 = function (water) {
      angular.forEach(water, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 6)
      });
      AppServiceAPI.sync();
      $state.go('app.waste');
    };
    // $window.location.reload(true);

  });
