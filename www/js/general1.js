angular.module('starter.general', [])

.controller('gen1Ctrl', function($scope,$rootScope,$state, $window, $stateParams) {
	 $(document).ready(function(){
         $('.progressBarIndicator').css("background", "red");
    });

	 $scope.questiongeneralfour = {
	 	choice:'1'
	 };

	 $scope.questiongeneralthree = {
	 	choice : 'A3'
	 };

	 $scope.questiongeneralten = {
	 	choice : 'A1'
	 };

	 $scope.questiongeneralnine = {
	 	One:'N',
	 	Two:'N',
	 	Three:'N',
	 	Four:'N',
	 	Five : 'N',
	 	Six : 'N',
	 	Seven : 'N',
	 	Eight : 'N',
	 	Nine : 'N',
	 	Ten:'N',
	 	Q7G12:'N',
	 	Q7G12 : 'N'
	 };
	AppServiceAPI.select(1).then(function(res) {

		if(res.rows.length > 0) {
	        angular.forEach(res.rows, function(item,index) {
	        	questionid = res.rows.item(index).questionid;
	        	//console.log(questionid,res.rows.item(index).answer,item,index);
	        	$scope.general[questionid] = res.rows.item(index).answer;
	        });
		}
		else {
			console.log("No Record Found");
		}
		//return data;
	});
	$scope.data = {};
  	$scope.quiz2=function(general){

		angular.forEach(air,function(item,index) {
      AppServiceAPI.update($rootScope.user, index,item,10,1);
    });
		AppServiceAPI.sync();
		$state.go('app.air');
	};
	 	// $window.location.reload(true);
});
