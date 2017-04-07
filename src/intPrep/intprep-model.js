const courses = require('./data/courses.json');

let model = {
  getCourses: function (args) {
    return new Promise(function (resolve, reject){
      if(args && args.name) {
        resolve(courses.filter(course => course.name === args.name));
      } else {
        resolve(courses);
      }
    });
  }
};

module.exports = model;
