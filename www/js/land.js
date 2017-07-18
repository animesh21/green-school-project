angular.module('starter.land', [])

  .controller('landCtrl', function ($scope, $rootScope, $state, $window, $stateParams,
                                    AppServiceAPI, $ionicPlatform, $sce, $ionicPopup, $ionicModal) {
    $(document).ready(function () {
      $('.progressBarIndicator').css("background", "red");
    });

    $scope.tutorialURL = $sce.trustAsResourceUrl('https://www.youtube.com/embed/todM6wToHHQ?enablejsapi=1');

    $scope.iFrameID = 'landFrame';
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
      var iframe = document.getElementById("landFrame").contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' +   '","args":""}', '*')
      console.log('video paused');
    };

    $ionicPlatform.ready(function () {

      AppServiceAPI.select(5).then(function (res) {

        if (res.rows.length > 0) {
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid;
            //console.log(questionid,res.rows.item(index).answer,item,index);
            $scope.land[questionid] = res.rows.item(index).answer;
          });

        }
        else {
          console.log("No Record Found")
        }
        //return data;
      });
    });

    $scope.quiz2 = function (land) {
      angular.forEach(land, function (item, index) {
        AppServiceAPI.update($rootScope.user, index, item, 10, 5)
      });
      AppServiceAPI.sync();
      $state.go('app.water');
    };
  });
