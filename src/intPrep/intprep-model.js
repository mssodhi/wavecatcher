let db = require('./../shared/db');

let model = {
  getCourses: function () {
    return new Promise(function (resolve, reject){
      db.wavecatcher.collection('courses').find({}).toArray((err, res) => {
        resolve(res);
      });
    });
  },

  getQuestionsForCourse: function(id) {
    return new Promise(function (resolve, reject){
      if(id) {
        db.wavecatcher.collection('questions').find({'course._id': id }).toArray((err, res) => {
          resolve(res);
        });
      } else {
        reject()
      }
    });
  }

};

module.exports = model;
