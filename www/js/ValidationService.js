angular.module('starter.validation', [])
  .factory('ValidationService', function () {
  return {
    required_val: function () {
      return true;
    },

    validateTeacher: function (section) {
      var qNameID, qEmailID;
      for (var i = 1; i <= 3; i++) {
        qNameID = 'Q1L' + i + 'S1';
        qEmailID = 'Q1L' + i + 'S2';
      }
      return true;
    }

  };
});
