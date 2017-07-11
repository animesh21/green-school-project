$scope.quiz2=function(){
	 	console.log($stateParams.result);
	 	var questionfood1onename = $('#foodoneName').val();
	   	var questionfood1oneemail = $("#foodoneEmail").val();
		var questionfood1twoname = $("#foodtwoName").val();
		var questionfood1twoemail = $("#foodtwoEmail").val();
		var questionfood1threename = $("#foodthreeName").val();
		var questionfood1threeemail = $("#foodthreeEmail").val();

		var questionfood2OneName = $('#questionfoodtwoOneName').val();
	   	var questionfood2OneEmail = $("#questionfoodtwoOneEmail").val();
		var questionfood2TwoName = $("#questionfoodtwoTwoName").val();
		var questionfood2TwoEmail = $("#questionfoodtwoTwoEmail").val();
		var questionfood2ThreeName = $("#questionfoodtwoThreeName").val();
		var questionfood2ThreeEmail = $("#questionfoodtwoThreeEmail").val();
		var questionfood2FourName = $("#questionfoodtwoFourName").val();
		var questionfood2FourEmail = $("#questionfoodtwoFourEmail").val();
		var questionfood2FiveName = $("#questionfoodtwoFiveName").val();
		var questionfood2FiveEmail = $("#questionfoodtwoFiveEmail").val();

		var questionfood3OneName = $('#questionfoodthreeOneName').val();
	   	var questionfood3OneEmail = $("#questionfoodthreeOneEmail").val();
		var questionfood3OneGrade = $("#questionfoodtwoOneGrade").val();
		var questionfood3TwoName = $('#questionfoodthreeOneName').val();
	   	var questionfood3TowEmail = $("#questionfoodthreeOneEmail").val();
		var questionfood3TwoGrade = $("#questionfoodtwoOneGrade").val();
		var questionfood3ThreeName = $('#questionfoodthreeThreeName').val();
	   	var questionfood3ThreeEmail = $("#questionfoodthreeThreeEmail").val();
		var questionfood3ThreeGrade = $("#questionfoodthreeThreeGrade").val();
		var questionfood3FourName = $('#questionfoodthreeFourName').val();
	   	var questionfood3FourEmail = $("#questionfoodthreeFourEmail").val();
		var questionfood3FourGrade = $("#questionfoodthreeFiveGrade").val();
		var questionfood3FiveName = $('#questionfoodthreeFiveName').val();
	   	var questionfood3FiveEmail = $("#questionfoodthreeFiveEmail").val();
		var questionfood3FiveGrade = $("#questionfoodthreeFiveGrade").val();
		var questionfood3SixName = $('#questionfoodthreeSixName').val();
	   	var questionfood3SixEmail = $("#questionfoodthreeSixEmail").val();
		var questionfood3SixGrade = $("#questionfoodthreeSixGrade").val();
		var questionfood3SevenName = $('#questionfoodthreeSevenName').val();
	   	var questionfood3SevenEmail = $("#questionfoodthreeSevenEmail").val();
		var questionfood3SevenGrade = $("#questionfoodthreeSevenGrade").val();
		var questionfood3EightName = $('#questionfoodthreeEightName').val();
	   	var questionfood3EightEmail = $("#questionfoodthreeEightEmail").val();
		var questionfood3EightGrade = $("#questionfoodthreeEightGrade").val();
		var questionfood3NineName = $('#questionfoodthreeNineName').val();
	   	var questionfood3NineEmail = $("#questionfoodthreeNineEmail").val();
		var questionfood3NineGrade = $("#questionfoodthreeNineGrade").val();
		var questionfood3TenName = $('#questionfoodthreeTenName').val();
	   	var questionfood3TenEmail = $("#questionfoodthreeTenEmail").val();
		var questionfood3TenGrade = $("#questionfoodthreeTenGrade").val();
		
		var questionfood4 = $scope.questionfoodfour.choice; 

		var questionfood5 = $scope.questionfoodfive.choice;

		var questionfood5File = $("#questionfoodsix").val();

		var questionfood7OnePlease = $("#questionfoodsevenOnePlease").val(); 
		var questionfood7OneTotal = $("#questionfoodsevenOneTotal").val();
		var questionfood7OneMonth = $("#questionfoodsevenOneMonth").val(); 
		var questionfood7TwoPlease = $("#questionfoodsevenTwoPlease").val(); 
		var questionfood7TwoTotal = $("#questionfoodsevenTwoTotal").val();
		var questionfood7TwoMonth = $("#questionfoodsevenTwoMonth").val(); 
		var questionfood7ThreePlease = $("#questionfoodsevenThreePlease").val(); 
		var questionfood7ThreeTotal = $("#questionfoodsevenThreeTotal").val();
		var questionfood7ThreeMonth = $("#questionfoodsevenThreeMonth").val(); 
		var questionfood7FourPlease = $("#questionfoodsevenFourPlease").val(); 
		var questionfood7FourTotal = $("#questionfoodsevenFourTotal").val();
		var questionfood7FourMonth = $("#questionfoodsevenFourMonth").val(); 
		var questionfood7FivePlease = $("#questionfoodsevenFivePlease").val(); 
		var questionfood7FiveTotal = $("#questionfoodsevenFiveTotal").val();
		var questionfood7FiveMonth = $("#questionfoodsevenFiveMonth").val(); 
		var questionfood7SixPlease = $("#questionfoodsevenSixPlease").val(); 
		var questionfood7SixTotal = $("#questionfoodsevenSixTotal").val();
		var questionfood7SixMonth = $("#questionfoodsevenSixMonth").val(); 
		var questionfood7SevenPlease = $("#questionfoodsevenSevenPlease").val(); 
		var questionfood7SevenTotal = $("#questionfoodsevenSevenTotal").val();
		var questionfood7SevenMonth = $("#questionfoodsevenSevenMonth").val(); 
		var questionfood7EightPlease = $("#questionfoodsevenEightPlease").val(); 
		var questionfood7EightTotal = $("#questionfoodsevenEightTotal").val();
		var questionfood7EightMonth = $("#questionfoodsevenEightMonth").val(); 
		var questionfood7NinePlease = $("#questionfoodsevenNinePlease").val(); 
		var questionfood7NineTotal = $("#questionfoodsevenNineTotal").val();
		var questionfood7NineMonth = $("#questionfoodsevenNineMonth").val(); 

		var questionfood8 = $("#questionfoodeight").val(); 

		var questionfood9 = $scope.questionfoodnine.choice; 

		var questionfood10 = $scope.questionfoodten.choice; 

		var questionfood11 = $scope.questionfoodeleven.choice;

		var questionfood12 = $scope.questionfoodtwelve.choice;

		var questionfood13 = $scope.questionfoodthirteen.choice;

		
 		var token = $('#token').val();
 		var food = {
 			"id":$rootScope.id,
 			'token' : $scope.token,
 			"266617X36X2501SQ001_SQ001" : questionfood1onename,
		   	"266617X36X2501SQ001_SQ002" : questionfood1oneemail,
		   	"266617X36X2501SQ002_SQ001" : questionfood1twoname,
		   	"266617X36X2501SQ002_SQ002" : questionfood1twoname,
		   	"266617X36X2501SQ003_SQ001" : questionfood1threename,
		   	"266617X36X2501SQ003_SQ002" : questionfood1threeemail,

		   	"266617X36X2502SQ001_SQ001" : questionfood2OneName,
		   	"266617X36X2502SQ001_SQ002" : questionfood2OneEmail,
		   	"266617X36X2502SQ002_SQ001" : questionfood2TwoName,
		   	"266617X36X2502SQ002_SQ002" : questionfood2TwoEmail,
		   	"266617X36X2502SQ003_SQ001" : questionfood2ThreeName,
		   	"266617X36X2502SQ003_SQ002" : questionfood2ThreeEmail,
		   	"266617X36X2502SQ004_SQ001" : questionfood2FourName,
		   	"266617X36X2502SQ004_SQ002" : questionfood2FourEmail,
		   	"266617X36X2502SQ005_SQ001" : questionfood2FiveName,
		   	"266617X36X2502SQ005_SQ002" : questionfood2FiveEmail,

		   	"266617X36X2503SQ001_SQ001" : questionfood3OneName,
		   	"266617X36X2503SQ001_SQ002" : questionfood3OneEmail,
		   	"266617X36X2503SQ001_SQ003" : questionfood3OneGrade,
		   	"266617X36X2503SQ002_SQ001" : questionfood3TwoName,
		   	"266617X36X2503SQ002_SQ002" : questionfood3TowEmail,
		   	"266617X36X2503SQ002_SQ003" : questionfood3TwoGrade,
		   	"266617X36X2503SQ003_SQ001" : questionfood3ThreeName,
		   	"266617X36X2503SQ003_SQ002" : questionfood3ThreeEmail,
		   	"266617X36X2503SQ003_SQ003" : questionfood3ThreeGrade,
		   	"266617X36X2503SQ004_SQ001" : questionfood3FourName,
		   	"266617X36X2503SQ004_SQ002" : questionfood3FourEmail,
		   	"266617X36X2503SQ004_SQ003" : questionfood3FiveGrade,
		   	"266617X36X2503SQ005_SQ001" : questionfood3FiveName,
		   	"266617X36X2503SQ005_SQ002" : questionfood3FiveEmail,
		   	"266617X36X2503SQ005_SQ003" : questionfood3FiveGrade,
		   	"266617X36X2503SQ006_SQ001" : questionfood3SixName,
		   	"266617X36X2503SQ006_SQ002" : questionfood3SixEmail,
		   	"266617X36X2503SQ006_SQ003" : questionfood3SixGrade,
		   	"266617X36X2503SQ007_SQ001" : questionfood3SevenName,
		   	"266617X36X2503SQ007_SQ002" : questionfood3SevenEmail,
		   	"266617X36X2503SQ007_SQ003" : questionfood3SevenGrade,
		   	"266617X36X2503SQ008_SQ001" : questionfood3EightName,
		   	"266617X36X2503SQ008_SQ002" : questionfood3EightEmail,
		   	"266617X36X2503SQ008_SQ003" : questionfood3EightGrade,
		   	"266617X36X2503SQ009_SQ001" : questionfood3NineName,
		   	"266617X36X2503SQ009_SQ002" : questionfood3NineEmail,
		   	"266617X36X2503SQ009_SQ003" : questionfood3NineGrade,
		   	"266617X36X2503SQ010_SQ001" : questionfood3TenName,
		   	"266617X36X2503SQ010_SQ002" : questionfood3TenEmail,
		   	"266617X36X2503SQ010_SQ003" : questionfood3TenGrade,

		   	"266617X36X1858" : questionfood4,

		   	"266617X36X1859" : questionfood5,

		   	"266617X36X2665" : questionfood5File,
		   	"266617X36X2665_filecount" : 2,

		   	"266617X36X1871SQ001_SQ001" : questionfood7OnePlease,
		   	"266617X36X1871SQ001_SQ002" : questionfood7OneMonth,
		   	"266617X36X1871SQ001_SQ001" : questionfood7OneTotal,
			"266617X36X1871SQ002_SQ001" : questionfood7TwoPlease,
		   	"266617X36X1871SQ002_SQ002" : questionfood7TwoMonth,
		   	"266617X36X1871SQ002_SQ001" : questionfood7TwoTotal,
		   	"266617X36X1871SQ003_SQ001" : questionfood7ThreePlease,
		   	"266617X36X1871SQ003_SQ002" : questionfood7ThreeMonth,
		   	"266617X36X1871SQ003_SQ001" : questionfood7ThreeTotal,
		   	"266617X36X1871SQ004_SQ001" : questionfood7FourPlease,
		   	"266617X36X1871SQ004_SQ002" : questionfood7FourMonth,
		   	"266617X36X1871SQ004_SQ001" : questionfood7FourTotal,
		   	"266617X36X1871SQ005_SQ001" : questionfood7FivePlease,
		   	"266617X36X1871SQ005_SQ002" : questionfood7FiveMonth,
		   	"266617X36X1871SQ005_SQ001" : questionfood7FiveTotal,
		   	"266617X36X1871SQ006_SQ001" : questionfood7SixPlease,
		   	"266617X36X1871SQ006_SQ002" : questionfood7SixMonth,
		   	"266617X36X1871SQ006_SQ001" : questionfood7SixTotal,
		   	"266617X36X1871SQ007_SQ001" : questionfood7SevenPlease,
		   	"266617X36X1871SQ007_SQ002" : questionfood7SevenMonth,
		   	"266617X36X1871SQ007_SQ001" : questionfood7SevenTotal,
		   	"266617X36X1871SQ008_SQ001" : questionfood7EightPlease,
		   	"266617X36X1871SQ008_SQ002" : questionfood7EightMonth,
		   	"266617X36X1871SQ008_SQ001" : questionfood7EightTotal,
		   	"266617X36X1871SQ009_SQ001" : questionfood7NinePlease,
		   	"266617X36X1871SQ009_SQ002" : questionfood7NineMonth,
		   	"266617X36X1871SQ009_SQ001" : questionfood7NineTotal,

		   	"266617X36X2667" : questionfood8,
		   	"266617X36X2667_filecount" : 2,

		   	"266617X36X2238" : questionfood9,

		   	"266617X36X2246" : questionfood10,

		   	"266617X36X1864" : questionfood11,

		   	"266617X36X1866" : questionfood12,

		   	"266617X36X1868" : questionfood13





	   		
 		};
 
 		$.ajax({
   			 url: "http://studiotesseract.co/green-school/submit-aswer.php",
    		 type: "POST",
    		 data: {data:food},
      			success:function(data) {
        		console.log(data);
             },
  	   			error:function(xhr) {
          		alert('error');
             }
  		});
		
	 	$state.go('app.land');
	 	// $window.location.reload(true);
	 }