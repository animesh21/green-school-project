angular.module('starter.water', [])

.controller('waterCtrl', function($scope,$rootScope,$state, $window, $stateParams, AppServiceAPI) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });

	 AppServiceAPI.select(6).then(function(res) {

		if(res.rows.length > 0) {
	        angular.forEach(res.rows, function(item,index) {
	        	questionid = res.rows.item(index).questionid;
	        	//console.log(questionid,res.rows.item(index).answer,item,index);
	        	$scope.water[questionid] = res.rows.item(index).answer;
	        });

		}
		else
		{
			console.log("No Record Found")
		}
		//return data;
	});
	$scope.data = {};
  	$scope.quiz2=function(water){

		angular.forEach(air,function(item,index) {
       		AppServiceAPI.update($rootScope.user,index,item,10,6)
    	});
		AppServiceAPI.sync();
		$state.go('app.waste');
	};
	 	// $window.location.reload(true);

});
