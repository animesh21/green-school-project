angular.module('starter.air', [])

.controller('air1Ctrl', function($scope,$rootScope,$state, $window, $stateParams,AppServiceAPI) {
	 
	//$scope.air = $rootScope.data;
	// $scope.select = function(type) {
    
	//     var query = "SELECT questionid,answer FROM gsp_answers WHERE type = ?";
	//     $cordovaSQLite.execute(db, query, [type]).then(function(res) {
	//     		if(res.rows.length > 0) {
 //                    angular.forEach(res.rows, function(item,index) {
 //                        questionid = res.rows.item(index).questionid
 //                    	$scope.air[questionid] = res.rows.item(index).answer
 //                        console.log($scope.air);
 //                      });
 //                  }
 //                 else{
 //                      console.log("No results found");
 //                  }
 //            },
 //            function (err) {
 //                console.error(err);
 //            });
 //  		};
  
  //$scope.air = $rootScope.select(2);
  //console.log($scope.air);
  	
	AppServiceAPI.select(2).then(function(res) {
	  				
		if(res.rows.length > 0) {
	        angular.forEach(res.rows, function(item,index) {
	        	questionid = res.rows.item(index).questionid
	        	//console.log(questionid,res.rows.item(index).answer,item,index);
	        	$scope.air[questionid] = res.rows.item(index).answer;
	        });
	            
		}
		else
		{
			console.log("No Record Found")
		}
		//return data;
	});
	$scope.data = {};
  	$scope.quiz2=function(air){
  		
		angular.forEach(air,function(item,index) {
       		AppServiceAPI.update($rootScope.user,index,item,10,2)
      });
	// AppServiceAPI.select(2).then(function(res) {
	  				
	// 	if(res.rows.length > 0) {
	//         angular.forEach(res.rows, function(item,index) {
	//         	questionid = res.rows.item(index).questionid
	//         	console.log(questionid,res.rows.item(index).answer,item,index);
	//         	//$scope.air[questionid] = res.rows.item(index).answer;
	//         });
	            
	// 	}
	// 	else
	// 	{
	// 		console.log("No Record Found")
	// 	}
	// 	//return data;
	// });

	AppServiceAPI.sync();
	
  }
  
});
