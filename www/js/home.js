angular.module('starter.home', [])

  .controller('homeCtrl', function ($scope, $state, $ionicModal, $timeout, $ionicPopup, $window,
                                    $rootScope) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $state.go('login');
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
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


    $scope.onHold = function (cat) {
      var info;
      if (cat == '1') {
        info = 'The field of environment education is dogged by a very' +
            ' fundamental contradiction. While everyone, everywhere, ' +
            'asserts the importance of ‘learning to live sustainably’,' +
            ' environment remains a peripheral issue in the formal' +
            ' schooling system';
        $scope.showPopup('Info', info);
      }

      else if (cat == '2') {
          info = 'A Green School is a resource-efficient building one' +
              ' that uses little water, optimizes energy efficiency,' +
              ' minimizes waste-generation.';
          $scope.showPopup('Info', info);


      }

      else if (cat == '3') {
          info = 'GSP makes the school community examine the air it ' +
              'breathes, minutely and scientifically. It also helps ' +
              'it assess the impact its commuting practices and other' +
              ' systems have on the atmosphere.';
          $scope.showPopup('Info', info);
      }

      else if (cat == '4') {
        info = 'Energy has transformed our material life and brought ' +
          'magic to our lives through its different forms—light, ' +
          'sound, heat and electricity.';
        $scope.showPopup('Info', info);
      }

      else if (cat == '5') {
        info = 'Good food is all around us. For generations, Indians ' +
            'have incorporated biodiversity in their daily food—using' +
            ' millets instead of wheat or rice';
        $scope.showPopup('Info', info);

      }

      else if (cat == '6') {
        info = 'The future of every country in the world, including' +
          ' India, or at least its ability to feed its people,' +
          ' depends on the health of its soil.';
        $scope.showPopup('Info', info);
      }

      else if (cat == '7') {
        info = 'We take water from wherever we can. From our rivers,' +
            ' ponds, lakes. From the ground, drawn through hand' +
            ' pumps and wells. In return, we give back waste';
        $scope.showPopup('Info', info);
      }

      else if (cat == '8') {
        info = 'Rubbish, garbage, litter, junk, scrap, trash. Waste is generated in various forms. Managing it is one of the essential services that municipal authorities are duty-bound to provide.';
        $scope.showPopup('Info', info);
      }

      else if (cat == '9') {
        var alertPopup = $ionicPopup.alert({
          // title: '<p>GENERAL<p>',

          template: '--'

        });

      }
    };

    $scope.onGeneral = function (cat) {
      if (cat === '11') {
        var alertPopup = $ionicPopup.alert({
          template: 'If your school has classes from Grade 6 to 11, your response will be lowest level of grade: Grade 6 and Highest level of grade: Grade 11. If your school has only one Grade (Grade 7) then your response for both will be Grade 7'
        });
      }
    };

    $scope.profile = function () {
      $state.go('app.profile');
    };

    $scope.general = function () {
      if ($rootScope.sectionsCompleted.profile) {
        $state.go('app.general1');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.air = function () {
      if ($rootScope.sectionsCompleted.general && $rootScope.sectionsCompleted.profile) {
        $state.go('app.air1');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.energy = function () {
      if ($rootScope.sectionsCompleted.general && $rootScope.sectionsCompleted.profile &&
      $rootScope.sectionsCompleted.air) {
        $state.go('app.energy');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.food = function () {
      if ($rootScope.sectionsCompleted.general && $rootScope.sectionsCompleted.profile &&
      $rootScope.sectionsCompleted.air && $rootScope.sectionsCompleted.energy) {
        $state.go('app.food');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.land = function () {
      if ($rootScope.sectionsCompleted.general && $rootScope.sectionsCompleted.profile &&
      $rootScope.sectionsCompleted.air && $rootScope.sectionsCompleted.energy &&
      $rootScope.sectionsCompleted.food) {
        $state.go('app.land');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.water = function () {
      if ($rootScope.sectionsCompleted.general && $rootScope.sectionsCompleted.profile &&
      $rootScope.sectionsCompleted.air && $rootScope.sectionsCompleted.energy &&
      $rootScope.sectionsCompleted.food && $rootScope.sectionsCompleted.land) {
        $state.go('app.water');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.waste = function () {
      if ($rootScope.sectionsCompleted.general && $rootScope.sectionsCompleted.profile &&
      $rootScope.sectionsCompleted.air && $rootScope.sectionsCompleted.energy &&
      $rootScope.sectionsCompleted.food && $rootScope.sectionsCompleted.land &&
      $rootScope.sectionsCompleted.water) {
        $state.go('app.waste');
      }
      else {
        $scope.showPopup('Alert', "Please complete previous section first");
      }
    };

    $scope.feedback = function () {
      // $window.location.reload(true);
      $state.go('app.feedback');
    };

  })

  .controller('tab', function ($scope, $stateParams) {

  });
