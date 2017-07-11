angular.module('starter.quiz2', [])

.controller('QuestionCtrl2', function($scope,$state, $window, $stateParams) {
	
$scope.quiz3=function(){
	 	$state.go('app.quiz3');
	 	// $window.location.reload(true);
	 }

	 $scope.quiz=function(){
	 	$state.go('app.quiz');
	 	// $window.location.reload(true);
	 }

	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "#3AA21E");
    });
});
