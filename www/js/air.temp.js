var onePercentx = 0;
	var onePercenty = 0;
	$("#questionairFiveOneArea").change(function()
	{
			onePercentx = parseInt($("#questionairFiveOneArea").val());
			$('#questionairFiveOnePercentage').val((onePercenty/onePercentx)*100);
			$('#questionairFiveTotalArea').val(onePercentx);

	});
	$("#questionairFiveOneSum").change(function()
	{
			onePercenty = parseInt($("#questionairFiveOneSum").val());
			$('#questionairFiveOnePercentage').val((onePercenty/onePercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty);
	});
	
	var twoPercentx = 0;
	var twoPercenty = 0;
	$("#questionairFiveTwoArea").change(function()
	{
			twoPercentx = parseInt($("#questionairFiveTwoArea").val());
			$('#questionairFiveTwoPercentage').val((twoPercenty/twoPercentx)*100);
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx); 
	});
	$("#questionairFiveTwoSum").change(function()
	{
			twoPercenty = parseInt($("#questionairFiveTwoSum").val());
			$('#questionairFiveTwoPercentage').val((twoPercenty/twoPercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty);
	});
	
	var threePercentx = 0;
	var threePercenty = 0;
	$("#questionairFiveThreeArea").change(function()
	{
			threePercentx = parseInt($("#questionairFiveThreeArea").val());
			$('#questionairFiveThreePercentage').val((threePercenty/threePercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx);
	});
	$("#questionairFiveThreeSum").change(function()
	{
			threePercenty = parseInt($("#questionairFiveThreeSum").val());
			$('#questionairFiveThreePercentage').val((threePercenty/threePercentx)*100);
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty); 
			
	});
	
	var fourPercentx = 0;
	var fourPercenty = 0;
	$("#questionairFiveFourArea").change(function()
	{
			fourPercentx = parseInt($("#questionairFiveFourArea").val());
			$('#questionairFiveFourPercentage').val((fourPercenty/fourPercentx)*100);
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx);
	});
	$("#questionairFiveFourSum").change(function()
	{
			fourPercenty = parseInt($("#questionairFiveFourSum").val());
			$('#questionairFiveFourPercentage').val((fourPercenty/fourPercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty);
	});
	
	var fivePercentx = 0;
	var fivePercenty = 0;
	$("#questionairFiveFiveArea").change(function()
	{
			fivePercentx = parseInt($("#questionairFiveFiveArea").val());
			$('#questionairFiveFivePercentage').val((fivePercenty/fivePercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx+fivePercentx);
	});
	$("#questionairFiveFiveSum").change(function()
	{
			fivePercenty = parseInt($("#questionairFiveFiveSum").val());
			$('#questionairFiveFivePercentage').val((fivePercenty/fivePercentx)*100);
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty+fivePercenty); 
	});
	
	var sixPercentx = 0;
	var sixPercenty = 0;
	$("#questionairFiveSixArea").change(function()
	{
			sixPercentx = parseInt($("#questionairFiveSixArea").val());
			$('#questionairFiveSixPercentage').val((sixPercenty/sixPercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx+fivePercentx+sixPercentx);
	});
	$("#questionairFiveSixSum").change(function()
	{
			sixPercenty = parseInt($("#questionairFiveSixSum").val());
			$('#questionairFiveSixPercentage').val((sixPercenty/sixPercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty+fivePercenty+sixPercenty);
	});
	
	var sevenPercentx = 0;
	var sevenPercenty = 0;
	$("#questionairFiveSevenArea").change(function()
	{
			sevenPercentx = parseInt($("#questionairFiveSevenArea").val());
			$('#questionairFiveSevenPercentage').val((sevenPercenty/sevenPercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx+fivePercentx+sixPercentx+sevenPercentx);
	});
	$("#questionairFiveSevenSum").change(function()
	{
			sevenPercenty = parseInt($("#questionairFiveSevenSum").val());
			$('#questionairFiveSevenPercentage').val((sevenPercenty/sevenPercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty+fivePercenty+sixPercenty+sevenPercenty);
	});
	
	var eightPercentx = 0;
	var eightPercenty = 0;
	$("#questionairFiveEightArea").change(function()
	{
			eightPercentx = parseInt($("#questionairFiveEightArea").val());
			$('#questionairFiveEightPercentage').val((eightPercenty/eightPercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx+fivePercentx+sixPercentx+sevenPercentx+eightPercentx);
	});
	$("#questionairFiveEightSum").change(function()
	{
			eightPercenty = parseInt($("#questionairFiveEightSum").val());
			$('#questionairFiveEightPercentage').val((eightPercenty/eightPercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty+fivePercenty+sixPercenty+sevenPercenty+eightPercenty);
	});
	
	var ninePercentx = 0;
	var ninePercenty = 0;
	$("#questionairFiveNineArea").change(function()
	{
			ninePercentx = parseInt($("#questionairFiveNineArea").val());
			$('#questionairFiveNinePercentage').val((ninePercenty/ninePercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx+fivePercentx+sixPercentx+sevenPercentx+eightPercentx+ninePercentx);
	});
	$("#questionairFiveNineSum").change(function()
	{
			ninePercenty = parseInt($("#questionairFiveNineSum").val());
			$('#questionairFiveNinePercentage').val((ninePercenty/ninePercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty+fivePercenty+sixPercenty+sevenPercenty+eightPercenty+ninePercenty);
	});
	
	var tenPercentx = 0;
	var tenPercenty = 0;
	
	$("#questionairFiveTenArea").change(function()
	{
			tenPercentx = parseInt($("#questionairFiveTenArea").val());
			$('#questionairFiveTenPercentage').val((tenPercenty/tenPercentx)*100); 
			$('#questionairFiveTotalArea').val(onePercentx+twoPercentx+threePercentx+fourPercentx+fivePercentx+sixPercentx+sevenPercentx+eightPercentx+ninePercentx+tenPercentx);
	});
	$("#questionairFiveTenSum").change(function()
	{
			tenPercenty = parseInt($("#questionairFiveTenSum").val());
			$('#questionairFiveTenPercentage').val((tenPercenty/tenPercentx)*100); 
			$('#questionairFiveTotalSum').val(onePercenty+twoPercenty+threePercenty+fourPercenty+fivePercenty+sixPercenty+sevenPercenty+eightPercenty+ninePercenty+tenPercenty);
	});
	/*

	$("#questionairSevenOneMode").change(function()
	{
		var x= $("#questionairSevenOneNonTeaching").val()
		var x = parseInt($("#questionairSevenOneNonTeaching").val())+ parseInt($("#questionairSevenOneMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val()) + parseInt($("#questionairSevenOneMode").val()));
			
	});
	$("#questionairSevenOneStudent").change(function()
	{
		$("#questionairSevenOneNonTeaching").val(parseInt($("#questionairSevenOneNonTeaching").val())+ parseInt($("#questionairSevenOneStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenOneStudent").val()));
	});
	$("#questionairSevenOneTeacher").change(function()
	{
		$("#questionairSevenOneNonTeaching").val(parseInt($("#questionairSevenOneNonTeaching").val())+ parseInt($("#questionairSevenOneTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenOneTeacher").val()));
	});
	$("#questionairSevenOneNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	
	$("#questionairSevenTwoMode").change(function()
	{
		$("#questionairSevenTwoNonTeaching").val(+parseInt($("#questionairSevenTwoNonTeaching").val())+ parseInt($("#questionairSevenTwoMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenTwoMode").val()));
			
	});
	$("#questionairSevenTwoStudent").change(function()
	{
		$("#questionairSevenTwoNonTeaching").val(+parseInt($("#questionairSevenTwoNonTeaching").val())+ parseInt($("#questionairSevenTwoStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenTwoStudent").val()));
	});
	$("#questionairSevenTwoTeacher").change(function()
	{
		$("#questionairSevenTwoNonTeaching").val(+parseInt($("#questionairSevenTwoNonTeaching").val())+ parseInt($("#questionairSevenTwoTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenTwoTeacher").val()));
	});
	$("#questionairSevenTwoNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenThreeMode").change(function()
	{
		$("#questionairSevenThreeNonTeaching").val(+parseInt($("#questionairSevenThreeNonTeaching").val())+ parseInt($("#questionairSevenThreeMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenThreeMode").val()));
			
	});
	$("#questionairSevenThreeStudent").change(function()
	{
		$("#questionairSevenThreeNonTeaching").val(+parseInt($("#questionairSevenThreeNonTeaching").val())+ parseInt($("#questionairSevenThreeStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenThreeStudent").val()));
	});
	$("#questionairSevenThreeTeacher").change(function()
	{
		$("#questionairSevenThreeNonTeaching").val(+parseInt($("#questionairSevenThreeNonTeaching").val())+ parseInt($("#questionairSevenThreeTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenThreeTeacher").val()));
	});
	$("#questionairSevenThreeNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenFourMode").change(function()
	{
		$("#questionairSevenFourNonTeaching").val(+parseInt($("#questionairSevenFourNonTeaching").val())+ parseInt($("#questionairSevenFourMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenFourMode").val()));
			
	});
	$("#questionairSevenFourStudent").change(function()
	{
		$("#questionairSevenFourNonTeaching").val(+parseInt($("#questionairSevenFourNonTeaching").val())+ parseInt($("#questionairSevenFourStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenFourStudent").val()));
	});
	$("#questionairSevenFourTeacher").change(function()
	{
		$("#questionairSevenFourNonTeaching").val(+parseInt($("#questionairSevenFourNonTeaching").val())+ parseInt($("#questionairSevenFourTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenFourTeacher").val()));
	});
	$("#questionairSevenFourNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenFiveMode").change(function()
	{
		$("#questionairSevenFiveNonTeaching").val(+parseInt($("#questionairSevenFiveNonTeaching").val())+ parseInt($("#questionairSevenFiveMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenFiveMode").val()));
			
	});
	$("#questionairSevenFiveStudent").change(function()
	{
		$("#questionairSevenFiveNonTeaching").val(+parseInt($("#questionairSevenFiveNonTeaching").val())+ parseInt($("#questionairSevenFiveStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenFiveStudent").val()));
	});
	$("#questionairSevenFiveTeacher").change(function()
	{
		$("#questionairSevenFiveNonTeaching").val(+parseInt($("#questionairSevenFiveNonTeaching").val())+ parseInt($("#questionairSevenFiveTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenFiveTeacher").val()));
	});
	$("#questionairSevenFiveNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenSixMode").change(function()
	{
		$("#questionairSevenSixNonTeaching").val(+parseInt($("#questionairSevenSixNonTeaching").val())+ parseInt($("#questionairSevenSixMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenSixMode").val()));
			
	});
	$("#questionairSevenSixStudent").change(function()
	{
		$("#questionairSevenSixNonTeaching").val(+parseInt($("#questionairSevenSixNonTeaching").val())+ parseInt($("#questionairSevenSixStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenSixStudent").val()));
	});
	$("#questionairSevenSixTeacher").change(function()
	{
		$("#questionairSevenSixNonTeaching").val(+parseInt($("#questionairSevenSixNonTeaching").val())+ parseInt($("#questionairSevenSixTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenSixTeacher").val()));
	});
	$("#questionairSevenSixNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenSevenMode").change(function()
	{
		$("#questionairSevenSevenNonTeaching").val(+parseInt($("#questionairSevenSevenNonTeaching").val())+ parseInt($("#questionairSevenSevenMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenSevenMode").val()));
			
	});
	$("#questionairSevenSevenStudent").change(function()
	{
		$("#questionairSevenSevenNonTeaching").val(+parseInt($("#questionairSevenSevenNonTeaching").val())+ parseInt($("#questionairSevenSevenStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenSevenStudent").val()));
	});
	$("#questionairSevenSevenTeacher").change(function()
	{
		$("#questionairSevenSevenNonTeaching").val(+parseInt($("#questionairSevenSevenNonTeaching").val())+ parseInt($("#questionairSevenSevenTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenSevenTeacher").val()));
	});
	$("#questionairSevenSevenNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenEightMode").change(function()
	{
		$("#questionairSevenEightNonTeaching").val(+parseInt($("#questionairSevenEightNonTeaching").val())+ parseInt($("#questionairSevenEightMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenEightMode").val()));
			
	});
	$("#questionairSevenEightStudent").change(function()
	{
		$("#questionairSevenEightNonTeaching").val(+parseInt($("#questionairSevenEightNonTeaching").val())+ parseInt($("#questionairSevenEightStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenEightStudent").val()));
	});
	$("#questionairSevenEightTeacher").change(function()
	{
		$("#questionairSevenEightNonTeaching").val(+parseInt($("#questionairSevenEightNonTeaching").val())+ parseInt($("#questionairSevenEightTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenEightTeacher").val()));
	});
	$("#questionairSevenEightNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenNineMode").change(function()
	{
		$("#questionairSevenNineNonTeaching").val(+parseInt($("#questionairSevenNineNonTeaching").val())+ parseInt($("#questionairSevenNineMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenNineMode").val()));
			
	});
	$("#questionairSevenNineStudent").change(function()
	{
		$("#questionairSevenNineNonTeaching").val(+parseInt($("#questionairSevenNineNonTeaching").val())+ parseInt($("#questionairSevenNineStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenNineStudent").val()));
	});
	$("#questionairSevenNineTeacher").change(function()
	{
		$("#questionairSevenNineNonTeaching").val(+parseInt($("#questionairSevenNineNonTeaching").val())+ parseInt($("#questionairSevenNineTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenNineTeacher").val()));
	});
	$("#questionairSevenNineNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	$("#questionairSevenTenMode").change(function()
	{
		$("#questionairSevenTenNonTeaching").val(+parseInt($("#questionairSevenTenNonTeaching").val())+ parseInt($("#questionairSevenTenMode").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenTenMode").val()));
			
	});
	$("#questionairSevenTenStudent").change(function()
	{
		$("#questionairSevenTenNonTeaching").val(+parseInt($("#questionairSevenTenNonTeaching").val())+ parseInt($("#questionairSevenTenStudent").val()));
		$("#Total1").val(+parseInt($("#Total1").val())+ parseInt($("#questionairSevenTenStudent").val()));
	});
	$("#questionairSevenTenTeacher").change(function()
	{
		$("#questionairSevenTenNonTeaching").val(+parseInt($("#questionairSevenTenNonTeaching").val())+ parseInt($("#questionairSevenTenTeacher").val()));
		$("#Total3").val(+parseInt($("#Total3").val())+ parseInt($("#questionairSevenTenTeacher").val()));
	});
	$("#questionairSevenTenNonTeaching").change(function()
	{
			$("#Total4").val(+parseInt($("#Total4").val())+ parseInt($("#questionairSevenElevenNonTeaching").val()));
	});
	
*/
	$scope.questionairNine.choice = $rootScope.questionnineair
	 $scope.quiz2=function()
	 {
	 	var questionair1onename = $('#oneName').val();
	   	var questionair1oneemail = $("#oneEmail").val();
		var questionair1twoname = $("#twoName").val();
		var questionair1twoemail = $("#twoEmail").val();
		var questionair1threename = $("#threeName").val();
		var questionair1threeemail = $("#threeEmail").val();

		var questionair2OneName = $('#questionairtwoOneName').val();
	   	var questionair2OneEmail = $("#questionairtwoOneEmail").val();
		var questionair2TwoName = $("#questionairtwoTwoName").val();
		var questionair2TwoEmail = $("#questionairtwoTwoEmail").val();
		var questionair2ThreeName = $("#questionairtwoThreeName").val();
		var questionair2ThreeEmail = $("#questionairtwoThreeEmail").val();
		var questionair2FourName = $("#questionairtwoFourName").val();
		var questionair2FourEmail = $("#questionairtwoFourEmail").val();
		var questionair2FiveName = $("#questionairtwoFiveName").val();
		var questionair2FiveEmail = $("#questionairtwoFiveEmail").val();

		var questionair3OneName = $('#questionairthreeOneName').val();
	   	var questionair3OneEmail = $("#questionairthreeOneEmail").val();
		var questionair3OneGrade = $("#questionairtwoOneGrade").val();
		var questionair3TwoName = $('#questionairthreeOneName').val();
	   	var questionair3TowEmail = $("#questionairthreeOneEmail").val();
		var questionair3TwoGrade = $("#questionairtwoOneGrade").val();
		var questionair3ThreeName = $('#questionairthreeThreeName').val();
	   	var questionair3ThreeEmail = $("#questionairthreeThreeEmail").val();
		var questionair3ThreeGrade = $("#questionairthreeThreeGrade").val();
		var questionair3FourName = $('#questionairthreeFourName').val();
	   	var questionair3FourEmail = $("#questionairthreeFourEmail").val();
		var questionair3FourGrade = $("#questionairthreeFiveGrade").val();
		var questionair3FiveName = $('#questionairthreeFiveName').val();
	   	var questionair3FiveEmail = $("#questionairthreeFiveEmail").val();
		var questionair3FiveGrade = $("#questionairthreeFiveGrade").val();
		var questionair3SixName = $('#questionairthreeSixName').val();
	   	var questionair3SixEmail = $("#questionairthreeSixEmail").val();
		var questionair3SixGrade = $("#questionairthreeSixGrade").val();
		var questionair3SevenName = $('#questionairthreeSevenName').val();
	   	var questionair3SevenEmail = $("#questionairthreeSevenEmail").val();
		var questionair3SevenGrade = $("#questionairthreeSevenGrade").val();
		var questionair3EightName = $('#questionairthreeEightName').val();
	   	var questionair3EightEmail = $("#questionairthreeEightEmail").val();
		var questionair3EightGrade = $("#questionairthreeEightGrade").val();
		var questionair3NineName = $('#questionairthreeNineName').val();
	   	var questionair3NineEmail = $("#questionairthreeNineEmail").val();
		var questionair3NineGrade = $("#questionairthreeNineGrade").val();
		var questionair3TenName = $('#questionairthreeTenName').val();
	   	var questionair3TenEmail = $("#questionairthreeTenEmail").val();
		var questionair3TenGrade = $("#questionairthreeTenGrade").val();
		
		var questionair4 = $("#questionairFour").val();

		var questionair5OneDetails = $('#questionairFiveOneDetails').val();
	   	var questionair5OneArea = $("#questionairFiveOneArea").val();
		var questionair5OneSum = $("#questionairFiveOneSum").val();
		var questionair5OnePercentage = $('#questionairFiveOnePercentage').val((questionair5OneSum/questionair5OneArea)*100);
	   	var questionair5TwoDetails = $('#questionairFiveTwoDetails').val();
	   	var questionair5TwoArea = $("#questionairFiveTwoArea").val();
		var questionair5TwoSum = $("#questionairFiveTwoSum").val();
		var questionair5TwoPercentage = $('#questionairFiveTwoPercentage').val();
	   	var questionair5ThreeDetails = $('#questionairFiveThreeDetails').val();
	   	var questionair5ThreeArea = $("#questionairFiveThreeArea").val();
		var questionair5ThreeSum = $("#questionairFiveThreeSum").val();
		var questionair5ThreePercentage = $('#questionairFiveThreePercentage').val();
	   	var questionair5FourDetails = $('#questionairFiveFourDetails').val();
	   	var questionair5FourArea = $("#questionairFiveFourArea").val();
		var questionair5FourSum = $("#questionairFiveFourSum").val();
		var questionair5FourPercentage = $('#questionairFiveFourPercentage').val();
	   	var questionair5FiveDetails = $('#questionairFiveFiveDetails').val();
	   	var questionair5FiveArea = $("#questionairFiveFiveArea").val();
		var questionair5FiveSum = $("#questionairFiveFiveSum").val();
		var questionair5FivePercentage = $('#questionairFiveFivePercentage').val();
	   	var questionair5SixDetails = $('#questionairFiveSixDetails').val();
	   	var questionair5SixArea = $("#questionairFiveSixArea").val();
		var questionair5SixSum = $("#questionairFiveSixSum").val();
		var questionair5SixPercentage = $('#questionairFiveSixPercentage').val();
	   	var questionair5SevenDetails = $('#questionairFiveSevenDetails').val();
	   	var questionair5SevenArea = $("#questionairFiveSevenArea").val();
		var questionair5SevenSum = $("#questionairFiveSevenSum").val();
		var questionair5SevenPercentage = $('#questionairFiveSevenPercentage').val();
	   	var questionair5EightDetails = $('#questionairFiveEightDetails').val();
	   	var questionair5EightArea = $("#questionairFiveEightArea").val();
		var questionair5EightSum = $("#questionairFiveEightSum").val();
		var questionair5EightPercentage = $('#questionairFiveEightPercentage').val();
	   	var questionair5NineDetails = $('#questionairFiveNineDetails').val();
	   	var questionair5NineArea = $("#questionairFiveNineArea").val();
		var questionair5NineSum = $("#questionairFiveNineSum").val();
		var questionair5NinePercentage = $('#questionairFiveNinePercentage').val();
	   	var questionair5TenDetails = $('#questionairFiveTenDetails').val();
	   	var questionair5TenArea = $("#questionairFiveTenArea").val();
		var questionair5TenSum = $("#questionairFiveTenSum").val();
		var questionair5TenPercentage = $('#questionairFiveTenPercentage').val();
	   	
		var questionair6 = $scope.value.choice;

	 	var questionair7OneMode = $('#questionairSevenOneMode').val();
	   	var questionair7OneStudent = $("#questionairSevenOneStudent").val();
		var questionair7OneTeacher = $("#questionairSevenOneTeacher").val();
		var questionair7OneNonTeaching = $('#questionairSevenOneNonTeaching').val();
	   	var questionair7TwoMode = $('#questionairSevenTwoMode').val();
	   	var questionair7TwoStudent = $("#questionairSevenTwoStudent").val();
		var questionair7TwoTeacher = $("#questionairSevenTwoTeacher").val();
		var questionair7TwoNonTeaching = $('#questionairSevenTwoNonTeaching').val();
	   	var questionair7ThreeMode = $('#questionairSevenThreeMode').val();
	   	var questionair7ThreeStudent = $("#questionairSevenThreeStudent").val();
		var questionair7ThreeTeacher = $("#questionairSevenThreeTeacher").val();
		var questionair7ThreeNonTeaching = $('#questionairSevenThreeNonTeaching').val();
	   	var questionair7FourMode = $('#questionairSevenFourMode').val();
	   	var questionair7FourStudent = $("#questionairSevenFourStudent").val();
		var questionair7FourTeacher = $("#questionairSevenFourTeacher").val();
		var questionair7FourNonTeaching = $('#questionairSevenFiveNonTeaching').val();
	   	var questionair7FiveMode = $('#questionairSevenFiveMode').val();
	   	var questionair7FiveStudent = $("#questionairSevenFiveStudent").val();
		var questionair7FiveTeacher = $("#questionairSevenFiveTeacher").val();
		var questionair7FiveNonTeaching = $('#questionairSevenFiveNonTeaching').val();
	   	var questionair7SixMode = $('#questionairSevenSixMode').val();
	   	var questionair7SixStudent = $("#questionairSevenSixStudent").val();
		var questionair7SixTeacher = $("#questionairSevenSixTeacher").val();
		var questionair7SixNonTeaching = $('#questionairSevenSixNonTeaching').val();
	   	var questionair7SevenMode = $('#questionairSevenSevenMode').val();
	   	var questionair7SevenStudent = $("#questionairSevenSevenStudent").val();
		var questionair7SevenTeacher = $("#questionairSevenSevenTeacher").val();
		var questionair7SevenNonTeaching = $('#questionairSevenSevenNonTeaching').val();
	   	var questionair7EightMode = $('#questionairSevenEightMode').val();
	   	var questionair7EightStudent = $("#questionairSevenEightStudent").val();
		var questionair7EightTeacher = $("#questionairSevenEightTeacher").val();
		var questionair7EightNonTeaching = $('#questionairSevenEightNonTeaching').val();
	   	var questionair7NineMode = $('#questionairSevenNineMode').val();
	   	var questionair7NineStudent = $("#questionairSevenNineStudent").val();
		var questionair7NineTeacher = $("#questionairSevenNineTeacher").val();
		var questionair7NineNonTeaching = $('#questionairSevenNineNonTeaching').val();
	   	var questionair7TenMode = $('#questionairSevenTenMode').val();
	   	var questionair7TenStudent = $("#questionairSevenTenStudent").val();
		var questionair7TenTeacher = $("#questionairSevenTenTeacher").val();
		var questionair7TenNonTeaching = $('#questionairSevenTenNonTeaching').val();
	   	var questionair7ElevenMode = $('#questionairSevenElevenMode').val();
	   	var questionair7ElevenStudent = $("#questionairSevenElevenStudent").val();
		var questionair7ElevenTeacher = $("#questionairSevenElevenTeacher").val();
		var questionair7ElevenNonTeaching = $('#questionairSevenElevenNonTeaching').val();
	   	

	   	var questionair8 = $('#questionairEight').val();
	   	var questionair9 = $('#questionairNine').val();
	   	//var token = $('#token').val();
	   	var cg = true;
	   	if(questionair1onename == "")            
	   	{
            alert('Teacher\'s Name');
            $('#oneName').css({"border-color":"red"});
            cg=false;
        }
        if(questionair1oneemail == "")            
	   	{
            alert('Teacher\'s Name');
            $('#oneEmail').css({"border-color":"red"});
        	cg=false;
        }
        if(questionair1twoname == "")            
	   	{
            alert('Teacher\'s Name');
			$('#twoName').css({"border-color":"red"});
        	cg=false;
        }

        if(questionair1twoemail == "")
        {
        	alert('Teacher\'s Name');
			$('#twoEmail').css({"border-color":"red"});
        	cg=false;
        }
        if(questionair1threename == "")
        {
        	alert('Teacher\'s Name');
			$('#threeName').css({"border-color":"red"});	
        	cg=false;
        }                
	   	if(questionair1threeemail == "")
	   	{
	   		alert('Teacher\'s Email');
			$('#threeEmail').css({"border-color":"red"});	
        	cg=false;
	   	}

	   	
		if(questionair2OneName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairtwoOneName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair2TwoName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairtwoTwoName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair2ThreeName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairtwoThreeName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair2FourName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairtwoFourName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair2FiveName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairtwoFiveName').css({"border-color":"red"});	
        	cg=false;
	   	}

	   	if(questionair3OneName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeOneName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3TwoName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeTwoName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3ThreeName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeThreeName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3FourName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeFourName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3FiveName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeFiveName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3SixName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeSixName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3SevenName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeSevenName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3EightName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeEightName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3NineName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeNineName').css({"border-color":"red"});	
        	cg=false;
	   	}
	   	if(questionair3TenName == "")
	   	{
	   		alert('Administrative staff’s Name');
			$('#questionairthreeTenName').css({"border-color":"red"});	
        	cg=false;
	   	}

	   	var air = {
	   				"id" : $rootScope.id,
	   				"token" : $rootScope.token,
	   				"266617X4X2409SQ001_SQ001" : questionair1onename,
	   			   	"266617X4X2409SQ001_SQ002" : questionair1oneemail,
	   			   	"266617X4X2409SQ002_SQ001" : questionair1twoname,
	   			   	"266617X4X2409SQ002_SQ002" : questionair1twoname,
	   			   	"266617X4X2409SQ003_SQ001" : questionair1threename,
	   			   	"266617X4X2409SQ003_SQ002" : questionair1threeemail,

	   			   	"266617X4X2410SQ001_SQ001" : questionair2OneName,
	   			   	"266617X4X2410SQ001_SQ002" : questionair2OneEmail,
	   			   	"266617X4X2410SQ002_SQ001" : questionair2TwoName,
	   			   	"266617X4X2410SQ002_SQ002" : questionair2TwoEmail,
	   			   	"266617X4X2410SQ003_SQ001" : questionair2ThreeName,
	   			   	"266617X4X2410SQ003_SQ002" : questionair2ThreeEmail,
	   			   	"266617X4X2410SQ004_SQ001" : questionair2FourName,
	   			   	"266617X4X2410SQ004_SQ002" : questionair2FourEmail,
	   			   	"266617X4X2410SQ005_SQ001" : questionair2FiveName,
	   			   	"266617X4X2410SQ005_SQ002" : questionair2FiveEmail,
	   			   	
	   			   	"266617X4X2411SQ001_SQ001" : questionair3OneName,
	   			   	"266617X4X2411SQ001_SQ002" : questionair3OneEmail,
	   			   	"266617X4X2411SQ001_SQ003" : questionair3OneGrade,
	   			   	"266617X4X2411SQ002_SQ001" : questionair3TwoName,
	   			   	"266617X4X2411SQ002_SQ002" : questionair3TowEmail,
	   			   	"266617X4X2411SQ002_SQ003" : questionair3TwoGrade,
	   			   	"266617X4X2411SQ003_SQ001" : questionair3ThreeName,
	   			   	"266617X4X2411SQ003_SQ002" : questionair3ThreeEmail,
	   			   	"266617X4X2411SQ003_SQ003" : questionair3ThreeGrade,
	   			   	"266617X4X2411SQ004_SQ001" : questionair3FourName,
	   			   	"266617X4X2411SQ004_SQ002" : questionair3FourEmail,
	   			   	"266617X4X2411SQ004_SQ003" : questionair3FiveGrade,
	   			   	"266617X4X2411SQ005_SQ001" : questionair3FiveName,
	   			   	"266617X4X2411SQ005_SQ002" : questionair3FiveEmail,
	   			   	"266617X4X2411SQ005_SQ003" : questionair3FiveGrade,
	   			   	"266617X4X2411SQ006_SQ001" : questionair3SixName,
	   			   	"266617X4X2411SQ006_SQ002" : questionair3SixEmail,
	   			   	"266617X4X2411SQ006_SQ003" : questionair3SixGrade,
	   			   	"266617X4X2411SQ007_SQ001" : questionair3SevenName,
	   			   	"266617X4X2411SQ007_SQ002" : questionair3SevenEmail,
	   			   	"266617X4X2411SQ007_SQ003" : questionair3SevenGrade,
	   			   	"266617X4X2411SQ008_SQ001" : questionair3EightName,
	   			   	"266617X4X2411SQ008_SQ002" : questionair3EightEmail,
	   			   	"266617X4X2411SQ008_SQ003" : questionair3EightGrade,
	   			   	"266617X4X2411SQ009_SQ001" : questionair3NineName,
	   			   	"266617X4X2411SQ009_SQ002" : questionair3NineEmail,
	   			   	"266617X4X2411SQ009_SQ003" : questionair3NineGrade,
	   			   	"266617X4X2411SQ010_SQ001" : questionair3TenName,
	   			   	"266617X4X2411SQ010_SQ002" : questionair3TenEmail,
	   			   	"266617X4X2411SQ010_SQ003" : questionair3TenGrade,
	   			   	
	   			   	"266617X4X1127" : questionair4,

	   			   	"266617X4X2197SQ001_SQ001" : questionair5OneDetails,
	   			   	"266617X4X2197SQ001_SQ002" : questionair5OneArea,
	   			   	"266617X4X2197SQ001_SQ003" : questionair5OneSum,
	   			   	"266617X4X2197SQ001_SQ004" : questionair5OnePercentage,
	   			   	"266617X4X2197SQ002_SQ001" : questionair5TwoDetails,
	   			   	"266617X4X2197SQ002_SQ002" : questionair5TwoArea,
	   			   	"266617X4X2197SQ002_SQ003" : questionair5TwoSum,
	   			   	"266617X4X2197SQ002_SQ004" : questionair5TwoPercentage,
	   			   	"266617X4X2197SQ003_SQ001" : questionair5ThreeDetails,
	   			   	"266617X4X2197SQ003_SQ002" : questionair5ThreeArea,
	   			   	"266617X4X2197SQ003_SQ003" : questionair5ThreeSum,
	   			   	"266617X4X2197SQ003_SQ004" : questionair5ThreePercentage,
	   			   	"266617X4X2197SQ004_SQ001" : questionair5FourDetails,
	   			   	"266617X4X2197SQ004_SQ002" : questionair5FourArea,
	   			   	"266617X4X2197SQ004_SQ003" : questionair5FourSum,
	   			   	"266617X4X2197SQ004_SQ004" : questionair5FourPercentage,
	   			   	"266617X4X2197SQ005_SQ001" : questionair5FiveDetails,
	   			   	"266617X4X2197SQ005_SQ002" : questionair5FiveArea,
	   			   	"266617X4X2197SQ005_SQ003" : questionair5FiveSum,
	   			   	"266617X4X2197SQ005_SQ004" : questionair5FivePercentage,
	   			   	"266617X4X2197SQ006_SQ001" : questionair5SixDetails,
	   			   	"266617X4X2197SQ006_SQ002" : questionair5SixArea,
	   			   	"266617X4X2197SQ006_SQ003" : questionair5SixSum,
	   			   	"266617X4X2197SQ006_SQ004" : questionair5SixPercentage,
	   			   	"266617X4X2197SQ007_SQ001" : questionair5SevenDetails,
	   			   	"266617X4X2197SQ007_SQ002" : questionair5SevenArea,
	   			   	"266617X4X2197SQ007_SQ003" : questionair5SevenSum,
	   			   	"266617X4X2197SQ007_SQ004" : questionair5SevenPercentage,
	   			   	"266617X4X2197SQ008_SQ001" : questionair5EightDetails,
	   			   	"266617X4X2197SQ008_SQ002" : questionair5EightArea,
	   			   	"266617X4X2197SQ008_SQ003" : questionair5EightSum,
	   			   	"266617X4X2197SQ008_SQ004" : questionair5EightPercentage,
	   			   	"266617X4X2197SQ009_SQ001" : questionair5NineDetails,
	   			   	"266617X4X2197SQ009_SQ002" : questionair5NineArea,
	   			   	"266617X4X2197SQ009_SQ003" : questionair5NineSum,
	   			   	"266617X4X2197SQ009_SQ004" : questionair5NinePercentage,
	   			   	"266617X4X2197SQ010_SQ001" : questionair5TenDetails,
	   			   	"266617X4X2197SQ010_SQ002" : questionair5TenArea,
	   			   	"266617X4X2197SQ010_SQ003" : questionair5TenSum,
	   			   	"266617X4X2197SQ010_SQ004" : questionair5TenPercentage,
	   			   	
	   			   	"266617X4X164" : questionair6,

	   			   	"266617X4X176SQ001_SQ001": questionair7OneMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7OneStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7OneTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7OneNonTeaching,
	   			   	"266617X4X176SQ001_SQ001": questionair7TwoMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7TwoStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7TwoTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7TwoNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7ThreeMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7ThreeStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7ThreeTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7ThreeNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7FourMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7FourStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7FourTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7FourNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7FiveMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7FiveStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7FiveTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7FiveNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7SixMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7SixStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7SixTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7SixNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7SevenMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7SevenStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7SevenTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7SevenNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7EightMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7EightStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7EightTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7EightNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7NineMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7NineStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7NineTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7NineNonTeaching,
					"266617X4X176SQ001_SQ001": questionair7TenMode,
	   			   	"266617X4X176SQ001_SQ002" : questionair7TenStudent,
	   			   	"266617X4X176SQ001_SQ003" : questionair7TenTeacher,
	   			   	"266617X4X176SQ001_SQ004" : questionair7TenNonTeaching,	
					
	   			   	"266617X4X184" : questionair8,
	   			   	"266617X4X187" : $scope.questionairNine.choice
	   			   	
	   			   	
	   			   	
	   				};
	   	
	   	//var link = "http://localhost:8012/green-school/submit-aswer.php";
	   	if(cg)
	 	{
	 		$.ajax({
   			 url: "http://studiotesseract.co/green-school/submit-aswer.php",
    		 type: "POST",
    		 data: {data:air},
      			success:function(data) {
        		console.log(data);
             },
  	   			error:function(xhr) {
          		alert('error');
             }
  			});
  			$scope.air = air;
	 		$state.go('app.energy');
	 	}
	 }