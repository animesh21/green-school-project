angular.module('starter.api', [])
  .factory('AppServiceAPI', function ($http, $cordovaSQLite, $ionicPlatform) {
    var db = null;

    $ionicPlatform.ready(function () {
      if (window.cordova) {
        db = $cordovaSQLite.openDB({name: "quiz.db", location: 'default'}); //device
      }
      else {
        db = window.openDatabase("quiz.db", '1', 'my', 1024 * 1024 * 100); // browser
      }
    }, function (error) {
      console.error('Error in platform ready in api: ' + error);
    });

    return {

      select: function (type) {
        var query = "SELECT questionid,answer FROM gsp_answers WHERE type = ?";
        return $cordovaSQLite.execute(db, query, [type]);
      },

      selectQuestion: function (questionID) {
        var query = "SELECT questionid,answer FROM gsp_answers WHERE questionid = ?";
        return $cordovaSQLite.execute(db, query, [questionID]);
      },

      selectall: function (type) {
        var query = "SELECT questionid,answer FROM gsp_answers";
        return $cordovaSQLite.execute(db, query);
      },

      insert: function (userid, questionid, answer, score, type) {
        var query = "INSERT OR REPLACE INTO gsp_answers (userid, questionid, answer, score, type) VALUES" +
          " (?,?,?,?,?)";
        return $cordovaSQLite.execute(db, query, [userid, questionid, answer, score, type]).then(function (res) {
          // console.log("INSERT ID -> " + res.insertId);
          return res;
        });
      },

      update: function (userid, questionid, answer, score, type) {
        var query = "REPLACE INTO gsp_answers (userid, questionid, answer, score, type) VALUES (?,?,?,?,?)";
        return $cordovaSQLite.execute(db, query, [userid, questionid, answer, score, type]).then(function (res) {
          // console.log("INSERT ID -> " + res.insertId);
          return res;
        });
      },

      sync: function (type) {
        var data = {};
        var query = "SELECT * FROM gsp_answers WHERE type = ?";
        return $cordovaSQLite.execute(db, query, [type]).then(function (res) {
          if (res.rows.length > 0) {
            // console.log('Found ' + res.rows.length + ' entries of type: ' + type);
            // console.log('Data sent to the api: ');
            console.log(res.rows);
            var questionid;
            // console.log('Saving to the api: ' + JSON.stringify(res.rows));
            for (var i = 0; i < res.rows.length; i++) {

              var item = res.rows.item(i);
              data[item.questionid] = item.answer;
            }
            // console.log(data);
            $http({
              method: "POST",
              url: "http://greenschoolsprogramme.org/audit2017/api/Gsp/users/",
              // url: "http://127.0.0.1/GSP/api/Gsp/users/",
              data: {survey: res.rows},
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (response) {
              console.log('Saved data to the api');
              // console.log('response after saving to the api: ' + JSON.stringify(response));
            }, function (err) {
              console.error('Error while saving to the api: ' + JSON.stringify(err));
            });
          }
        });
      },

      db: db
    };
  });
