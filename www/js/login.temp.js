$.ajax({
             url: "http://studiotesseract.co/green-school/api.php",
             type: "POST",
             data: {data:login},
                success:function(data) {
                  console.log(data);
                  var token = data;
                  $rootScope.token = data;

                  $("#token").val(token);
                  //alert(token);
                
                  $.ajax({
                    url: "http://studiotesseract.co/green-school/fetch-data.php",
                    type: "POST",
                    dataType: 'json',
                    data: {data:token},
                    success:function(data)
                    {
                      id = data['responses']['0'][Object.keys(data['responses']['0'])[0]];
                      id = id['id'];
                      $rootScope.id = id;
                      console.log(id);
                      console.log(data);
                     // alert(data['responses']['0'][id]['AQ20[SQ001_SQ001]']);
                 if (data['responses']['0'][id]['AQ20[SQ001_SQ001]'] != null)     
                    $('#oneName').val(data['responses']['0'][id]['AQ20[SQ001_SQ001]']);
                 if(data['responses']['0'][id]['AQ20[SQ001_SQ002]'] != null)
                    $("#oneEmail").val(data['responses']['0'][id]['AQ20[SQ001_SQ002]']);
                 if(data['responses']['0'][id]['AQ20[SQ002_SQ001]'] != null)
                    $("#twoName").val(data['responses']['0'][id]['AQ20[SQ002_SQ001]']);
                 if(data['responses']['0'][id]['AQ20[SQ002_SQ002]'] != null)
                    $("#twoEmail").val(data['responses']['0'][id]['AQ20[SQ002_SQ002]']);
                 if(data['responses']['0'][id]['AQ20[SQ003_SQ001]'] != null)
                    $("#threeName").val(data['responses']['0'][id]['AQ20[SQ003_SQ001]']);
                 if(data['responses']['0'][id]['AQ20[SQ001_SQ002]'] != null)
                    $("#threeEmail").val(data['responses']['0'][id]['AQ20[SQ003_SQ002]']);
                 
                 if(data['responses']['0'][id]['AQ21[SQ001_SQ001]'] != null)
                     $('#questionairtwoOneName').val(data['responses']['0'][id]['AQ21[SQ001_SQ001]']);
                 if(data['responses']['0'][id]['AQ21[SQ001_SQ002]'] != null)
                    $("#questionairtwoOneEmail").val(data['responses']['0'][id]['AQ21[SQ001_SQ002]']);
                 if(data['responses']['0'][id]['AQ21[SQ002_SQ001]'] != null)
                    $("#questionairtwoTwoName").val(data['responses']['0'][id]['AQ21[SQ002_SQ001]'] );
                 if(data['responses']['0'][id]['AQ21[SQ002_SQ002]'] != null)
                    $("#questionairtwoTwoEmail").val(data['responses']['0'][id]['AQ21[SQ002_SQ002]']);
                 if(data['responses']['0'][id]['AQ21[SQ003_SQ001]'] != null)
                     $("#questionairtwoThreeName").val(data['responses']['0'][id]['AQ21[SQ003_SQ001]']);
                 if(data['responses']['0'][id]['AQ21[SQ003_SQ002]'] != null)
                    $("#questionairtwoThreeEmail").val(data['responses']['0'][id]['AQ21[SQ003_SQ002]']);
                 if(data['responses']['0'][id]['AQ21[SQ004_SQ001]'] != null)
                    $("#questionairtwoFourName").val(data['responses']['0'][id]['AQ21[SQ004_SQ001]']);
                 if(data['responses']['0'][id]['AQ21[SQ004_SQ002]'] != null)
                    $("#questionairtwoFourEmail").val(data['responses']['0'][id]['AQ21[SQ004_SQ002]']);
                 if(data['responses']['0'][id]['AQ21[SQ005_SQ001]'] != null)
                    $("#questionairtwoFiveName").val(data['responses']['0'][id]['AQ21[SQ005_SQ001]']);
                 if(data['responses']['0'][id]['AQ21[SQ005_SQ002]'] != null)
                    $("#questionairtwoFiveEmail").val(data['responses']['0'][id]['AQ21[SQ005_SQ002]']);
                 
                 if(data['responses']['0'][id]['AQ22[SQ001_SQ001]'] != null)
                    $('#questionairthreeOneName').val(data['responses']['0'][id]['AQ22[SQ001_SQ001]']);
                 if(data['responses']['0'][id]['AQ22[SQ001_SQ002]'] != null)
                    $("#questionairthreeOneEmail").val(data['responses']['0'][id]['AQ22[SQ001_SQ002]']);
                 if(data['responses']['0'][id]['AQ22[SQ001_SQ003]'] != null)
                    $("#questionairtwoOneGrade").val(data['responses']['0'][id]['AQ22[SQ001_SQ003]']);
                 if(data['responses']['0'][id]['AQ22[SQ002_SQ001]'] != null)
                    $('#questionairthreeTwoName').val(data['responses']['0'][id]['AQ22[SQ002_SQ001]']);
                 if(data['responses']['0'][id]['AQ22[SQ002_SQ002]'] != null)
                    $("#questionairthreeTwoEmail").val(data['responses']['0'][id]['AQ22[SQ002_SQ002]']);
                 if(data['responses']['0'][id]['AQ22[SQ002_SQ003]'] != null)
                    $("#questionairtwoOneGrade").val(data['responses']['0'][id]['AQ22[SQ002_SQ003]']);
                 if(data['responses']['0'][id]['AQ22[SQ003_SQ001]'] != null)
                    $('#questionairthreeThreeName').val(data['responses']['0'][id]['AQ22[SQ003_SQ001]']);
                 if(data['responses']['0'][id]['AQ22[SQ003_SQ002]'] != null)
                    $("#questionairthreeThreeEmail").val(data['responses']['0'][id]['AQ22[SQ003_SQ002]']);
                 if(data['responses']['0'][id]['AQ22[SQ003_SQ003]'] != null)
                    $("#questionairthreeThreeGrade").val(data['responses']['0'][id]['AQ22[SQ003_SQ003]']);
                 if(data['responses']['0'][id]['AQ22[SQ004_SQ001]'] != null)
                    $('#questionairthreeFourName').val(data['responses']['0'][id]['AQ22[SQ004_SQ001]']);
                 if(data['responses']['0'][id]['AQ22[SQ004_SQ002]'] != null)
                    $("#questionairthreeFourEmail").val(data['responses']['0'][id]['AQ22[SQ004_SQ002]']);
                 if(data['responses']['0'][id]['AQ22[SQ004_SQ003]'] != null)
                    $("#questionairthreeFiveGrade").val(data['responses']['0'][id]['AQ22[SQ004_SQ003]']);
                 if(data['responses']['0'][id]['AQ22[SQ005_SQ001]'] != null)
                    $('#questionairthreeFiveName').val(data['responses']['0'][id]['AQ22[SQ005_SQ001]']);
                 if(data['responses']['0'][id]['AQ22[SQ005_SQ002]'] != null)
                    $("#questionairthreeFiveEmail").val(data['responses']['0'][id]['AQ22[SQ005_SQ002]']);
                 if(data['responses']['0'][id]['AQ22[SQ005_SQ003]'] != null)
                    $("#questionairthreeFiveGrade").val(data['responses']['0'][id]['AQ22[SQ005_SQ003]']);
                 if(data['responses']['0'][id]['AQ22[SQ006_SQ001]'] != null)
                    $('#questionairthreeSixName').val(data['responses']['0'][id]['AQ22[SQ006_SQ001]']);
                if(data['responses']['0'][id]['AQ22[SQ006_SQ002]'] != null)
                    $("#questionairthreeSixEmail").val(data['responses']['0'][id]['AQ22[SQ006_SQ002]']);
                if(data['responses']['0'][id]['AQ22[SQ006_SQ003]'] != null)
                    $("#questionairthreeSixGrade").val(data['responses']['0'][id]['AQ22[SQ006_SQ003]']);
                if(data['responses']['0'][id]['AQ22[SQ007_SQ001]'] != null)
                    $('#questionairthreeSevenName').val(data['responses']['0'][id]['AQ22[SQ007_SQ001]']);
                if(data['responses']['0'][id]['AQ22[SQ007_SQ002]'] != null)
                    $("#questionairthreeSevenEmail").val(data['responses']['0'][id]['AQ22[SQ007_SQ002]']);
                if(data['responses']['0'][id]['AQ22[SQ007_SQ003]'] != null)
                    $("#questionairthreeSevenGrade").val(data['responses']['0'][id]['AQ22[SQ007_SQ003]']);
                if(data['responses']['0'][id]['AQ22[SQ008_SQ001]'] != null)
                    $('#questionairthreeEightName').val(data['responses']['0'][id]['AQ22[SQ008_SQ001]']);
                if(data['responses']['0'][id]['AQ22[SQ008_SQ002]'] != null)
                    $("#questionairthreeEightEmail").val(data['responses']['0'][id]['AQ22[SQ008_SQ002]']);
                if(data['responses']['0'][id]['AQ22[SQ008_SQ003]'] != null)
                    $("#questionairthreeEightGrade").val(data['responses']['0'][id]['AQ22[SQ008_SQ003]']);
                if(data['responses']['0'][id]['AQ22[SQ009_SQ001]'] != null)
                    $('#questionairthreeNineName').val(data['responses']['0'][id]['AQ22[SQ009_SQ001]']);
                if(data['responses']['0'][id]['AQ22[SQ009_SQ002]'] != null)
                    $("#questionairthreeNineEmail").val(data['responses']['0'][id]['AQ22[SQ009_SQ002]']);
                if(data['responses']['0'][id]['AQ22[SQ009_SQ003]'] != null)
                    $("#questionairthreeNineGrade").val(data['responses']['0'][id]['AQ22[SQ009_SQ003]']);
                if(data['responses']['0'][id]['AQ22[SQ010_SQ001]'] != null)
                    $('#questionairthreeTenName').val(data['responses']['0'][id]['AQ22[SQ010_SQ001]']);
                if(data['responses']['0'][id]['AQ22[SQ010_SQ002]'] != null)
                    $("#questionairthreeTenEmail").val(data['responses']['0'][id]['AQ22[SQ010_SQ002]']);
                if(data['responses']['0'][id]['AQ22[SQ010_SQ003]'] != null)
                    $("#questionairthreeTenGrade").val(data['responses']['0'][id]['AQ22[SQ010_SQ003]']);
            
                if(data['responses']['0'][id]['AQ1'] != null)
                      $("#questionairFour").val(data['responses']['0'][id]['AQ1']);
                      

                if(data['responses']['0'][id]['AQ17[SQ001_SQ001]'] != null)  
                  $('#questionairFiveOneDetails').val(data['responses']['0'][id]['AQ17[SQ001_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ001_SQ002]'] != null)
                  $("#questionairFiveOneArea").val(data['responses']['0'][id]['AQ17[SQ001_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ001_SQ003]'] != null)
                  $("#questionairFiveOneSum").val(data['responses']['0'][id]['AQ17[SQ001_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ001_SQ004]'] != null)
                  $('#questionairFiveOnePercentage').val(data['responses']['0'][id]['AQ17[SQ001_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ002_SQ001]'] != null)
                  $('#questionairFiveTwoDetails').val(data['responses']['0'][id]['AQ17[SQ002_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ002_SQ002]'] != null)
                  $("#questionairFiveTwoArea").val(data['responses']['0'][id]['AQ17[SQ002_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ002_SQ003]'] != null)
                  $("#questionairFiveTwoSum").val(data['responses']['0'][id]['AQ17[SQ002_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ002_SQ004]'] != null)
                  $('#questionairFiveTwoPercentage').val(data['responses']['0'][id]['AQ17[SQ002_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ003_SQ001]'] != null)
                  $('#questionairFiveThreeDetails').val(data['responses']['0'][id]['AQ17[SQ003_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ003_SQ002]'] != null)
                  $("#questionairFiveThreeArea").val(data['responses']['0'][id]['AQ17[SQ003_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ003_SQ003]'] != null)
                  $("#questionairFiveThreeSum").val(data['responses']['0'][id]['AQ17[SQ003_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ003_SQ004]'] != null)
                  $('#questionairFiveThreePercentage').val(data['responses']['0'][id]['AQ17[SQ003_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ004_SQ001]'] != null)
                  $('#questionairFiveFourDetails').val(data['responses']['0'][id]['AQ17[SQ004_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ004_SQ002]'] != null)
                  $("#questionairFiveFourArea").val(data['responses']['0'][id]['AQ17[SQ004_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ004_SQ003]'] != null)
                  $("#questionairFiveFourSum").val(data['responses']['0'][id]['AQ17[SQ004_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ004_SQ004]'] != null)
                  $('#questionairFiveFourPercentage').val(data['responses']['0'][id]['AQ17[SQ004_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ005_SQ001]'] != null)
                  $('#questionairFiveFiveDetails').val(data['responses']['0'][id]['AQ17[SQ005_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ005_SQ002]'] != null)
                  $("#questionairFiveFiveArea").val(data['responses']['0'][id]['AQ17[SQ005_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ005_SQ003]'] != null)
                  $("#questionairFiveFiveSum").val(data['responses']['0'][id]['AQ17[SQ005_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ005_SQ004]'] != null)
                  $('#questionairFiveFivePercentage').val(data['responses']['0'][id]['AQ17[SQ005_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ006_SQ001]'] != null)
                  $('#questionairFiveSixDetails').val(data['responses']['0'][id]['AQ17[SQ006_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ006_SQ002]'] != null)
                  $("#questionairFiveSixArea").val(data['responses']['0'][id]['AQ17[SQ006_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ006_SQ003]'] != null)
                  $("#questionairFiveSixSum").val(data['responses']['0'][id]['AQ17[SQ006_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ006_SQ004]'] != null)
                  $('#questionairFiveSixPercentage').val(data['responses']['0'][id]['AQ17[SQ006_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ007_SQ001]'] != null)
                  $('#questionairFiveSevenDetails').val(data['responses']['0'][id]['AQ17[SQ007_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ007_SQ002]'] != null)
                  $("#questionairFiveSevenArea").val(data['responses']['0'][id]['AQ17[SQ007_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ007_SQ003]'] != null)
                  $("#questionairFiveSevenSum").val(data['responses']['0'][id]['AQ17[SQ007_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ007_SQ004]'] != null)
                  $('#questionairFiveSevenPercentage').val(data['responses']['0'][id]['AQ17[SQ007_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ008_SQ001]'] != null)
                  $('#questionairFiveEightDetails').val(data['responses']['0'][id]['AQ17[SQ008_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ008_SQ002]'] != null)
                  $("#questionairFiveEightArea").val(data['responses']['0'][id]['AQ17[SQ008_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ008_SQ003]'] != null)
                  $("#questionairFiveEightSum").val(data['responses']['0'][id]['AQ17[SQ008_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ008_SQ004]'] != null)
                  $('#questionairFiveEightPercentage').val(data['responses']['0'][id]['AQ17[SQ008_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ009_SQ001]'] != null)
                  $('#questionairFiveNineDetails').val(data['responses']['0'][id]['AQ17[SQ009_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ009_SQ002]'] != null)
                  $("#questionairFiveNineArea").val(data['responses']['0'][id]['AQ17[SQ009_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ009_SQ003]'] != null)
                  $("#questionairFiveNineSum").val(data['responses']['0'][id]['AQ17[SQ009_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ009_SQ004]'] != null)
                  $('#questionairFiveNinePercentage').val(data['responses']['0'][id]['AQ17[SQ009_SQ004]']);
                if(data['responses']['0'][id]['AQ17[SQ010_SQ001]'] != null)
                  $('#questionairFiveTenDetails').val(data['responses']['0'][id]['AQ17[SQ010_SQ001]']);
                if(data['responses']['0'][id]['AQ17[SQ010_SQ002]'] != null)
                  $("#questionairFiveTenArea").val(data['responses']['0'][id]['AQ17[SQ010_SQ002]']);
                if(data['responses']['0'][id]['AQ17[SQ010_SQ003]'] != null)
                  $("#questionairFiveTenSum").val(data['responses']['0'][id]['AQ17[SQ010_SQ003]']);
                if(data['responses']['0'][id]['AQ17[SQ010_SQ004]'] != null)
                  $('#questionairFiveTenPercentage').val(data['responses']['0'][id]['AQ17[SQ010_SQ004]']);
              
               if(data['responses']['0'][id] != null)
                 $rootScope.questionsixair = data['responses']['0'][id]['TP1'];
                else
                  $rootScope.questionfourair = 'A1';
                 $("questionair6").val(data["266617X4X164"]);

                if(data['responses']['0'][id]['CP1[SQ001_SQ001]'] != null)
                  $('#questionairSevenOneMode').val(data['responses']['0'][id]['CP1[SQ001_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ001_SQ002]'] != null)
                  $("#questionairSevenOneStudent").val(data['responses']['0'][id]['CP1[SQ001_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ001_SQ003]'] != null)
                  $("#questionairSevenOneTeacher").val(data['responses']['0'][id]['CP1[SQ001_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ001_SQ004]'] != null)
                  $('#questionairSevenOneNonTeaching').val(data['responses']['0'][id]['CP1[SQ001_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ002_SQ001]'] != null)
                  $('#questionairSevenTwoMode').val(data['responses']['0'][id]['CP1[SQ002_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ002_SQ002]'] != null)
                  $("#questionairSevenTwoStudent").val(data['responses']['0'][id]['CP1[SQ002_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ002_SQ003]'] != null)
                  $("#questionairSevenTwoTeacher").val(data['responses']['0'][id]['CP1[SQ002_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ002_SQ004]'] != null)
                  $('#questionairSevenTwoNonTeaching').val(data['responses']['0'][id]['CP1[SQ002_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ003_SQ001]'] != null)
                  $('#questionairSevenThreeMode').val(data['responses']['0'][id]['CP1[SQ003_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ003_SQ002]'] != null)
                  $("#questionairSevenThreeStudent").val(data['responses']['0'][id]['CP1[SQ003_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ003_SQ003]'] != null)
                  $("#questionairSevenThreeTeacher").val(data['responses']['0'][id]['CP1[SQ003_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ003_SQ004]'] != null)
                  $('#questionairSevenThreeNonTeaching').val(data['responses']['0'][id]['CP1[SQ003_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ004_SQ001]'] != null)
                  $('#questionairSevenFourMode').val(data['responses']['0'][id]['CP1[SQ004_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ004_SQ002]'] != null)
                  $("#questionairSevenFourStudent").val(data['responses']['0'][id]['CP1[SQ004_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ004_SQ003]'] != null)
                  $("#questionairSevenFourTeacher").val(data['responses']['0'][id]['CP1[SQ004_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ004_SQ004]'] != null)
                  $('#questionairSevenFiveNonTeaching').val(data['responses']['0'][id]['CP1[SQ004_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ005_SQ001]'] != null)
                  $('#questionairSevenFiveMode').val(data['responses']['0'][id]['CP1[SQ005_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ005_SQ002]'] != null)
                  $("#questionairSevenFiveStudent").val(data['responses']['0'][id]['CP1[SQ005_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ005_SQ003]'] != null)
                  $("#questionairSevenFiveTeacher").val(data['responses']['0'][id]['CP1[SQ005_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ005_SQ004]'] != null)
                  $('#questionairSevenFiveNonTeaching').val(data['responses']['0'][id]['CP1[SQ005_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ006_SQ001]'] != null)
                  $('#questionairSevenSixMode').val(data['responses']['0'][id]['CP1[SQ006_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ006_SQ002]'] != null)
                  $("#questionairSevenSixStudent").val(data['responses']['0'][id]['CP1[SQ006_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ006_SQ003]'] != null)
                  $("#questionairSevenSixTeacher").val(data['responses']['0'][id]['CP1[SQ006_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ006_SQ004]'] != null)
                  $('#questionairSevenSixNonTeaching').val(data['responses']['0'][id]['CP1[SQ006_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ007_SQ001]'] != null)
                  $('#questionairSevenSevenMode').val(data['responses']['0'][id]['CP1[SQ007_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ007_SQ002]'] != null)
                  $("#questionairSevenSevenStudent").val(data['responses']['0'][id]['CP1[SQ007_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ007_SQ003]'] != null)
                  $("#questionairSevenSevenTeacher").val(data['responses']['0'][id]['CP1[SQ007_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ007_SQ004]'] != null)
                  $('#questionairSevenSevenNonTeaching').val(data['responses']['0'][id]['CP1[SQ007_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ008_SQ001]'] != null)
                  $('#questionairSevenEightMode').val(data['responses']['0'][id]['CP1[SQ008_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ008_SQ002]'] != null)
                  $("#questionairSevenEightStudent").val(data['responses']['0'][id]['CP1[SQ008_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ008_SQ003]'] != null)
                  $("#questionairSevenEightTeacher").val(data['responses']['0'][id]['CP1[SQ008_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ008_SQ004]'] != null)
                  $('#questionairSevenEightNonTeaching').val(data['responses']['0'][id]['CP1[SQ008_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ009_SQ001]'] != null)
                  $('#questionairSevenNineMode').val(data['responses']['0'][id]['CP1[SQ009_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ009_SQ002]'] != null)
                  $("#questionairSevenNineStudent").val(data['responses']['0'][id]['CP1[SQ009_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ009_SQ003]'] != null)
                  $("#questionairSevenNineTeacher").val(data['responses']['0'][id]['CP1[SQ009_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ009_SQ004]'] != null)
                  $('#questionairSevenNineNonTeaching').val(data['responses']['0'][id]['CP1[SQ009_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ010_SQ001]'] != null)
                  $('#questionairSevenTenMode').val(data['responses']['0'][id]['CP1[SQ010_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ010_SQ002]'] != null)
                  $("#questionairSevenTenStudent").val(data['responses']['0'][id]['CP1[SQ010_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ010_SQ003]'] != null)
                  $("#questionairSevenTenTeacher").val(data['responses']['0'][id]['CP1[SQ010_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ010_SQ004]'] != null)
                  $('#questionairSevenTenNonTeaching').val(data['responses']['0'][id]['CP1[SQ010_SQ004]']);
                if(data['responses']['0'][id]['CP1[SQ011_SQ001]'] != null)
                  $('#questionairSevenElevenMode').val(data['responses']['0'][id]['CP1[SQ011_SQ001]']);
                if(data['responses']['0'][id]['CP1[SQ011_SQ002]'] != null)
                  $("#questionairSevenElevenStudent").val(data['responses']['0'][id]['CP1[SQ011_SQ002]']);
                if(data['responses']['0'][id]['CP1[SQ011_SQ003]'] != null)
                  $("#questionairSevenElevenTeacher").val(data['responses']['0'][id]['CP1[SQ011_SQ003]']);
                if(data['responses']['0'][id]['CP1[SQ011_SQ004]'] != null)
                  $('#questionairSevenElevenNonTeaching').val(data['responses']['0'][id]['CP1[SQ011_SQ004]']);
              
               if(data['responses']['0'][id]['CP2'] != null)
                  $('#questionairEight').val(data['responses']['0'][id]['CP2']);
               if(data['responses']['0'][id]['CP5'] != null)
                  $rootScope.questionnineair = data['responses']['0'][id]['CP5'];
                else
                  $rootScope.questionnineair = "N"
                  

//              Energy 

               if (data['responses']['0'][id]['EQ21[SQ001_SQ001]'] != null)     
                  $('#energyoneName').val(data['responses']['0'][id]['EQ21[SQ001_SQ001]']);
               if(data['responses']['0'][id]['EQ21[SQ001_SQ002]'] != null)
                 $("#energyoneEmail").val(data['responses']['0'][id]['EQ21[SQ001_SQ002]']);
               if(data['responses']['0'][id]['EQ21[SQ002_SQ001]'] != null)
                  $("#energytwoName").val(data['responses']['0'][id]['EQ21[SQ002_SQ001]']);
               if(data['responses']['0'][id]['EQ21[SQ002_SQ002]'] != null)
                  $("#energytwoEmail").val(data['responses']['0'][id]['EQ21[SQ002_SQ002]']);
               if(data['responses']['0'][id]['EQ21[SQ003_SQ001]'] != null)
                  $("#energythreeName").val(data['responses']['0'][id]['EQ21[SQ003_SQ001]']);
               if(data['responses']['0'][id]['EQ21[SQ001_SQ002]'] != null)
                  $("#energythreeEmail").val(data['responses']['0'][id]['EQ21[SQ003_SQ002]']);

               
               if(data['responses']['0'][id]['EQ22[SQ001_SQ001]'] != null)
                  $('#questionenergytwoOneName').val(data['responses']['0'][id]['EQ22[SQ001_SQ001]']);
               if(data['responses']['0'][id]['EQ22[SQ001_SQ002]'] != null)
                  $("#questionenergytwoOneEmail").val(data['responses']['0'][id]['EQ22[SQ001_SQ002]']);
               if(data['responses']['0'][id]['EQ22[SQ002_SQ001]'] != null)
                  $("#questionenergytwoTwoName").val(data['responses']['0'][id]['EQ22[SQ002_SQ001]'] );
               if(data['responses']['0'][id]['EQ22[SQ002_SQ002]'] != null)
                  $("#questionenergytwoTwoEmail").val(data['responses']['0'][id]['EQ22[SQ002_SQ002]']);
               if(data['responses']['0'][id]['EQ22[SQ003_SQ001]'] != null)
                   $("#questionenergytwoThreeName").val(data['responses']['0'][id]['EQ22[SQ003_SQ001]']);
               if(data['responses']['0'][id]['EQ22[SQ003_SQ002]'] != null)
                  $("#questionenergytwoThreeEmail").val(data['responses']['0'][id]['EQ22[SQ003_SQ002]']);
               if(data['responses']['0'][id]['EQ22[SQ004_SQ001]'] != null)
                  $("#questionenergytwoFourName").val(data['responses']['0'][id]['EQ22[SQ004_SQ001]']);
               if(data['responses']['0'][id]['EQ22[SQ004_SQ002]'] != null)
                  $("#questionenergytwoFourEmail").val(data['responses']['0'][id]['EQ22[SQ004_SQ002]']);
               if(data['responses']['0'][id]['EQ22[SQ005_SQ001]'] != null)
                  $("#questionenergytwoFiveName").val(data['responses']['0'][id]['EQ22[SQ005_SQ001]']);
               if(data['responses']['0'][id]['EQ22[SQ005_SQ002]'] != null)
                  $("#questionenergytwoFiveEmail").val(data['responses']['0'][id]['EQ22[SQ005_SQ002]']);
               

                if(data['responses']['0'][id]['EQ23[SQ001_SQ001]'] != null)
                    $('#questionenergythreeOneName').val(data['responses']['0'][id]['EQ23[SQ001_SQ001]']);
                 if(data['responses']['0'][id]['EQ23[SQ001_SQ002]'] != null)
                    $("#questionenergythreeOneEmail").val(data['responses']['0'][id]['EQ23[SQ001_SQ002]']);
                 if(data['responses']['0'][id]['EQ23[SQ001_SQ003]'] != null)
                    $("#questionenergytwoOneGrade").val(data['responses']['0'][id]['EQ23[SQ001_SQ003]']);
                 if(data['responses']['0'][id]['EQ23[SQ002_SQ001]'] != null)
                    $('#questionenergythreeTwoName').val(data['responses']['0'][id]['EQ23[SQ002_SQ001]']);
                 if(data['responses']['0'][id]['EQ23[SQ002_SQ002]'] != null)
                    $("#questionenergythreeTwoEmail").val(data['responses']['0'][id]['EQ23[SQ002_SQ002]']);
                 if(data['responses']['0'][id]['EQ23[SQ002_SQ003]'] != null)
                    $("#questionenergytwoOneGrade").val(data['responses']['0'][id]['EQ23[SQ002_SQ003]']);
                 if(data['responses']['0'][id]['EQ23[SQ003_SQ001]'] != null)
                    $('#questionenergythreeThreeName').val(data['responses']['0'][id]['EQ23[SQ003_SQ001]']);
                 if(data['responses']['0'][id]['EQ23[SQ003_SQ002]'] != null)
                    $("#questionenergythreeThreeEmail").val(data['responses']['0'][id]['EQ23[SQ003_SQ002]']);
                 if(data['responses']['0'][id]['EQ23[SQ003_SQ003]'] != null)
                    $("#questionenergythreeThreeGrade").val(data['responses']['0'][id]['EQ23[SQ003_SQ003]']);
                 if(data['responses']['0'][id]['EQ23[SQ004_SQ001]'] != null)
                    $('#questionenergythreeFourName').val(data['responses']['0'][id]['EQ23[SQ004_SQ001]']);
                 if(data['responses']['0'][id]['EQ23[SQ004_SQ002]'] != null)
                    $("#questionenergythreeFourEmail").val(data['responses']['0'][id]['EQ23[SQ004_SQ002]']);
                 if(data['responses']['0'][id]['EQ23[SQ004_SQ003]'] != null)
                    $("#questionenergythreeFiveGrade").val(data['responses']['0'][id]['EQ23[SQ004_SQ003]']);
                 if(data['responses']['0'][id]['EQ23[SQ005_SQ001]'] != null)
                    $('#questionenergythreeFiveName').val(data['responses']['0'][id]['EQ23[SQ005_SQ001]']);
                 if(data['responses']['0'][id]['EQ23[SQ005_SQ002]'] != null)
                    $("#questionenergythreeFiveEmail").val(data['responses']['0'][id]['EQ23[SQ005_SQ002]']);
                 if(data['responses']['0'][id]['EQ23[SQ005_SQ003]'] != null)
                    $("#questionenergythreeFiveGrade").val(data['responses']['0'][id]['EQ23[SQ005_SQ003]']);
                 if(data['responses']['0'][id]['EQ23[SQ006_SQ001]'] != null)
                    $('#questionenergythreeSixName').val(data['responses']['0'][id]['EQ23[SQ006_SQ001]']);
                if(data['responses']['0'][id]['EQ23[SQ006_SQ002]'] != null)
                    $("#questionenergythreeSixEmail").val(data['responses']['0'][id]['EQ23[SQ006_SQ002]']);
                if(data['responses']['0'][id]['EQ23[SQ006_SQ003]'] != null)
                    $("#questionenergythreeSixGrade").val(data['responses']['0'][id]['EQ23[SQ006_SQ003]']);
                if(data['responses']['0'][id]['EQ23[SQ007_SQ001]'] != null)
                    $('#questionenergythreeSevenName').val(data['responses']['0'][id]['EQ23[SQ007_SQ001]']);
                if(data['responses']['0'][id]['EQ23[SQ007_SQ002]'] != null)
                    $("#questionenergythreeSevenEmail").val(data['responses']['0'][id]['EQ23[SQ007_SQ002]']);
                if(data['responses']['0'][id]['EQ23[SQ007_SQ003]'] != null)
                    $("#questionenergythreeSevenGrade").val(data['responses']['0'][id]['EQ23[SQ007_SQ003]']);
                if(data['responses']['0'][id]['EQ23[SQ008_SQ001]'] != null)
                    $('#questionenergythreeEightName').val(data['responses']['0'][id]['EQ23[SQ008_SQ001]']);
                if(data['responses']['0'][id]['EQ23[SQ008_SQ002]'] != null)
                    $("#questionenergythreeEightEmail").val(data['responses']['0'][id]['EQ23[SQ008_SQ002]']);
                if(data['responses']['0'][id]['EQ23[SQ008_SQ003]'] != null)
                    $("#questionenergythreeEightGrade").val(data['responses']['0'][id]['EQ23[SQ008_SQ003]']);
                if(data['responses']['0'][id]['EQ23[SQ009_SQ001]'] != null)
                    $('#questionenergythreeNineName').val(data['responses']['0'][id]['EQ23[SQ009_SQ001]']);
                if(data['responses']['0'][id]['EQ23[SQ009_SQ002]'] != null)
                    $("#questionenergythreeNineEmail").val(data['responses']['0'][id]['EQ23[SQ009_SQ002]']);
                if(data['responses']['0'][id]['EQ23[SQ009_SQ003]'] != null)
                    $("#questionenergythreeNineGrade").val(data['responses']['0'][id]['EQ23[SQ009_SQ003]']);
                if(data['responses']['0'][id]['EQ23[SQ010_SQ001]'] != null)
                    $('#questionenergythreeTenName').val(data['responses']['0'][id]['EQ23[SQ010_SQ001]']);
                if(data['responses']['0'][id]['EQ23[SQ010_SQ002]'] != null)
                    $("#questionenergythreeTenEmail").val(data['responses']['0'][id]['EQ23[SQ010_SQ002]']);
                if(data['responses']['0'][id]['EQ23[SQ010_SQ003]'] != null)
                    $("#questionenergythreeTenGrade").val(data['responses']['0'][id]['EQ23[SQ010_SQ003]']);
            

                if(data['responses']['0'][id]['EQ4'] != null)
                  $rootScope.questionenergyfour = data['responses']['0'][id]['EQ4']
                else
                  $rootScope.questionenergyfour = "N";

                if(data['responses']['0'][id]['EQ19'] != null)
                  $rootScope.questionenergyfive = data['responses']['0'][id]['EQ19']
                else
                  $rootScope.questionenergyfive = "N";

              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixOneSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixOneQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixOneEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ003]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixTwoSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixTwoQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixTwoEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ003]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixThreeSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixThreeQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixThreeEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixFourSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixFourQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixFourEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixFiveSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixFiveQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixFiveEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixSixSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixSixQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixSixEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixSevenSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixSevenQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixSevenEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixEightSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixEightQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixEightEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixNineSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixNineQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixNineEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixTenSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixTenQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixTenEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ003]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixElevenSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixElevenQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixElevenEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ001]'] != null)
                $('#questionenergysixTwelveSource').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ002]'] != null)
                $('#questionenergysixTwelveQuantity').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ18[SQ001_SQ003]'] != null)
                $('#questionenergysixTwelveEnergy').val(data['responses']['0'][id]['EQ18[SQ001_SQ001]']);
              
              if(data['responses']['0'][id]['EQ20[SQ001_SQ001]'] != null)
                $('#questionenergysevenOneNumber').val(data['responses']['0'][id]['EQ20[SQ001_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ001_SQ002]'] != null)
                $('#questionenergysevenOneSize').val(data['responses']['0'][id]['EQ20[SQ001_SQ002]']);
              if(data['responses']['0'][id]['EQ20[SQ001_SQ003]'] != null)
                $('#questionenergysevenOneBEE').val(data['responses']['0'][id]['EQ20[SQ001_SQ003]']);
              if(data['responses']['0'][id]['EQ20[SQ002_SQ001]'] != null)
                $('#questionenergysevenTwoNumber').val(data['responses']['0'][id]['EQ20[SQ002_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ002_SQ002]'] != null)
                $('#questionenergysevenTwoSize').val(data['responses']['0'][id]['EQ20[SQ002_SQ002]']);
              if(data['responses']['0'][id]['EQ20[SQ002_SQ003]'] != null)
                $('#questionenergysevenTwoBEE').val(data['responses']['0'][id]['EQ20[SQ002_SQ003]']);
              if(data['responses']['0'][id]['EQ20[SQ003_SQ001]'] != null)
                $('#questionenergysevenThreeNumber').val(data['responses']['0'][id]['EQ20[SQ003_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ003_SQ002]'] != null)
                $('#questionenergysevenThreeSize').val(data['responses']['0'][id]['EQ20[SQ003_SQ002]']);
              if(data['responses']['0'][id]['EQ20[SQ003_SQ003]'] != null)
                $('#questionenergysevenThreeBEE').val(data['responses']['0'][id]['EQ20[SQ003_SQ003]']);
              if(data['responses']['0'][id]['EQ20[SQ004_SQ001]'] != null)
                $('#questionenergysevenFourNumber').val(data['responses']['0'][id]['EQ20[SQ004_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ004_SQ002]'] != null)
                $('#questionenergysevenFourSize').val(data['responses']['0'][id]['EQ20[SQ004_SQ002]']);
              if(data['responses']['0'][id]['EQ20[SQ004_SQ003]'] != null)
                $('#questionenergysevenFourBEE').val(data['responses']['0'][id]['EQ20[SQ004_SQ003]']);
              if(data['responses']['0'][id]['EQ20[SQ005_SQ001]'] != null)
                $('#questionenergysevenFiveNumber').val(data['responses']['0'][id]['EQ20[SQ005_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ005_SQ002]'] != null)
                $('#questionenergysevenFiveSize').val(data['responses']['0'][id]['EQ20[SQ005_SQ002]']);
              if(data['responses']['0'][id]['EQ20[SQ005_SQ003]'] != null)
                $('#questionenergysevenFiveBEE').val(data['responses']['0'][id]['EQ20[SQ005_SQ003]']);
              if(data['responses']['0'][id]['EQ20[SQ006_SQ001]'] != null)
                $('#questionenergysevenSixNumber').val(data['responses']['0'][id]['EQ20[SQ006_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ006_SQ002]'] != null)
                $('#questionenergysevenSixSize').val(data['responses']['0'][id]['EQ20[SQ006_SQ002]']);
              if(data['responses']['0'][id]['EQ20[SQ006_SQ003]'] != null)
                $('#questionenergysevenSixBEE').val(data['responses']['0'][id]['EQ20[SQ006_SQ003]']);
              if(data['responses']['0'][id]['EQ20[SQ007_SQ001]'] != null)
                $('#questionenergysevenSevenNumber').val(data['responses']['0'][id]['EQ20[SQ007_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ007_SQ001]'] != null)
                $('#questionenergysevenSevenSize').val(data['responses']['0'][id]['EQ20[SQ007_SQ001]']);
              if(data['responses']['0'][id]['EQ20[SQ007_SQ002]'] != null)
                $('#questionenergysevenSevenBEE').val(data['responses']['0'][id]['EQ20[SQ007_SQ002]']);
                
              if(data['responses']['0'][id]['EQ25'] != null)
                $("#questionenergyeight").val(data['responses']['0'][id]['EQ25']);
              
              if(data['responses']['0'][id]['EQ7'] != null)
                $("#questionenergynine").val(data['responses']['0'][id]['EQ7']);
              
              if(data['responses']['0'][id]['EQ8'] != null)
                $rootScope.questionenergyten = data['responses']['0'][id]['EQ8'];
              else
                $rootScope.questionenergyten = "Y";
                
              
              if(data['responses']['0'][id]['EQ24'] != null)
                $("#questionenergyeleven").val(data['responses']['0'][id]['EQ24']);
    
//            Food

               if (data['responses']['0'][id]['FQ27[SQ001_SQ001]'] != null)     
                  $('#foodoneName').val(data['responses']['0'][id]['FQ27[SQ001_SQ001]']);
               if(data['responses']['0'][id]['FQ27[SQ001_SQ002]'] != null)
                 $("#foodoneEmail").val(data['responses']['0'][id]['FQ27[SQ001_SQ002]']);
               if(data['responses']['0'][id]['FQ27[SQ002_SQ001]'] != null)
                  $("#foodtwoName").val(data['responses']['0'][id]['FQ27[SQ002_SQ001]']);
               if(data['responses']['0'][id]['FQ27[SQ002_SQ002]'] != null)
                  $("#foodtwoEmail").val(data['responses']['0'][id]['FQ27[SQ002_SQ002]']);
               if(data['responses']['0'][id]['FQ27[SQ003_SQ001]'] != null)
                  $("#foodthreeName").val(data['responses']['0'][id]['FQ27[SQ003_SQ001]']);
               if(data['responses']['0'][id]['FQ27[SQ001_SQ002]'] != null)
                  $("#foodthreeEmail").val(data['responses']['0'][id]['FQ27[SQ003_SQ002]']);

             if(data['responses']['0'][id]['FQ28[SQ001_SQ001]'] != null)
                $('#questionfoodtwoOneName').val(data['responses']['0'][id]['FQ28[SQ001_SQ001]']);
             if(data['responses']['0'][id]['FQ28[SQ001_SQ002]'] != null)
                $("#questionfoodtwoOneEmail").val(data['responses']['0'][id]['FQ28[SQ001_SQ002]']);
             if(data['responses']['0'][id]['FQ28[SQ002_SQ001]'] != null)
                $("#questionfoodtwoTwoName").val(data['responses']['0'][id]['FQ28[SQ002_SQ001]'] );
             if(data['responses']['0'][id]['FQ28[SQ002_SQ002]'] != null)
                $("#questionfoodtwoTwoEmail").val(data['responses']['0'][id]['FQ28[SQ002_SQ002]']);
             if(data['responses']['0'][id]['FQ28[SQ003_SQ001]'] != null)
                 $("#questionfoodtwoThreeName").val(data['responses']['0'][id]['FQ28[SQ003_SQ001]']);
             if(data['responses']['0'][id]['FQ28[SQ003_SQ002]'] != null)
                $("#questionfoodtwoThreeEmail").val(data['responses']['0'][id]['FQ28[SQ003_SQ002]']);
             if(data['responses']['0'][id]['FQ28[SQ004_SQ001]'] != null)
                $("#questionfoodtwoFourName").val(data['responses']['0'][id]['FQ28[SQ004_SQ001]']);
             if(data['responses']['0'][id]['FQ28[SQ004_SQ002]'] != null)
                $("#questionfoodtwoFourEmail").val(data['responses']['0'][id]['FQ28[SQ004_SQ002]']);
             if(data['responses']['0'][id]['FQ28[SQ005_SQ001]'] != null)
                $("#questionfoodtwoFiveName").val(data['responses']['0'][id]['FQ28[SQ005_SQ001]']);
             if(data['responses']['0'][id]['FQ28[SQ005_SQ002]'] != null)
                $("#questionfoodtwoFiveEmail").val(data['responses']['0'][id]['FQ28[SQ005_SQ002]']);
             

             if(data['responses']['0'][id]['FQ29[SQ001_SQ001]'] != null)
                $('#questionfoodthreeOneName').val(data['responses']['0'][id]['FQ29[SQ001_SQ001]']);
             if(data['responses']['0'][id]['FQ29[SQ001_SQ002]'] != null)
                $("#questionfoodthreeOneEmail").val(data['responses']['0'][id]['FQ29[SQ001_SQ002]']);
             if(data['responses']['0'][id]['FQ29[SQ001_SQ003]'] != null)
                $("#questionfoodtwoOneGrade").val(data['responses']['0'][id]['FQ29[SQ001_SQ003]']);
             if(data['responses']['0'][id]['FQ29[SQ002_SQ001]'] != null)
                $('#questionfoodthreeTwoName').val(data['responses']['0'][id]['FQ29[SQ002_SQ001]']);
             if(data['responses']['0'][id]['FQ29[SQ002_SQ002]'] != null)
                $("#questionfoodthreeTwoEmail").val(data['responses']['0'][id]['FQ29[SQ002_SQ002]']);
             if(data['responses']['0'][id]['FQ29[SQ002_SQ003]'] != null)
                $("#questionfoodtwoOneGrade").val(data['responses']['0'][id]['FQ29[SQ002_SQ003]']);
             if(data['responses']['0'][id]['FQ29[SQ003_SQ001]'] != null)
                $('#questionfoodthreeThreeName').val(data['responses']['0'][id]['FQ29[SQ003_SQ001]']);
             if(data['responses']['0'][id]['FQ29[SQ003_SQ002]'] != null)
                $("#questionfoodthreeThreeEmail").val(data['responses']['0'][id]['FQ29[SQ003_SQ002]']);
             if(data['responses']['0'][id]['FQ29[SQ003_SQ003]'] != null)
                $("#questionfoodthreeThreeGrade").val(data['responses']['0'][id]['FQ29[SQ003_SQ003]']);
             if(data['responses']['0'][id]['FQ29[SQ004_SQ001]'] != null)
                $('#questionfoodthreeFourName').val(data['responses']['0'][id]['FQ29[SQ004_SQ001]']);
             if(data['responses']['0'][id]['FQ29[SQ004_SQ002]'] != null)
                $("#questionfoodthreeFourEmail").val(data['responses']['0'][id]['FQ29[SQ004_SQ002]']);
             if(data['responses']['0'][id]['FQ29[SQ004_SQ003]'] != null)
                $("#questionfoodthreeFiveGrade").val(data['responses']['0'][id]['FQ29[SQ004_SQ003]']);
             if(data['responses']['0'][id]['FQ29[SQ005_SQ001]'] != null)
                $('#questionfoodthreeFiveName').val(data['responses']['0'][id]['FQ29[SQ005_SQ001]']);
             if(data['responses']['0'][id]['FQ29[SQ005_SQ002]'] != null)
                $("#questionfoodthreeFiveEmail").val(data['responses']['0'][id]['FQ29[SQ005_SQ002]']);
             if(data['responses']['0'][id]['FQ29[SQ005_SQ003]'] != null)
                $("#questionfoodthreeFiveGrade").val(data['responses']['0'][id]['FQ29[SQ005_SQ003]']);
             if(data['responses']['0'][id]['FQ29[SQ006_SQ001]'] != null)
                $('#questionfoodthreeSixName').val(data['responses']['0'][id]['FQ29[SQ006_SQ001]']);
            if(data['responses']['0'][id]['FQ29[SQ006_SQ002]'] != null)
                $("#questionfoodthreeSixEmail").val(data['responses']['0'][id]['FQ29[SQ006_SQ002]']);
            if(data['responses']['0'][id]['FQ29[SQ006_SQ003]'] != null)
                $("#questionfoodthreeSixGrade").val(data['responses']['0'][id]['FQ29[SQ006_SQ003]']);
            if(data['responses']['0'][id]['FQ29[SQ007_SQ001]'] != null)
                $('#questionfoodthreeSevenName').val(data['responses']['0'][id]['FQ29[SQ007_SQ001]']);
            if(data['responses']['0'][id]['FQ29[SQ007_SQ002]'] != null)
                $("#questionfoodthreeSevenEmail").val(data['responses']['0'][id]['FQ29[SQ007_SQ002]']);
            if(data['responses']['0'][id]['FQ29[SQ007_SQ003]'] != null)
                $("#questionfoodthreeSevenGrade").val(data['responses']['0'][id]['FQ29[SQ007_SQ003]']);
            if(data['responses']['0'][id]['FQ29[SQ008_SQ001]'] != null)
                $('#questionfoodthreeEightName').val(data['responses']['0'][id]['FQ29[SQ008_SQ001]']);
            if(data['responses']['0'][id]['FQ29[SQ008_SQ002]'] != null)
                $("#questionfoodthreeEightEmail").val(data['responses']['0'][id]['FQ29[SQ008_SQ002]']);
            if(data['responses']['0'][id]['FQ29[SQ008_SQ003]'] != null)
                $("#questionfoodthreeEightGrade").val(data['responses']['0'][id]['FQ29[SQ008_SQ003]']);
            if(data['responses']['0'][id]['FQ29[SQ009_SQ001]'] != null)
                $('#questionfoodthreeNineName').val(data['responses']['0'][id]['FQ29[SQ009_SQ001]']);
            if(data['responses']['0'][id]['FQ29[SQ009_SQ002]'] != null)
                $("#questionfoodthreeNineEmail").val(data['responses']['0'][id]['FQ29[SQ009_SQ002]']);
            if(data['responses']['0'][id]['FQ29[SQ009_SQ003]'] != null)
                $("#questionfoodthreeNineGrade").val(data['responses']['0'][id]['FQ29[SQ009_SQ003]']);
            if(data['responses']['0'][id]['FQ29[SQ010_SQ001]'] != null)
                $('#questionfoodthreeTenName').val(data['responses']['0'][id]['FQ29[SQ010_SQ001]']);
            if(data['responses']['0'][id]['FQ29[SQ010_SQ002]'] != null)
                $("#questionfoodthreeTenEmail").val(data['responses']['0'][id]['FQ29[SQ010_SQ002]']);
            if(data['responses']['0'][id]['FQ29[SQ010_SQ003]'] != null)
                $("#questionfoodthreeTenGrade").val(data['responses']['0'][id]['FQ29[SQ010_SQ003]']);
            
            if(data['responses']['0'][id]['F1'] != null)
              $rootScope.questionfoodfour = data['responses']['0'][id]['F1'];
            else
              $rootScope.questionfoodfour = "Y";
            
            if(data['responses']['0'][id]['F2'] != null)
              $rootScope.questionfoodfive = data['responses']['0'][id]['F2'];
            else
              $rootScope.questionfoodfive = "Y";
              
            if(data['responses']['0'][id]['FQ33'] != null)
                 $("#questionfoodsix").val(data['responses']['0'][id]['FQ33']);

            if(data['responses']['0'][id]['F15[SQ001_SQ001]'] != null)
              $("#questionfoodsevenOnePlease").val(data['responses']['0'][id]['F15[SQ001_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ001_SQ002]'] != null)
               $("#questionfoodsevenOneTotal").val(data['responses']['0'][id]['F15[SQ001_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ001W_SQ003]'] != null)
               $("#questionfoodsevenOneMonth").val(data['responses']['0'][id]['F15[SQ001W_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ002_SQ001]'] != null)
               $("#questionfoodsevenTwoPlease").val(data['responses']['0'][id]['F15[SQ002_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ002_SQ002]'] != null)
               $("#questionfoodsevenTwoTotal").val(data['responses']['0'][id]['F15[SQ002_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ002_SQ003]'] != null)
               $("#questionfoodsevenTwoMonth").val(data['responses']['0'][id]['F15[SQ002_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ003_SQ001]'] != null)
               $("#questionfoodsevenThreePlease").val(data['responses']['0'][id]['F15[SQ003_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ003_SQ002]'] != null)
              $("#questionfoodsevenThreeTotal").val(data['responses']['0'][id]['F15[SQ003_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ003_SQ003]'] != null)
              $("#questionfoodsevenThreeMonth").val(data['responses']['0'][id]['F15[SQ003_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ004_SQ001]'] != null)
              $("#questionfoodsevenFourPlease").val(data['responses']['0'][id]['F15[SQ004_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ004_SQ002]'] != null)
              $("#questionfoodsevenFourTotal").val(data['responses']['0'][id]['F15[SQ004_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ004_SQ003]'] != null)
              $("#questionfoodsevenFourMonth").val(data['responses']['0'][id]['F15[SQ004_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ005_SQ001]'] != null)
               $("#questionfoodsevenFivePlease").val(data['responses']['0'][id]['F15[SQ005_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ005_SQ002]'] != null)
               $("#questionfoodsevenFiveTotal").val(data['responses']['0'][id]['F15[SQ005_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ005_SQ003]'] != null)
               $("#questionfoodsevenFiveMonth").val(data['responses']['0'][id]['F15[SQ005_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ006_SQ001]'] != null)
               $("#questionfoodsevenSixPlease").val(data['responses']['0'][id]['F15[SQ006_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ006_SQ002]'] != null)
              $("#questionfoodsevenSixTotal").val(data['responses']['0'][id]['F15[SQ006_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ006_SQ003]'] != null)
              $("#questionfoodsevenSixMonth").val(data['responses']['0'][id]['F15[SQ006_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ007_SQ001]'] != null)
              $("#questionfoodsevenSevenPlease").val(data['responses']['0'][id]['F15[SQ007_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ007_SQ002]'] != null)
              $("#questionfoodsevenSevenTotal").val(data['responses']['0'][id]['F15[SQ007_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ007_SQ003]'] != null)
              $("#questionfoodsevenSevenMonth").val(data['responses']['0'][id]['F15[SQ007_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ008_SQ001]'] != null)
              $("#questionfoodsevenEightPlease").val(data['responses']['0'][id]['F15[SQ008_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ008_SQ002]'] != null)
              $("#questionfoodsevenEightTotal").val(data['responses']['0'][id]['F15[SQ008_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ008_SQ003]'] != null)
              $("#questionfoodsevenEightMonth").val(data['responses']['0'][id]['F15[SQ008_SQ003]']); 
            if(data['responses']['0'][id]['F15[SQ009_SQ001]'] != null)
              $("#questionfoodsevenNinePlease").val(data['responses']['0'][id]['F15[SQ009_SQ001]']); 
            if(data['responses']['0'][id]['F15[SQ009_SQ002]'] != null)
              $("#questionfoodsevenNineTotal").val(data['responses']['0'][id]['F15[SQ009_SQ002]']);
            if(data['responses']['0'][id]['F15[SQ009_SQ003]'] != null)
              $("#questionfoodsevenNineMonth").val(data['responses']['0'][id]['F15[SQ009_SQ003]']); 
            
            if(data['responses']['0'][id]['FQ35'] != null)
              $("#questionfoodeight").val(data['responses']['0'][id]['FQ35']); 

            if(data['responses']['0'][id]['FQ21'] != null)
              $rootScope.questionfoodnine = data['responses']['0'][id]['FQ21'];
            else
              $rootScope.questionfoodnine = "Y";
            
            if(data['responses']['0'][id]['FQ23'] != null)
              $rootScope.questionfoodten = data['responses']['0'][id]['FQ23'];
            else
              $rootScope.questionfoodten = "Y";
            
            if(data['responses']['0'][id]['F8'] != null)
              $rootScope.questionfoodeleven = data['responses']['0'][id]['F8'];
            else
              $rootScope.questionfoodeleven = "Y";
            
            if(data['responses']['0'][id]['F10'] != null)
              $rootScope.questionfoodtwelve = data['responses']['0'][id]['F10'];
            else
              $rootScope.questionfoodtwelve = "Y";
            

            if(data['responses']['0'][id]['F12'] != null)
              $rootScope.questionfoodthirteen = data['responses']['0'][id]['F12'];
            else
              $rootScope.questionfoodthirteen = "Y";
            
             
             $("#questionfoodthirteen").val(data["266617X36X1868"]);
            
    
//        General 1
            if(data['responses']['0'][id]['GE13[SQ001]'] != null)
               $("#questiongeneralone").val(data['responses']['0'][id]['GE13[SQ001]']);
            if(data['responses']['0'][id]['GE13[SQ002]'] != null)
               $("#questiongeneraltwo").val(data['responses']['0'][id]['GE13[SQ002]']);
            
            if(data['responses']['0'][id]['GE14'] != null)
              $rootScope.questiongeneralthree = data['responses']['0'][id]['GE14']
            else
              $rootScope.questiongeneralthree = "A1"
              
            if(data['responses']['0'][id]['GE31'] != null)
              $("#questiongeneralfive").val(data['responses']['0'][id]['GE31']);
            
            if(data['responses']['0'][id]['GE16[SQ001_SQ001'] != null)
              $("#questiongeneralsixOneMale").val(data['responses']['0'][id]['GE16[SQ001_SQ001']);
            if(data['responses']['0'][id]['GE16[SQ001_SQ002'] != null)
              $("#questiongeneralsixOneFemale").val(data['responses']['0'][id]['GE16[SQ001_SQ002']);
            if(data['responses']['0'][id]['GE16[SQ001_SQ003'] != null)
              $("#questiongeneralsixOneTotal").val(data['responses']['0'][id]['GE16[SQ001_SQ003']);
            if(data['responses']['0'][id]['GE16[SQ002_SQ001'] != null)
              $("#questiongeneralsixTwoMale").val(data['responses']['0'][id]['GE16[SQ002_SQ001']);
            if(data['responses']['0'][id]['GE16[SQ002_SQ002'] != null)
              $("#questiongeneralsixTwoFemale").val(data['responses']['0'][id]['GE16[SQ002_SQ002']);
            if(data['responses']['0'][id]['GE16[SQ002_SQ003'] != null)
              $("#questiongeneralsixTwoTotal").val(data['responses']['0'][id]['GE16[SQ002_SQ003']);
            if(data['responses']['0'][id]['GE16[SQ003_SQ001'] != null)
              $("#questiongeneralsixThreeMale").val(data['responses']['0'][id]['GE16[SQ003_SQ001']);
            if(data['responses']['0'][id]['GE16[SQ003_SQ002'] != null)
              $("#questiongeneralsixThreeFemale").val(data['responses']['0'][id]['GE16[SQ003_SQ002']);
            if(data['responses']['0'][id]['GE16[SQ003_SQ003'] != null)
              $("#questiongeneralsixThreeTotal").val(data['responses']['0'][id]['GE16[SQ003_SQ003']);
            if(data['responses']['0'][id]['GE16[SQ004_SQ001'] != null)
              $("#questiongeneralsixFourMale").val(data['responses']['0'][id]['GE16[SQ004_SQ001']);
            if(data['responses']['0'][id]['GE16[SQ004_SQ002'] != null)
              $("#questiongeneralsixFourFemale").val(data['responses']['0'][id]['GE16[SQ004_SQ002']);
            if(data['responses']['0'][id]['GE16[SQ004_SQ003'] != null)
              $("#questiongeneralsixFourTotal").val(data['responses']['0'][id]['GE16[SQ004_SQ003']);
            
            if(data['responses']['0'][id]['GE20'] != null)
               $("#questiongeneralseven").val(data['responses']['0'][id]['GE20']);
            if(data['responses']['0'][id]['GE17']!= null)
               $("#questiongeneraleight").val(data['responses']['0'][id]['GE17']);
            
            
            /*if(data['responses']['0'][id]['GE18[SQ001_SQ001]'] != null)
              $rootScope.questiongeneralnine.One = data['responses']['0'][id]['GE18[SQ001_SQ001]']
           else
              $rootScope.questiongeneralnine.One = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ002]'] != null)
              $rootScope.questiongeneralnine.Two = data['responses']['0'][id]['GE18[SQ001_SQ002]']
           else
              $rootScope.questiongeneralnine.Two = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ003]'] != null)
              $rootScope.questiongeneralnine.Three = data['responses']['0'][id]['GE18[SQ001_SQ003]']
           else
              $rootScope.questiongeneralnine.Three = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ004]'] != null)
              $rootScope.questiongeneralnine.Four = data['responses']['0'][id]['GE18[SQ001_SQ004]']
           else
              $rootScope.questiongeneralnine.Four = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ005]'] != null)
              $rootScope.questiongeneralnine.Five = data['responses']['0'][id]['GE18[SQ001_SQ005]']
           else
              $rootScope.questiongeneralnine.Five = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ006]'] != null)
              $rootScope.questiongeneralnine.Six = data['responses']['0'][id]['GE18[SQ001_SQ006]']
           else
              $rootScope.questiongeneralnine.Six = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ007]'] != null)
              $rootScope.questiongeneralnine.Seven = data['responses']['0'][id]['GE18[SQ001_SQ007]']
           else
              $rootScope.questiongeneralnine.Seven = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ008]'] != null)
              $rootScope.questiongeneralnine.Eight = data['responses']['0'][id]['GE18[SQ001_SQ008]']
           else
              $rootScope.questiongeneralnine.Eight = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ009]'] != null)
              $rootScope.questiongeneralnine.Nine = data['responses']['0'][id]['GE18[SQ001_SQ009]']
           else
              $rootScope.questiongeneralnine.Nine = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ010]'] != null)
              $rootScope.questiongeneralnine.Ten = data['responses']['0'][id]['GE18[SQ001_SQ010]']
           else
              $rootScope.questiongeneralnine.Ten = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ011]'] != null)
              $rootScope.questiongeneralnine.Eleven = data['responses']['0'][id]['GE18[SQ001_SQ011]']
           else
              $rootScope.questiongeneralnine.Eleven = "N"
           
           if(data['responses']['0'][id]['GE18[SQ001_SQ012]'] != null)
              $rootScope.questiongeneralnine.Twelve = data['responses']['0'][id]['GE18[SQ001_SQ012]']
           else
              $rootScope.questiongeneralnine.Twelve = "N"
           
            /*var questiongeneral9One =$scope.questiongeneralnine.One;
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
            var questiongeneral9Twelve = $scope.questiongeneralnine.Twelve;*/
            
           if(data['responses']['0'][id]['GE19'] != null)
              $rootScope.questiongeneralten = data['responses']['0'][id]['GE19']
           else
              $rootScope.questiongeneralten = "A1"
            
           
          

//        Land
           if (data['responses']['0'][id]['LQ22[SQ001_SQ001]'] != null)     
              $('#landoneName').val(data['responses']['0'][id]['LQ22[SQ001_SQ001]']);
           if(data['responses']['0'][id]['LQ22[SQ001_SQ002]'] != null)
             $("#landoneEmail").val(data['responses']['0'][id]['LQ22[SQ001_SQ002]']);
           if(data['responses']['0'][id]['LQ22[SQ002_SQ001]'] != null)
              $("#landtwoName").val(data['responses']['0'][id]['LQ22[SQ002_SQ001]']);
           if(data['responses']['0'][id]['LQ22[SQ002_SQ002]'] != null)
              $("#landtwoEmail").val(data['responses']['0'][id]['LQ22[SQ002_SQ002]']);
           if(data['responses']['0'][id]['LQ22[SQ003_SQ001]'] != null)
              $("#landthreeName").val(data['responses']['0'][id]['LQ22[SQ003_SQ001]']);
           if(data['responses']['0'][id]['LQ22[SQ001_SQ002]'] != null)
              $("#landthreeEmail").val(data['responses']['0'][id]['LQ22[SQ003_SQ002]']);

          if(data['responses']['0'][id]['LG23[SQ001_SQ001]'] != null)
            $('#questionlandtwoOneName').val(data['responses']['0'][id]['LG23[SQ001_SQ001]']);
         if(data['responses']['0'][id]['LG23[SQ001_SQ002]'] != null)
            $("#questionlandtwoOneEmail").val(data['responses']['0'][id]['LG23[SQ001_SQ002]']);
         if(data['responses']['0'][id]['LG23[SQ002_SQ001]'] != null)
            $("#questionlandtwoTwoName").val(data['responses']['0'][id]['LG23[SQ002_SQ001]'] );
         if(data['responses']['0'][id]['LG23[SQ002_SQ002]'] != null)
            $("#questionlandtwoTwoEmail").val(data['responses']['0'][id]['LG23[SQ002_SQ002]']);
         if(data['responses']['0'][id]['LG23[SQ003_SQ001]'] != null)
             $("#questionlandtwoThreeName").val(data['responses']['0'][id]['LG23[SQ003_SQ001]']);
         if(data['responses']['0'][id]['LG23[SQ003_SQ002]'] != null)
            $("#questionlandtwoThreeEmail").val(data['responses']['0'][id]['LG23[SQ003_SQ002]']);
         if(data['responses']['0'][id]['LG23[SQ004_SQ001]'] != null)
            $("#questionlandtwoFourName").val(data['responses']['0'][id]['LG23[SQ004_SQ001]']);
         if(data['responses']['0'][id]['LG23[SQ004_SQ002]'] != null)
            $("#questionlandtwoFourEmail").val(data['responses']['0'][id]['LG23[SQ004_SQ002]']);
         if(data['responses']['0'][id]['LG23[SQ005_SQ001]'] != null)
            $("#questionlandtwoFiveName").val(data['responses']['0'][id]['LG23[SQ005_SQ001]']);
         if(data['responses']['0'][id]['LG23[SQ005_SQ002]'] != null)
            $("#questionlandtwoFiveEmail").val(data['responses']['0'][id]['LG23[SQ005_SQ002]']);
         
           if(data['responses']['0'][id]['LG24[SQ001_SQ001]'] != null)
              $('#questionlandthreeOneName').val(data['responses']['0'][id]['LG24[SQ001_SQ001]']);
           if(data['responses']['0'][id]['LG24[SQ001_SQ002]'] != null)
              $("#questionlandthreeOneEmail").val(data['responses']['0'][id]['LG24[SQ001_SQ002]']);
           if(data['responses']['0'][id]['LG24[SQ001_SQ003]'] != null)
              $("#questionlandtwoOneGrade").val(data['responses']['0'][id]['LG24[SQ001_SQ003]']);
           if(data['responses']['0'][id]['LG24[SQ002_SQ001]'] != null)
              $('#questionlandthreeTwoName').val(data['responses']['0'][id]['LG24[SQ002_SQ001]']);
           if(data['responses']['0'][id]['LG24[SQ002_SQ002]'] != null)
              $("#questionlandthreeTwoEmail").val(data['responses']['0'][id]['LG24[SQ002_SQ002]']);
           if(data['responses']['0'][id]['LG24[SQ002_SQ003]'] != null)
              $("#questionlandtwoOneGrade").val(data['responses']['0'][id]['LG24[SQ002_SQ003]']);
           if(data['responses']['0'][id]['LG24[SQ003_SQ001]'] != null)
              $('#questionlandthreeThreeName').val(data['responses']['0'][id]['LG24[SQ003_SQ001]']);
           if(data['responses']['0'][id]['LG24[SQ003_SQ002]'] != null)
              $("#questionlandthreeThreeEmail").val(data['responses']['0'][id]['LG24[SQ003_SQ002]']);
           if(data['responses']['0'][id]['LG24[SQ003_SQ003]'] != null)
              $("#questionlandthreeThreeGrade").val(data['responses']['0'][id]['LG24[SQ003_SQ003]']);
           if(data['responses']['0'][id]['LG24[SQ004_SQ001]'] != null)
              $('#questionlandthreeFourName').val(data['responses']['0'][id]['LG24[SQ004_SQ001]']);
           if(data['responses']['0'][id]['LG24[SQ004_SQ002]'] != null)
              $("#questionlandthreeFourEmail").val(data['responses']['0'][id]['LG24[SQ004_SQ002]']);
           if(data['responses']['0'][id]['LG24[SQ004_SQ003]'] != null)
              $("#questionlandthreeFiveGrade").val(data['responses']['0'][id]['LG24[SQ004_SQ003]']);
           if(data['responses']['0'][id]['LG24[SQ005_SQ001]'] != null)
              $('#questionlandthreeFiveName').val(data['responses']['0'][id]['LG24[SQ005_SQ001]']);
           if(data['responses']['0'][id]['LG24[SQ005_SQ002]'] != null)
              $("#questionlandthreeFiveEmail").val(data['responses']['0'][id]['LG24[SQ005_SQ002]']);
           if(data['responses']['0'][id]['LG24[SQ005_SQ003]'] != null)
              $("#questionlandthreeFiveGrade").val(data['responses']['0'][id]['LG24[SQ005_SQ003]']);
           if(data['responses']['0'][id]['LG24[SQ006_SQ001]'] != null)
              $('#questionlandthreeSixName').val(data['responses']['0'][id]['LG24[SQ006_SQ001]']);
          if(data['responses']['0'][id]['LG24[SQ006_SQ002]'] != null)
              $("#questionlandthreeSixEmail").val(data['responses']['0'][id]['LG24[SQ006_SQ002]']);
          if(data['responses']['0'][id]['LG24[SQ006_SQ003]'] != null)
              $("#questionlandthreeSixGrade").val(data['responses']['0'][id]['LG24[SQ006_SQ003]']);
          if(data['responses']['0'][id]['LG24[SQ007_SQ001]'] != null)
              $('#questionlandthreeSevenName').val(data['responses']['0'][id]['LG24[SQ007_SQ001]']);
          if(data['responses']['0'][id]['LG24[SQ007_SQ002]'] != null)
              $("#questionlandthreeSevenEmail").val(data['responses']['0'][id]['LG24[SQ007_SQ002]']);
          if(data['responses']['0'][id]['LG24[SQ007_SQ003]'] != null)
              $("#questionlandthreeSevenGrade").val(data['responses']['0'][id]['LG24[SQ007_SQ003]']);
          if(data['responses']['0'][id]['LG24[SQ008_SQ001]'] != null)
              $('#questionlandthreeEightName').val(data['responses']['0'][id]['LG24[SQ008_SQ001]']);
          if(data['responses']['0'][id]['LG24[SQ008_SQ002]'] != null)
              $("#questionlandthreeEightEmail").val(data['responses']['0'][id]['LG24[SQ008_SQ002]']);
          if(data['responses']['0'][id]['LG24[SQ008_SQ003]'] != null)
              $("#questionlandthreeEightGrade").val(data['responses']['0'][id]['LG24[SQ008_SQ003]']);
          if(data['responses']['0'][id]['LG24[SQ009_SQ001]'] != null)
              $('#questionlandthreeNineName').val(data['responses']['0'][id]['LG24[SQ009_SQ001]']);
          if(data['responses']['0'][id]['LG24[SQ009_SQ002]'] != null)
              $("#questionlandthreeNineEmail").val(data['responses']['0'][id]['LG24[SQ009_SQ002]']);
          if(data['responses']['0'][id]['LG24[SQ009_SQ003]'] != null)
              $("#questionlandthreeNineGrade").val(data['responses']['0'][id]['LG24[SQ009_SQ003]']);
          if(data['responses']['0'][id]['LG24[SQ010_SQ001]'] != null)
              $('#questionlandthreeTenName').val(data['responses']['0'][id]['LG24[SQ010_SQ001]']);
          if(data['responses']['0'][id]['LG24[SQ010_SQ002]'] != null)
              $("#questionlandthreeTenEmail").val(data['responses']['0'][id]['LG24[SQ010_SQ002]']);
          if(data['responses']['0'][id]['LG24[SQ010_SQ003]'] != null)
              $("#questionlandthreeTenGrade").val(data['responses']['0'][id]['LG24[SQ010_SQ003]']);
          
           
          if(data['responses']['0'][id]['LG14[SQ001_SQ002]'] != null)
              $("#questionlandfourOneArea").val(data['responses']['0'][id]['LG14[SQ001_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ002_SQ002]'] != null)
              $("#questionlandfourTwoArea").val(data['responses']['0'][id]['LG14[SQ002_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ003_SQ002]'] != null)
              $("#questionlandfourThreeArea").val(data['responses']['0'][id]['LG14[SQ003_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ004_SQ002]'] != null)
              $("#questionlandfourFourArea").val(data['responses']['0'][id]['LG14[SQ004_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ005_SQ002]'] != null)
              $("#questionlandfourFiveArea").val(data['responses']['0'][id]['LG14[SQ005_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ006_SQ002]'] != null)
              $("#questionlandfourSixArea").val(data['responses']['0'][id]['LG14[SQ006_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ007_SQ002]'] != null)
              $("#questionlandfourSevenArea").val(data['responses']['0'][id]['LG14[SQ007_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ008_SQ002]'] != null)
              $("#questionlandfourEightArea").val(data['responses']['0'][id]['LG14[SQ008_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ009_SQ002]'] != null)
             $("#questionlandfourNineArea").val(data['responses']['0'][id]['LG14[SQ009_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ010_SQ002]'] != null)
             $("#questionlandfourTenArea").val(data['responses']['0'][id]['LG14[SQ010_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ0011_SQ002]'] != null)
             $("#questionlandfourElevenArea").val(data['responses']['0'][id]['LG14[SQ0011_SQ002]']);
          if(data['responses']['0'][id]['LG14[SQ012_SQ002]'] != null)
             $("#questionlandfourTwelveArea").val(data['responses']['0'][id]['LG14[SQ012_SQ002]']);
          
          if(data['responses']['0'][id]['LQ2[SQ001_SQ002]'] != null)
             $("#questionlandfiveOneNative").val(data['responses']['0'][id]['LQ2[SQ001_SQ002]']);
          if(data['responses']['0'][id]['LQ2[SQ001_SQ003]'] != null)
              $("#questionlandfiveOneExotic").val(data['responses']['0'][id]['LQ2[SQ001_SQ003]']);
          if(data['responses']['0'][id]['LQ2[SQ001_SQ004]'] != null)
             $("#questionlandfiveOneTotal").val(data['responses']['0'][id]['LQ2[SQ001_SQ004]']);
          if(data['responses']['0'][id]['LQ2[SQ002_SQ002]'] != null)
             $("#questionlandfiveTwoNative").val(data['responses']['0'][id]['LQ2[SQ002_SQ002]']);
          if(data['responses']['0'][id]['LQ2[SQ002_SQ003]'] != null)
             $("#questionlandfiveTwoExotic").val(data['responses']['0'][id]['LQ2[SQ002_SQ003]']);
          if(data['responses']['0'][id]['LQ2[SQ002_SQ004]'] != null)
             $("#questionlandfiveTwoTotal").val(data['responses']['0'][id]['LQ2[SQ002_SQ004]']);

          if(data['responses']['0'][id]['LQ3'] != null)
              $rootScope.questionlandsix = data['responses']['0'][id]['LQ3'];
          else
              $rootScope.questionlandsix = "Y";
            
          //$("#questionlandseven").val(data["266617X7X2258"]);
//        Water

     /*$('#wateroneName').val(data[""]);
     $("#wateroneEmail").val(data[""]);
     $("#watertwoName").val(data[""]);
     $("#watertwoEmail").val(data[""]);
     $("#waterthreeName").val(data[""]);
     $("#waterthreeEmail").val(data[""]);

     $('#questionwatertwoOneName').val(data[""]);
     $("#questionwatertwoOneEmail").val(data[""]);
     $("#questionwatertwoTwoName").val(data[""]);
     $("#questionwatertwoTwoEmail").val(data[""]);
     $("#questionwatertwoThreeName").val(data[""]);
     $("#questionwatertwoThreeEmail").val(data[""]);
     $("#questionwatertwoFourName").val(data[""]);
     $("#questionwatertwoFourEmail").val(data[""]);
     $("#questionwatertwoFiveName").val(data[""]);
    $("#questionwatertwoFiveEmail").val(data[""]);

     $('#questionwaterthreeOneName').val(data[""]);
     $("#questionwaterthreeOneEmail").val(data[""]);
     $("#questionwatertwoOneGrade").val(data[""]);
     $('#questionwaterthreeOneName').val(data[""]);
     $("#questionwaterthreeOneEmail").val(data[""]);
    $("#questionwatertwoOneGrade").val(data[""]);
     $('#questionwaterthreeThreeName').val(data[""]);
     $("#questionwaterthreeThreeEmail").val(data[""]);
     $("#questionwaterthreeThreeGrade").val(data[""]);
     $('#questionwaterthreeFourName').val(data[""]);
     $("#questionwaterthreeFourEmail").val(data[""]);
     $("#questionwaterthreeFiveGrade").val(data[""]);
    $('#questionwaterthreeFiveName').val(data[""]);
     $("#questionwaterthreeFiveEmail").val(data[""]);
     $("#questionwaterthreeFiveGrade").val(data[""]);
     $('#questionwaterthreeSixName').val(data[""]);
     $("#questionwaterthreeSixEmail").val(data[""]);
     $("#questionwaterthreeSixGrade").val(data[""]);
     $('#questionwaterthreeSevenName').val(data[""]);
     $("#questionwaterthreeSevenEmail").val(data[""]);
     $("#questionwaterthreeSevenGrade").val(data[""]);
     $('#questionwaterthreeEightName').val(data[""]);
    $("#questionwaterthreeEightEmail").val(data[""]);
     $("#questionwaterthreeEightGrade").val(data[""]);
     $('#questionwaterthreeNineName').val(data[""]);
    $("#questionwaterthreeNineEmail").val(data[""]);
    $("#questionwaterthreeNineGrade").val(data[""]);
     $('#questionwaterthreeTenName').val(data[""]);
     $("#questionwaterthreeTenEmail").val(data[""]);
     $("#questionwaterthreeTenGrade").val(data[""]);

     $("#questionwaterfourOneTotal").val(data[""]);
     $("#questionwaterfourTwoTotal").val(data[""]);
     $("#questionwaterfourThreeTotal").val(data[""]);
     $("#questionwaterfourFourTotal").val(data[""]);
     $("#questionwaterfourFiveTotal").val(data[""]);
    $("#questionwaterfourSixTotal").val(data[""]);
    $("#questionwaterfourSevenTotal").val(data[""]);
     $("#questionwaterfourEightTotal").val(data[""]);
     $("#questionwaterfourNineTotal").val(data[""]);
     $("#questionwaterfourTenTotal").val(data[""]);

    var questionwater5One = $scope.questionwaterfive.One;
    var questionwater5Two = $scope.questionwaterfive.Two;
    var questionwater5Three = $scope.questionwaterfive.Three;
    var questionwater5Four = $scope.questionwaterfive.Four;
    
    var questionwater6One  = $scope.questionwaterfiveThree.One;
    var questionwater6Two  = $scope.questionwaterfiveThree.Two;
    var questionwater6Three  = $scope.questionwaterfiveThree.Three;
    var questionwater6Four  = $scope.questionwaterfiveThree.Four;
    var questionwater6Five  = $scope.questionwaterfiveThree.Five;

    $("#questionwatersix").val(data[""]);

    var questionwater8 = $scope.questionwaterseven.choice;

    var questionwater9one = $scope.questionwatereightOne.choice;
    var questionwater9two = $scope.questionwatereightTwo.choice;
    var questionwater9three = $scope.questionwatereightThree.choice;
    var questionwater9four = $scope.questionwatereightFour.choice;
    var questionwater9five = $scope.questionwatereightFive.choice;
    var questionwater9six = $scope.questionwatereightSix.choice;
    var questionwater9seven = $scope.questionwatereightSeven.choice;
    var questionwater9eight = $scope.questionwatereightEight.choice;
    var questionwater9nine = $scope.questionwatereightNine.choice;
    var questionwater9ten = $scope.questionwatereightTen.choice;
    var questionwater9eleven = $scope.questionwatereightEleven.choice;

    var questionwater10 = $scope.questionwaternine.choice;
    
    var questionwater11 = $scope.questionwaterten.choice;
    
    var questionwater12 = $scope.questionwatereleven.choice;
    
    var questionwater13 = $scope.questionwatertwelve.choice;
    
    var questionwater14 = $scope.questionwaterthirteen.choice;
    
    var questionwater15One = $scope.questionwaterfourteen.One;
    var questionwater15Two = $scope.questionwaterfourteen.Two;
    var questionwater15Three = $scope.questionwaterfourteen.Three;
    var questionwater15Four = $scope.questionwaterfourteen.Four;
    var questionwater15Five = $scope.questionwaterfourteen.Five;
    var questionwater15Six = $scope.questionwaterfourteen.Six;
    var questionwater15Seven = $scope.questionwaterfourteen.Seven;
    var questionwater15Eight = $scope.questionwaterfourteen.Eight;
    
    var questionwater16 = $scope.questionwaterfifteen;*/

                 
                    },
                    error:function(xhr) {
                      alert(xhr.message);
                    }

                  });
             },
                error:function(xhr) {
                alert('error');
             }
        });	