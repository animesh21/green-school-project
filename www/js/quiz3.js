angular.module('starter.quiz3', [])

.controller('QuestionCtrl3', function($scope,$state, $window, $stateParams) {

$scope.quiz2=function(){
	 	$state.go('app.quiz3');
	 	// $window.location.reload(true);
	 };

	 $scope.quiz=function(){
	 	$state.go('app.quiz2');
	 	// $window.location.reload(true);
	 };

	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "#3AA21E");
    });
});
