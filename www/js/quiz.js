angular.module('starter.quiz', [])

.controller('QuestionCtrl', function($scope,$state, $window, $stateParams) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });

	 $scope.quiz2=function(){
	 	$state.go('app.quiz2');
	 	// $window.location.reload(true);
	 }
});
