 $scope.token = $rootScope.token;
	 $scope.questiongeneralfour = $rootScope.questiongeneralfour;
	 $scope.questiongeneralthree = $rootScope.questiongeneralthree;
	 $scope.questiongeneralten = $rootScope.questiongeneralten;
	 $scope.questiongeneralnine = $rootScope.questiongeneralnine;
	 $scope.quiz2=function(){

	 	var questiongeneral1 = $("#questiongeneralone").val();
		
		var questiongeneral2 = $("#questiongeneraltwo").val();
	 	
	 	var questiongeneral3 = $scope.questiongeneralthree.choice;
	 	
	 	var questiongeneral4 = $scope.questiongeneralfour.choice;
	 	
	 	var questiongeneral5 = $("#questiongeneralfive").val();
	 	
	 	var questiongeneral6OneMale = $("#questiongeneralsixOneMale").val();
	 	var questiongeneral6OneFemale = $("#questiongeneralsixOneFemale").val();
	 	var questiongeneral6OneTotal = $("#questiongeneralsixOneTotal").val();
	 	var questiongeneral6TwoMale = $("#questiongeneralsixTwoMale").val();
	 	var questiongeneral6TwoFemale = $("#questiongeneralsixTwoFemale").val();
	 	var questiongeneral6TwoTotal = $("#questiongeneralsixTwoTotal").val();
	 	var questiongeneral6ThreeMale = $("#questiongeneralsixThreeMale").val();
	 	var questiongeneral6ThreeFemale = $("#questiongeneralsixThreeFemale").val();
	 	var questiongeneral6ThreeTotal = $("#questiongeneralsixThreeTotal").val();
	 	var questiongeneral6FourMale = $("#questiongeneralsixFourMale").val();
	 	var questiongeneral6FourFemale = $("#questiongeneralsixFourFemale").val();
	 	var questiongeneral6FourTotal = $("#questiongeneralsixFourTotal").val();
	 	
	 	var questiongeneral7 = $("#questiongeneralseven").val();
	 	
	 	var questiongeneral8 = $("#questiongeneraleight").val();
	 	
	 	var questiongeneral9One =$scope.questiongeneralnine.One;
	 	var questiongeneral9Two = $scope.questiongeneralnine.Two;
	 	var questiongeneral9Three = $scope.questiongeneralnine.Three;
	 	var questiongeneral9Four = $scope.questiongeneralnine.Four;
	 	var questiongeneral9Five = $scope.questiongeneralnine.Five;
	 	var questiongeneral9Six = $scope.questiongeneralnine.Six;
	 	var questiongeneral9Seven = $scope.questiongeneralnine.Seven;
	 	var questiongeneral9Eight = $scope.questiongeneralnine.Eight;
	 	var questiongeneral9Nine = $scope.questiongeneralnine.Nine;
	 	var questiongeneral9Ten = $scope.questiongeneralnine.Ten;
	 	var questiongeneral9Eleven = $scope.questiongeneralnine.Eleven;
	 	var questiongeneral9Twelve = $scope.questiongeneralnine.Twelve;
	 	
	 	var questiongeneral10 = $("#questiongeneralten").val();
	 	
	 	var token = $('#token').val();
	 	var general = {
	 		"id":$rootScope.id,
	 		"token" : $scope.token,
	 		"266617X32X1674SQ001" : questiongeneral1,
	 		"266617X32X1674SQ002" : questiongeneral2,

	 		"266617X32X27": questiongeneral3,
	 		
	 		"266617X32X28" : questiongeneral4,
	 		"266617X32X28other" : questiongeneral4, 
	 		"266617X32X274" : questiongeneral5,

	 		"266617X32X33SQ001_SQ001" : questiongeneral6OneMale,
	 		"266617X32X33SQ001_SQ002" : questiongeneral6OneFemale,
	 		"266617X32X33SQ001_SQ003" : questiongeneral6OneTotal,
			"266617X32X33SQ002_SQ001" : questiongeneral6TwoMale,
	 		"266617X32X33SQ002_SQ002" : questiongeneral6TwoFemale,
	 		"266617X32X33SQ002_SQ003" : questiongeneral6TwoTotal,
	 		"266617X32X33SQ003_SQ001" : questiongeneral6ThreeMale,
	 		"266617X32X33SQ003_SQ002" : questiongeneral6ThreeFemale,
	 		"266617X32X33SQ003_SQ003" : questiongeneral6ThreeTotal,
	 		"266617X32X33SQ004_SQ001" : questiongeneral6FourMale,
	 		"266617X32X33SQ004_SQ002" : questiongeneral6FourFemale,
	 		"266617X32X33SQ004_SQ003" : questiongeneral6FourTotal,

	 		"266617X32X2297" : questiongeneral7,

	 		"266617X32X40" : questiongeneral8,

	 		"266617X32X43SQ001_SQ001" : questiongeneral9One,
	 		"266617X32X43SQ002_SQ001" : questiongeneral9Two,
	 		"266617X32X43SQ003_SQ001" : questiongeneral9Three,
	 		"266617X32X43SQ004_SQ001" : questiongeneral9Four,
	 		"266617X32X43SQ005_SQ001" : questiongeneral9Five,
	 		"266617X32X43SQ006_SQ001" : questiongeneral9Six,
	 		"266617X32X43SQ007_SQ001" : questiongeneral9Seven,
	 		"266617X32X43SQ008_SQ001" : questiongeneral9Eight,
	 		"266617X32X43SQ009_SQ001" : questiongeneral9Nine,
	 		"266617X32X43SQ010_SQ001" : questiongeneral9Ten,
	 		"266617X32X43SQ011_SQ001" : questiongeneral9Eleven,
	 		"266617X32X43SQ012_SQ001" : questiongeneral9Twelve,

	 		"266617X32X56" : questiongeneral10
	 	};

	 	$.ajax({
   			 url: "http://studiotesseract.co/green-school/submit-aswer.php",
    		 type: "POST",
    		 data: {data:general},
      			success:function(data) {
        		console.log(data);
             },
  	   			error:function(xhr) {
          		alert('error');
             }
  		});
	 	$state.go('app.air1');
	 	// $window.location.reload(true);
	 }