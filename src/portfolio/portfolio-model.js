const projects = require('./data/projects.json');
const courses = require('./data/courses.json');

let model = {
  getProjects: function () {
    return new Promise(function (resolve, reject){
      resolve(projects);
    });
  },

  getCourses: function () {
    return new Promise(function (resolve, reject){
      resolve(courses);
    });
  }
};

module.exports = model;
