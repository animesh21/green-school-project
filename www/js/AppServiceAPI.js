angular.module('starter.api', [])
  .factory('AppServiceAPI', function ($http, $cordovaSQLite, $ionicPlatform, $rootScope) {
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

    var vm = this;

    return {

      insert: function (userid, questionid, answer, score, type) {
        var query = "INSERT OR REPLACE INTO gsp_answers (userid, questionid, answer, score, type) VALUES" +
          " (?,?,?,?,?)";
        return $cordovaSQLite.execute(db, query, [userid, questionid, answer, score, type]).then(function (res) {
          // console.log("INSERT ID -> " + res.insertId);
          return res;
        });
      },

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

      update: function (userid, questionid, answer, score, type) {
        var query = "REPLACE INTO gsp_answers (userid, questionid, answer, score, type) VALUES (?,?,?,?,?)";
        return $cordovaSQLite.execute(db, query, [userid, questionid, answer, score, type]).then(function (res) {
          // console.log("INSERT ID -> " + res.insertId);
          return res;
        });
      },

      deleteAllAnswers: function (userid) {
        var query = "DELETE FROM gsp_answers WHERE userid = ?";
        return $cordovaSQLite.execute(db, query, [userid]);
      },

      // user functions
      insertUser: function (user_id, email, password, school_name, state, completeness, login_status) {
        var query = "INSERT INTO gsp_users (user_id, email, password, school_name, state, completeness, login_status) VALUES " +
          "(?, ?, ?, ?, ?, ?, ?)";
        return $cordovaSQLite.execute(db, query, [user_id, email, password, school_name, state, completeness, login_status]);
      },

      selectUser: function (login_status) {
        var query = "SELECT user_id, completeness, email, password FROM gsp_users WHERE login_status = ?";
        return $cordovaSQLite.execute(db, query, [login_status]);
      },

      getUserCompleteness: function (user_id) {
        var query = "SELECT completeness FROM gsp_users WHERE user_id = ?";
        return $cordovaSQLite.execute(db, query, [user_id]);
      },

      logoutUser: function (user_id) {
        console.log('Logging out userid: ' + user_id);
        var query = "UPDATE gsp_users SET login_status = 0 WHERE user_id = ?";
        return $cordovaSQLite.execute(db, query, [user_id]).then(function (res) {
          console.log("Logged out user from database: " + JSON.stringify(res));
          return res;
          }, function (err) {
          console.log("Can't logout user in the database: " + JSON.stringify(err));
          return err;
        });
      },

      updateUserCompleteness: function (user_id, completeness) {
        console.log('Updating completeness to: ' + completeness);
        var query = "UPDATE gsp_users SET completeness = ? WHERE user_id = ? AND gsp_users.completeness < ?";
        return $cordovaSQLite.execute(db, query, [completeness, user_id, completeness]);
      },

      updateUserPrimary: function (user_id, is_primary) {
        // console.log('Updating primary to: ' + is_primary);
        var query = "UPDATE gsp_users SET is_primary = ? WHERE user_id = ?";
        return $cordovaSQLite.execute(db, query, [is_primary, user_id]);
      },

      deleteAllUsers: function () {
        var query = "DELETE FROM gsp_users";
        return $cordovaSQLite.execute(db, query, []);
      },

      sync: function (type) {
        var data = {};
        var query, queryBinding;
        if (type === 100) {
          query = "SELECT * FROM gsp_answers WHERE userid = ?";
          queryBinding = [$rootScope.user];
        }
        else {
          query = "SELECT * FROM gsp_answers WHERE type = ? AND userid = ?";
          queryBinding = [type, $rootScope.user];
        }
        return $cordovaSQLite.execute(db, query, queryBinding).then(function (res) {
          if (res.rows.length > 0) {
            // console.log('Found ' + res.rows.length + ' entries of type: ' + type);
            // console.log('Data sent to the api: ');
            // console.log(res.rows);
            var questionid;
            // console.log('Saving to the api: ' + JSON.stringify(res.rows));
            for (var i = 0; i < res.rows.length; i++) {
              data[i.toString()] = res.rows.item(i);
            }
            data[i.toString()] = {
              userid: $rootScope.user,
              questionid: 'progress',
              answer: $rootScope.completeness,
              score: 0,
              type: 0
            };
            console.log('Data made: ' + JSON.stringify(data));
            $http({
              method: "POST",
              url: "http://greenschoolsprogramme.org/audit2017/api/Gsp/users/",
              // url: "http://127.0.0.1/GSP/api/Gsp/users/",
              data: {survey: data},
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
