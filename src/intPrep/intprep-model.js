const courses = require('./data/courses.json');
const questions = require('./data/questions.json');

let model = {
  getCourses: function (args) {
    return new Promise(function (resolve, reject){
      if(args && args.name) {
        resolve(courses.filter(course => course.name === args.name));
      } else {
        resolve(courses);
      }
    });
  },

  getQuestionsForCourse: function(id) {
    return new Promise(function (resolve, reject){
      if(id) {
        resolve(questions.filter(question => question.course.id == id));
      } else {
        reject()
      }
    });
  }

};

module.exports = model;
