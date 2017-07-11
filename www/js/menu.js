angular.module('starter.menu', [])
.controller('menuCtrl', function($scope,$state, $stateParams,$window) {

$scope.faq=function(){
	alert("faqqqq")
	$state.go('app.FAQ');
}
$scope.air=function(){
	$state.go('app.air1')
}
$scope.water=function(){
	$state.go('app.water')
}
$scope.land=function(){
	$state.go('app.land')
}
$scope.energy=function(){
	$state.go('app.energy')
}
$scope.waste=function(){
	$state.go('app.waste')
}
$scope.food=function(){
	$state.go('app.food')
}


$scope.login=function(){
	$state.go('login')
}
$scope.home=function(){
	// $window.location.reload(true);
	$state.go('app.home')
	
}
$scope.quiz=function(){
	// $window.location.reload(true);
	$state.go('app.quiz')
	
}


});