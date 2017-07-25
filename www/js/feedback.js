angular.module('starter.feedback', [])

.controller('feedbackCtrl', function($scope,$state, $window, $stateParams) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });

	 $scope.feedback = {};

	 $scope.progress = 100;

	 $scope.quiz2=function(){
	 	$state.go('app.quiz2');
	 	// $window.location.reload(true);
	 };
});
