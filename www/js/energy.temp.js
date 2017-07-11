$scope.questionenergyfour.choice = $rootScope.questionenergyfour;
	 $scope.questionenergyfive.choice = $rootScope.questionenergyfive;
	 $scope.questionenergyten.choice = $rootScope.questionenergyten;
	 $scope.token = $rootScope.token;
	 $scope.quiz2=function(){
	 	var questionenergy1onename = $('#energyoneName').val();
	   	var questionenergy1oneemail = $("#energyoneEmail").val();
		var questionenergy1twoname = $("#energytwoName").val();
		var questionenergy1twoemail = $("#energytwoEmail").val();
		var questionenergy1threename = $("#energythreeName").val();
		var questionenergy1threeemail = $("#energythreeEmail").val();

		var questionenergy2OneName = $('#questionenergytwoOneName').val();
	   	var questionenergy2OneEmail = $("#questionenergytwoOneEmail").val();
		var questionenergy2TwoName = $("#questionenergytwoTwoName").val();
		var questionenergy2TwoEmail = $("#questionenergytwoTwoEmail").val();
		var questionenergy2ThreeName = $("#questionenergytwoThreeName").val();
		var questionenergy2ThreeEmail = $("#questionenergytwoThreeEmail").val();
		var questionenergy2FourName = $("#questionenergytwoFourName").val();
		var questionenergy2FourEmail = $("#questionenergytwoFourEmail").val();
		var questionenergy2FiveName = $("#questionenergytwoFiveName").val();
		var questionenergy2FiveEmail = $("#questionenergytwoFiveEmail").val();

		var questionenergy3OneName = $('#questionenergythreeOneName').val();
	   	var questionenergy3OneEmail = $("#questionenergythreeOneEmail").val();
		var questionenergy3OneGrade = $("#questionenergytwoOneGrade").val();
		var questionenergy3TwoName = $('#questionenergythreeOneName').val();
	   	var questionenergy3TowEmail = $("#questionenergythreeOneEmail").val();
		var questionenergy3TwoGrade = $("#questionenergytwoOneGrade").val();
		var questionenergy3ThreeName = $('#questionenergythreeThreeName').val();
	   	var questionenergy3ThreeEmail = $("#questionenergythreeThreeEmail").val();
		var questionenergy3ThreeGrade = $("#questionenergythreeThreeGrade").val();
		var questionenergy3FourName = $('#questionenergythreeFourName').val();
	   	var questionenergy3FourEmail = $("#questionenergythreeFourEmail").val();
		var questionenergy3FourGrade = $("#questionenergythreeFiveGrade").val();
		var questionenergy3FiveName = $('#questionenergythreeFiveName').val();
	   	var questionenergy3FiveEmail = $("#questionenergythreeFiveEmail").val();
		var questionenergy3FiveGrade = $("#questionenergythreeFiveGrade").val();
		var questionenergy3SixName = $('#questionenergythreeSixName').val();
	   	var questionenergy3SixEmail = $("#questionenergythreeSixEmail").val();
		var questionenergy3SixGrade = $("#questionenergythreeSixGrade").val();
		var questionenergy3SevenName = $('#questionenergythreeSevenName').val();
	   	var questionenergy3SevenEmail = $("#questionenergythreeSevenEmail").val();
		var questionenergy3SevenGrade = $("#questionenergythreeSevenGrade").val();
		var questionenergy3EightName = $('#questionenergythreeEightName').val();
	   	var questionenergy3EightEmail = $("#questionenergythreeEightEmail").val();
		var questionenergy3EightGrade = $("#questionenergythreeEightGrade").val();
		var questionenergy3NineName = $('#questionenergythreeNineName').val();
	   	var questionenergy3NineEmail = $("#questionenergythreeNineEmail").val();
		var questionenergy3NineGrade = $("#questionenergythreeNineGrade").val();
		var questionenergy3TenName = $('#questionenergythreeTenName').val();
	   	var questionenergy3TenEmail = $("#questionenergythreeTenEmail").val();
		var questionenergy3TenGrade = $("#questionenergythreeTenGrade").val();
		
		var questionenergy4 = $scope.questionenergyfour.choice;

		var questionenergy5 = $scope.questionenergyfive.choice;

		var questionenergy6OneSource = $('#questionenergysixOneSource').val();
		var questionenergy6OneQuantity = $('#questionenergysixOneQuantity').val();
		var questionenergy6OneEnergy = $('#questionenergysixOneEnergy').val();
		var questionenergy6TwoSource = $('#questionenergysixTwoSource').val();
		var questionenergy6TwoQuantity = $('#questionenergysixTwoQuantity').val();
		var questionenergy6TwoEnergy = $('#questionenergysixTwoEnergy').val();
	 	var questionenergy6ThreeSource = $('#questionenergysixThreeSource').val();
		var questionenergy6ThreeQuantity = $('#questionenergysixThreeQuantity').val();
		var questionenergy6ThreeEnergy = $('#questionenergysixThreeEnergy').val();
	 	var questionenergy6FourSource = $('#questionenergysixFourSource').val();
		var questionenergy6FourQuantity = $('#questionenergysixFourQuantity').val();
		var questionenergy6FourEnergy = $('#questionenergysixFourEnergy').val();
	 	var questionenergy6FiveSource = $('#questionenergysixFiveSource').val();
		var questionenergy6FiveQuantity = $('#questionenergysixFiveQuantity').val();
		var questionenergy6FiveEnergy = $('#questionenergysixFiveEnergy').val();
	 	var questionenergy6SixSource = $('#questionenergysixSixSource').val();
		var questionenergy6SixQuantity = $('#questionenergysixSixQuantity').val();
		var questionenergy6SixEnergy = $('#questionenergysixSixEnergy').val();
	 	var questionenergy6SevenSource = $('#questionenergysixSevenSource').val();
		var questionenergy6SevenQuantity = $('#questionenergysixSevenQuantity').val();
		var questionenergy6SevenEnergy = $('#questionenergysixSevenEnergy').val();
	 	var questionenergy6EightSource = $('#questionenergysixEightSource').val();
		var questionenergy6EightQuantity = $('#questionenergysixEightQuantity').val();
		var questionenergy6EightEnergy = $('#questionenergysixEightEnergy').val();
	 	var questionenergy6NineSource = $('#questionenergysixNineSource').val();
		var questionenergy6NineQuantity = $('#questionenergysixNineQuantity').val();
		var questionenergy6NineEnergy = $('#questionenergysixNineEnergy').val();
	 	var questionenergy6TenSource = $('#questionenergysixTenSource').val();
		var questionenergy6TenQuantity = $('#questionenergysixTenQuantity').val();
		var questionenergy6TenEnergy = $('#questionenergysixTenEnergy').val();
	 	var questionenergy6ElevenSource = $('#questionenergysixElevenSource').val();
		var questionenergy6ElevenQuantity = $('#questionenergysixElevenQuantity').val();
		var questionenergy6ElevenEnergy = $('#questionenergysixElevenEnergy').val();
	 	var questionenergy6TwelveSource = $('#questionenergysixTwelveSource').val();
		var questionenergy6TwelveQuantity = $('#questionenergysixTwelveQuantity').val();
		var questionenergy6TwelveEnergy = $('#questionenergysixTwelveEnergy').val();
	 	
	 	var questionenergy7OneNumber = $('#questionenergysevenOneNumber').val();
		var questionenergy7OneSize = $('#questionenergysevenOneSize').val();
		var questionenergy7OneBEE = $('#questionenergysevenOneBEE').val();
		var questionenergy7TwoNumber = $('#questionenergysevenTwoNumber').val();
		var questionenergy7TwoSize = $('#questionenergysevenTwoSize').val();
		var questionenergy7TwoBEE = $('#questionenergysevenTwoBEE').val();
		var questionenergy7ThreeNumber = $('#questionenergysevenThreeNumber').val();
		var questionenergy7ThreeSize = $('#questionenergysevenThreeSize').val();
		var questionenergy7ThreeBEE = $('#questionenergysevenThreeBEE').val();
		var questionenergy7FourNumber = $('#questionenergysevenFourNumber').val();
		var questionenergy7FourSize = $('#questionenergysevenFourSize').val();
		var questionenergy7FourBEE = $('#questionenergysevenFourBEE').val();
		var questionenergy7FiveNumber = $('#questionenergysevenFiveNumber').val();
		var questionenergy7FiveSize = $('#questionenergysevenFiveSize').val();
		var questionenergy7FiveBEE = $('#questionenergysevenFiveBEE').val();
		var questionenergy7SixNumber = $('#questionenergysevenSixNumber').val();
		var questionenergy7SixSize = $('#questionenergysevenSixSize').val();
		var questionenergy7SixBEE = $('#questionenergysevenSixBEE').val();
		var questionenergy7SevenNumber = $('#questionenergysevenSevenNumber').val();
		var questionenergy7SevenSize = $('#questionenergysevenSevenSize').val();
		var questionenergy7SevenBEE = $('#questionenergysevenSevenBEE').val();
				
		var questionenergy8 = $("#questionenergyeight").val();
		var questionenergy9 = $("#questionenergynine").val();
		var questionenergy10 = $scope.questionenergyten.choice;
		var questionenergy11 = $("#questionenergyeleven").val();
		var questionenergy11Count = 2;
				
		var token = $('#token').val();
		
		var energy = {
			id : $rootScope.id,
			"token" : $scope.token,
			"266617X8X2491SQ001_SQ001" : questionenergy1onename,
		   	"266617X8X2491SQ001_SQ002" : questionenergy1oneemail,
		   	"266617X8X2491SQ002_SQ001" : questionenergy1twoname,
		   	"266617X8X2491SQ002_SQ002" : questionenergy1twoname,
		   	"266617X8X2491SQ003_SQ001" : questionenergy1threename,
		   	"266617X8X2491SQ003_SQ002" : questionenergy1threeemail,

		   	"266617X8X2492SQ001_SQ001" : questionenergy2OneName,
		   	"266617X8X2492SQ001_SQ002" : questionenergy2OneEmail,
		   	"266617X8X2492SQ002_SQ001" : questionenergy2TwoName,
		   	"266617X8X2492SQ002_SQ002" : questionenergy2TwoEmail,
		   	"266617X8X2492SQ003_SQ001" : questionenergy2ThreeName,
		   	"266617X8X2492SQ003_SQ002" : questionenergy2ThreeEmail,
		   	"266617X8X2492SQ004_SQ001" : questionenergy2FourName,
		   	"266617X8X2492SQ004_SQ002" : questionenergy2FourEmail,
		   	"266617X8X2492SQ005_SQ001" : questionenergy2FiveName,
		   	"266617X8X2492SQ005_SQ002" : questionenergy2FiveEmail,

		   	"266617X8X2493SQ001_SQ001" : questionenergy3OneName,
		   	"266617X8X2493SQ001_SQ002" : questionenergy3OneEmail,
		   	"266617X8X2493SQ001_SQ003" : questionenergy3OneGrade,
		   	"266617X8X2493SQ002_SQ001" : questionenergy3TwoName,
		   	"266617X8X2493SQ002_SQ002" : questionenergy3TowEmail,
		   	"266617X8X2493SQ002_SQ003" : questionenergy3TwoGrade,
		   	"266617X8X2493SQ003_SQ001" : questionenergy3ThreeName,
		   	"266617X8X2493SQ003_SQ002" : questionenergy3ThreeEmail,
		   	"266617X8X2493SQ003_SQ003" : questionenergy3ThreeGrade,
		   	"266617X8X2493SQ004_SQ001" : questionenergy3FourName,
		   	"266617X8X2493SQ004_SQ002" : questionenergy3FourEmail,
		   	"266617X8X2493SQ004_SQ003" : questionenergy3FiveGrade,
		   	"266617X8X2493SQ005_SQ001" : questionenergy3FiveName,
		   	"266617X8X2493SQ005_SQ002" : questionenergy3FiveEmail,
		   	"266617X8X2493SQ005_SQ003" : questionenergy3FiveGrade,
		   	"266617X8X2493SQ006_SQ001" : questionenergy3SixName,
		   	"266617X8X2493SQ006_SQ002" : questionenergy3SixEmail,
		   	"266617X8X2493SQ006_SQ003" : questionenergy3SixGrade,
		   	"266617X8X2493SQ007_SQ001" : questionenergy3SevenName,
		   	"266617X8X2493SQ007_SQ002" : questionenergy3SevenEmail,
		   	"266617X8X2493SQ007_SQ003" : questionenergy3SevenGrade,
		   	"266617X8X2493SQ008_SQ001" : questionenergy3EightName,
		   	"266617X8X2493SQ008_SQ002" : questionenergy3EightEmail,
		   	"266617X8X2493SQ008_SQ003" : questionenergy3EightGrade,
		   	"266617X8X2493SQ009_SQ001" : questionenergy3NineName,
		   	"266617X8X2493SQ009_SQ002" : questionenergy3NineEmail,
		   	"266617X8X2493SQ009_SQ003" : questionenergy3NineGrade,
		   	"266617X8X2493SQ010_SQ001" : questionenergy3TenName,
		   	"266617X8X2493SQ010_SQ002" : questionenergy3TenEmail,
		   	"266617X8X2493SQ010_SQ003" : questionenergy3TenGrade,
	   			   	
		   	"266617X8X237" : questionenergy4,
		   	"266617X8X2274":questionenergy5,

		   	"266617X8X2180SQ001_SQ001" : questionenergy6OneSource,
		  	"266617X8X2180SQ001_SQ002" : questionenergy6OneQuantity,
		   	"266617X8X2180SQ001_SQ003" : questionenergy6OneEnergy,
		   	"266617X8X2180SQ002_SQ001" : questionenergy6TwoSource,
		  	"266617X8X2180SQ002_SQ002" : questionenergy6TwoQuantity,
		   	"266617X8X2180SQ002_SQ003" : questionenergy6TwoEnergy,
		   	"266617X8X2180SQ003_SQ001" : questionenergy6ThreeSource,
		  	"266617X8X2180SQ003_SQ002" : questionenergy6ThreeQuantity,
		   	"266617X8X2180SQ003_SQ003" : questionenergy6ThreeEnergy,
		   	"266617X8X2180SQ004_SQ001" : questionenergy6FourSource,
		  	"266617X8X2180SQ004_SQ002" : questionenergy6FourQuantity,
		   	"266617X8X2180SQ004_SQ003" : questionenergy6FourEnergy,
		   	"266617X8X2180SQ005_SQ001" : questionenergy6FiveSource,
		  	"266617X8X2180SQ005_SQ002" : questionenergy6FiveQuantity,
		   	"266617X8X2180SQ005_SQ003" : questionenergy6FiveEnergy,
		   	"266617X8X2180SQ006_SQ001" : questionenergy6SixSource,
		  	"266617X8X2180SQ006_SQ002" : questionenergy6SixQuantity,
		   	"266617X8X2180SQ006_SQ003" : questionenergy6SixEnergy,
		   	"266617X8X2180SQ007_SQ001" : questionenergy6SevenSource,
		  	"266617X8X2180SQ007_SQ002" : questionenergy6SevenQuantity,
		   	"266617X8X2180SQ007_SQ003" : questionenergy6SevenEnergy,
		   	"266617X8X2180SQ008_SQ001" : questionenergy6EightSource,
		  	"266617X8X2180SQ008_SQ002" : questionenergy6EightQuantity,
		   	"266617X8X2180SQ008_SQ003" : questionenergy6EightEnergy,
		   	"266617X8X2180SQ009_SQ001" : questionenergy6NineSource,
		  	"266617X8X2180SQ009_SQ002" : questionenergy6NineQuantity,
		   	"266617X8X2180SQ009_SQ003" : questionenergy6NineEnergy,
		   	"266617X8X2180SQ010_SQ001" : questionenergy6TenSource,
		  	"266617X8X2180SQ010_SQ002" : questionenergy6TenQuantity,
		   	"266617X8X2180SQ010_SQ003" : questionenergy6TenEnergy,
		   	"266617X8X2180SQ011_SQ001" : questionenergy6ElevenSource,
		  	"266617X8X2180SQ011_SQ002" : questionenergy6ElevenQuantity,
		   	"266617X8X2180SQ011_SQ003" : questionenergy6ElevenEnergy,
		   	"266617X8X2180SQ013_SQ001" : questionenergy6TwelveSource,
		  	"266617X8X2180SQ013_SQ002" : questionenergy6TwelveQuantity,
		   	"266617X8X2180SQ013_SQ003" : questionenergy6TwelveEnergy,

		   	"266617X8X2415SQ001_SQ001" : questionenergy7OneNumber,
		   	"266617X8X2415SQ001_SQ002" : questionenergy7OneSize,
		   	"266617X8X2415SQ001_SQ003" : questionenergy7OneBEE,
		   	"266617X8X2415SQ002_SQ001" : questionenergy7TwoNumber,
		   	"266617X8X2415SQ002_SQ002" : questionenergy7TwoSize,
		   	"266617X8X2415SQ002_SQ003" : questionenergy7TwoBEE,
		   	"266617X8X2415SQ003_SQ001" : questionenergy7ThreeNumber,
		   	"266617X8X2415SQ003_SQ002" : questionenergy7ThreeSize,
		   	"266617X8X2415SQ003_SQ003" : questionenergy7ThreeBEE,
		   	"266617X8X2415SQ004_SQ001" : questionenergy7FourNumber,
		   	"266617X8X2415SQ004_SQ002" : questionenergy7FourSize,
		   	"266617X8X2415SQ004_SQ003" : questionenergy7FourBEE,
		   	"266617X8X2415SQ005_SQ001" : questionenergy7FiveNumber,
		   	"266617X8X2415SQ005_SQ002" : questionenergy7FiveSize,
		   	"266617X8X2415SQ005_SQ003" : questionenergy7FiveBEE,
		   	"266617X8X2415SQ006_SQ001" : questionenergy7SixNumber,
		   	"266617X8X2415SQ006_SQ002" : questionenergy7SixSize,
		   	"266617X8X2415SQ006_SQ003" : questionenergy7SixBEE,
		   	"266617X8X2415SQ007_SQ001" : questionenergy7SevenNumber,
		   	"266617X8X2415SQ007_SQ002" : questionenergy7SevenSize,
		   	"266617X8X2415SQ007_SQ003" : questionenergy7SevenBEE,

		   	"266617X8X2668" : questionenergy8,

		   	"266617X8X260" : questionenergy9,

		   	"266617X8X261" : questionenergy10,

		   	"266617X8X2634" : questionenergy11,
		   	"266617X8X2634_filecount" : questionenergy11Count
		   	
		   	 	
		};

		$.ajax({
   			 url: "http://studiotesseract.co/green-school/submit-aswer.php",
    		 type: "POST",
    		 data: {data:energy},
      			success:function(data) {
        		console.log(data);
             },
  	   			error:function(xhr) {
          		alert('error');
             }
  		});
	 