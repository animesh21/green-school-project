angular.module('starter.energy', [])

.controller('energyCtrl', function($scope,$rootScope,$state, $window, $stateParams) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });

	 $scope.questionenergyfour={
	 	choice:'Y'
	 };
	 $scope.questionenergyfive = {
	 	choice:'Y'
	 };
	 $scope.questionenergyten = {
	 	choice:'Y'
	 }
	 AppServiceAPI.select(3).then(function(res) {
	  				
		if(res.rows.length > 0) {
	        angular.forEach(res.rows, function(item,index) {
	        	questionid = res.rows.item(index).questionid
	        	//console.log(questionid,res.rows.item(index).answer,item,index);
	        	$scope.energy[questionid] = res.rows.item(index).answer;
	        });
	            
		}
		else
		{
			console.log("No Record Found")
		}
		//return data;
	});
	$scope.data = {};
  	$scope.quiz2=function(energy){
  		
		angular.forEach(air,function(item,index) {
       		AppServiceAPI.update($rootScope.user,index,item,10,3)
    	});
		AppServiceAPI.sync();
		$state.go('app.food');
	};	 
});
