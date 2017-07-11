angular.module('starter.food', [])

.controller('foodCtrl', function($scope,$rootScope,$state, $window, $stateParams) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });

	 $scope.questionfoodfour={
	 	choice:'Y'
	 };
	 $scope.questionfoodfive={
	 	choice:'Y'
	 };
	 $scope.questionfoodnine={
	 	choice:'Y'
	 };
	 $scope.questionfoodten={
	 	choice:'Y'
	 };
	 $scope.questionfoodeleven={
	 	choice:'Y'
	 };
	 $scope.questionfoodtwelve={
	 	choice:'Y'
	 };
	 $scope.questionfoodthirteen={
	 	choice:'Y'
	 };
	  AppServiceAPI.select(4).then(function(res) {
	  				
		if(res.rows.length > 0) {
	        angular.forEach(res.rows, function(item,index) {
	        	questionid = res.rows.item(index).questionid
	        	//console.log(questionid,res.rows.item(index).answer,item,index);
	        	$scope.food[questionid] = res.rows.item(index).answer;
	        });
	            
		}
		else
		{
			console.log("No Record Found")
		}
		//return data;
	});
	$scope.data = {};
  	$scope.quiz2=function(food){
  		
		angular.forEach(air,function(item,index) {
       		AppServiceAPI.update($rootScope.user,index,item,10,4)
    	});
		AppServiceAPI.sync();
		$state.go('app.land');
	};
});
