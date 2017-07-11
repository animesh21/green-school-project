$scope.token = $rootScope.token;
	 $scope.questionlandsix.choice = $rootScope.questionlandsix;
	 $scope.quiz2=function(){

	 	var questionland1onename = $('#landoneName').val();
	   	var questionland1oneemail = $("#landoneEmail").val();
		var questionland1twoname = $("#landtwoName").val();
		var questionland1twoemail = $("#landtwoEmail").val();
		var questionland1threename = $("#landthreeName").val();
		var questionland1threeemail = $("#landthreeEmail").val();

		var questionland2OneName = $('#questionlandtwoOneName').val();
	   	var questionland2OneEmail = $("#questionlandtwoOneEmail").val();
		var questionland2TwoName = $("#questionlandtwoTwoName").val();
		var questionland2TwoEmail = $("#questionlandtwoTwoEmail").val();
		var questionland2ThreeName = $("#questionlandtwoThreeName").val();
		var questionland2ThreeEmail = $("#questionlandtwoThreeEmail").val();
		var questionland2FourName = $("#questionlandtwoFourName").val();
		var questionland2FourEmail = $("#questionlandtwoFourEmail").val();
		var questionland2FiveName = $("#questionlandtwoFiveName").val();
		var questionland2FiveEmail = $("#questionlandtwoFiveEmail").val();

		var questionland3OneName = $('#questionlandthreeOneName').val();
	   	var questionland3OneEmail = $("#questionlandthreeOneEmail").val();
		var questionland3OneGrade = $("#questionlandtwoOneGrade").val();
		var questionland3TwoName = $('#questionlandthreeOneName').val();
	   	var questionland3TowEmail = $("#questionlandthreeOneEmail").val();
		var questionland3TwoGrade = $("#questionlandtwoOneGrade").val();
		var questionland3ThreeName = $('#questionlandthreeThreeName').val();
	   	var questionland3ThreeEmail = $("#questionlandthreeThreeEmail").val();
		var questionland3ThreeGrade = $("#questionlandthreeThreeGrade").val();
		var questionland3FourName = $('#questionlandthreeFourName').val();
	   	var questionland3FourEmail = $("#questionlandthreeFourEmail").val();
		var questionland3FourGrade = $("#questionlandthreeFiveGrade").val();
		var questionland3FiveName = $('#questionlandthreeFiveName').val();
	   	var questionland3FiveEmail = $("#questionlandthreeFiveEmail").val();
		var questionland3FiveGrade = $("#questionlandthreeFiveGrade").val();
		var questionland3SixName = $('#questionlandthreeSixName').val();
	   	var questionland3SixEmail = $("#questionlandthreeSixEmail").val();
		var questionland3SixGrade = $("#questionlandthreeSixGrade").val();
		var questionland3SevenName = $('#questionlandthreeSevenName').val();
	   	var questionland3SevenEmail = $("#questionlandthreeSevenEmail").val();
		var questionland3SevenGrade = $("#questionlandthreeSevenGrade").val();
		var questionland3EightName = $('#questionlandthreeEightName').val();
	   	var questionland3EightEmail = $("#questionlandthreeEightEmail").val();
		var questionland3EightGrade = $("#questionlandthreeEightGrade").val();
		var questionland3NineName = $('#questionlandthreeNineName').val();
	   	var questionland3NineEmail = $("#questionlandthreeNineEmail").val();
		var questionland3NineGrade = $("#questionlandthreeNineGrade").val();
		var questionland3TenName = $('#questionlandthreeTenName').val();
	   	var questionland3TenEmail = $("#questionlandthreeTenEmail").val();
		var questionland3TenGrade = $("#questionlandthreeTenGrade").val();
		
		var questionland4OneArea = $("#questionlandfourOneArea").val();
		var questionland4TwoArea = $("#questionlandfourTwoArea").val();
		var questionland4ThreeArea = $("#questionlandfourThreeArea").val();
		var questionland4FourArea = $("#questionlandfourFourArea").val();
		var questionland4FiveArea = $("#questionlandfourFiveArea").val();
		var questionland4SixArea = $("#questionlandfourSixArea").val();
		var questionland4SevenArea = $("#questionlandfourSevenArea").val();
		var questionland4EightArea = $("#questionlandfourEightArea").val();
		var questionland4NineArea = $("#questionlandfourNineArea").val();
		var questionland4TenArea = $("#questionlandfourTenArea").val();
		var questionland4ElevenArea = $("#questionlandfourElevenArea").val();
		var questionland4TwelveArea = $("#questionlandfourTwelveArea").val();
		
		var questionland5OneNative = $("#questionlandfiveOneNative").val();
		var questionland5OneExotic = $("#questionlandfiveOneExotic").val();
		var questionland5OneTotal = $("#questionlandfiveOneTotal").val();
		var questionland5TwoNative = $("#questionlandfiveTwoNative").val();
		var questionland5TwoExotic = $("#questionlandfiveTwoExotic").val();
		var questionland5TwoTotal = $("#questionlandfiveTwoTotal").val();

		var questionland6 = $scope.questionlandsix.choice;
		
		var questionland7 = $("#questionlandseven").val();

		var token = $('#token').val();
		var land = {

			"id":$rootScope.id,
			"token" : $scope.token,
			"266617X7X2526SQ001_SQ001" : questionland1onename,
		   	"266617X7X2526SQ001_SQ002" : questionland1oneemail,
		   	"266617X7X2526SQ002_SQ001" : questionland1twoname,
		   	"266617X7X2526SQ002_SQ002" : questionland1twoname,
		   	"266617X7X2526SQ003_SQ001" : questionland1threename,
		   	"266617X7X2526SQ003_SQ002" : questionland1threeemail,

		   	"266617X7X2532SQ001_SQ001" : questionland2OneName,
		   	"266617X7X2532SQ001_SQ002" : questionland2OneEmail,
		   	"266617X7X2532SQ002_SQ001" : questionland2TwoName,
		   	"266617X7X2532SQ002_SQ002" : questionland2TwoEmail,
		   	"266617X7X2532SQ003_SQ001" : questionland2ThreeName,
		   	"266617X7X2532SQ003_SQ002" : questionland2ThreeEmail,
		   	"266617X7X2532SQ004_SQ001" : questionland2FourName,
		   	"266617X7X2532SQ004_SQ002" : questionland2FourEmail,
		   	"266617X7X2532SQ005_SQ001" : questionland2FiveName,
		   	"266617X7X2532SQ005_SQ002" : questionland2FiveEmail,

		   	"266617X7X2540SQ001_SQ001" : questionland3OneName,
		   	"266617X7X2540SQ001_SQ002" : questionland3OneEmail,
		   	"266617X7X2540SQ001_SQ003" : questionland3OneGrade,
		   	"266617X7X2540SQ002_SQ001" : questionland3TwoName,
		   	"266617X7X2540SQ002_SQ002" : questionland3TowEmail,
		   	"266617X7X2540SQ002_SQ003" : questionland3TwoGrade,
		   	"266617X7X2540SQ003_SQ001" : questionland3ThreeName,
		   	"266617X7X2540SQ003_SQ002" : questionland3ThreeEmail,
		   	"266617X7X2540SQ003_SQ003" : questionland3ThreeGrade,
		   	"266617X7X2540SQ004_SQ001" : questionland3FourName,
		   	"266617X7X2540SQ004_SQ002" : questionland3FourEmail,
		   	"266617X7X2540SQ004_SQ003" : questionland3FiveGrade,
		   	"266617X7X2540SQ005_SQ001" : questionland3FiveName,
		   	"266617X7X2540SQ005_SQ002" : questionland3FiveEmail,
		   	"266617X7X2540SQ005_SQ003" : questionland3FiveGrade,
		   	"266617X7X2540SQ006_SQ001" : questionland3SixName,
		   	"266617X7X2540SQ006_SQ002" : questionland3SixEmail,
		   	"266617X7X2540SQ006_SQ003" : questionland3SixGrade,
		   	"266617X7X2540SQ007_SQ001" : questionland3SevenName,
		   	"266617X7X2540SQ007_SQ002" : questionland3SevenEmail,
		   	"266617X7X2540SQ007_SQ003" : questionland3SevenGrade,
		   	"266617X7X2540SQ008_SQ001" : questionland3EightName,
		   	"266617X7X2540SQ008_SQ002" : questionland3EightEmail,
		   	"266617X7X2540SQ008_SQ003" : questionland3EightGrade,
		   	"266617X7X2540SQ009_SQ001" : questionland3NineName,
		   	"266617X7X2540SQ009_SQ002" : questionland3NineEmail,
		   	"266617X7X2540SQ009_SQ003" : questionland3NineGrade,
		   	"266617X7X2540SQ010_SQ001" : questionland3TenName,
		   	"266617X7X2540SQ010_SQ002" : questionland3TenEmail,
		   	"266617X7X2540SQ010_SQ003" : questionland3TenGrade,

		   	"266617X7X1810SQ001_SQ002" : questionland4OneArea,
			"266617X7X1810SQ002_SQ002" : questionland4TwoArea,
		   	"266617X7X1810SQ004_SQ002" : questionland4ThreeArea,
		   	"266617X7X1810SQ005_SQ002" : questionland4FourArea,
		   	"266617X7X1810SQ006_SQ002" : questionland4FiveArea,
		   	"266617X7X1810SQ007_SQ002" : questionland4SixArea,
		   	"266617X7X1810SQ008_SQ002" : questionland4SevenArea,
		   	"266617X7X1810SQ009_SQ002" : questionland4EightArea,
		   	"266617X7X1810SQ010_SQ002" : questionland4NineArea,
		   	"266617X7X1810SQ011_SQ002" : questionland4TenArea,
		   	"266617X7X1810SQ012_SQ002" : questionland4ElevenArea,
		   	"266617X7X1810SQ013_SQ002" : questionland4TwelveArea,
		   	
		   	"266617X7X189SQ001_SQ002" : questionland5OneNative,
		   	"266617X7X189SQ001_SQ003" : questionland5OneExotic,
		   	"266617X7X189SQ001_SQ004" : questionland5OneTotal,

		   	"266617X7X189SQ003_SQ002" : questionland5TwoNative,
		   	"266617X7X189SQ003_SQ003" : questionland5TwoExotic,
		   	"266617X7X189SQ003_SQ004" : questionland5TwoTotal,

		   	"266617X7X196" : questionland6,
		   	"266617X7X2258" : questionland7,
		   	"266617X7X2258_filecount" : 5

		};
		$.ajax({
   			 url: "http://studiotesseract.co/green-school/submit-aswer.php",
    		 type: "POST",
    		 data: {data:land},
      			success:function(data) {
        		console.log(data);
             },
  	   			error:function(xhr) {
          		alert('error');
             }
  		});
	 	$state.go('app.water');
	 	// $window.location.reload(true);
	 }