angular.module('starter.api', []).factory('AppServiceAPI', function ($http, $cordovaSQLite) {
  var db;
  if (window.cordova) {
        db = $cordovaSQLite.openDB({name: "quiz.db"}); //device
        console.log("Android");
      }
      else {
        db = window.openDatabase("quiz.db", '1', 'my', 1024 * 1024 * 100); // browser
        console.log("browser");
      }
  return {

    select: function (type) {

      var query = "SELECT questionid,answer FROM gsp_answers WHERE type = ?";
      return $cordovaSQLite.execute(db, query, [type])
    },

    selectall: function (type) {
      var data;
      var query = "SELECT questionid,answer FROM gsp_answers";
      return $cordovaSQLite.execute(db, query)
    },

    insert: function (userid, questionid, answer, score, type) {
      var query = "INSERT INTO gsp_answers (userid,questionid,answer,score,type) VALUES (?,?,?,?,?)";
      $cordovaSQLite.execute(db, query, [userid, questionid, answer, score, type]).then(function (res) {
        console.log("INSERT ID -> " + res.insertId);
      });
    },

    update: function (userid, questionid, answer, score, type) {
      var query = "REPLACE INTO gsp_answers (userid, questionid, answer, score, type) VALUES (?,?,?,?,?)";
      $cordovaSQLite.execute(db, query, [userid, questionid, answer, score, type]).then(function (res) {
        console.log("INSERT ID -> " + res.insertId);
      });
    },

    sync: function () {
      var data = {};
      var query = "SELECT * FROM gsp_answers";
      $cordovaSQLite.execute(db, query).then(function (res) {
        if (res.rows.length > 0) {
          //console.log(res.rows);
          angular.forEach(res.rows, function (item, index) {
            questionid = res.rows.item(index).questionid;
            console.log(questionid, res.rows.item(index).answer, item, index);
            data[questionid] = res.rows.item
          });
          console.log(data);
          $http({
            method: "POST",
            url: "http://studio-tesseract.co/GSP/api/Gsp/users/",
            data: {survey: res.rows},
            headers: {
              "Content-Type": "application/json"
            }
          }).then(function (response) {
            console.log(response)
          });

          /*$cordovaSQLite.execute(db, query).then(function(res) {
           if(res.rows.length > 0)
           angular.forEach(res.rows, function(item,index) {
           //questionid = res.rows.item(index).questionid
           console.log(item);
           //$scope.air[questionid] = res.rows.item(index).answer;
           });
           });*/

        }

        //$http.post("http://studio-tesseract.co/GSP/api/Gsp/users/",)
      });
    },

    db: db
  };
});
