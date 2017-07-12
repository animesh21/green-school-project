angular.module('starter.land', [])

.controller('landCtrl', function($scope,$rootScope,$state, $window, $stateParams, AppServiceAPI) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });
	AppServiceAPI.select(5).then(function(res) {

		if(res.rows.length > 0) {
	        angular.forEach(res.rows, function(item,index) {
	        	questionid = res.rows.item(index).questionid;
	        	//console.log(questionid,res.rows.item(index).answer,item,index);
	        	$scope.land[questionid] = res.rows.item(index).answer;
	        });

		}
		else
		{
			console.log("No Record Found")
		}
		//return data;
	});
	$scope.data = {};
  	$scope.quiz2=function(land){

		angular.forEach(air,function(item,index) {
       		AppServiceAPI.update($rootScope.user,index,item,10,5)
    	});
		AppServiceAPI.sync();
		$state.go('app.land');
	};
});
