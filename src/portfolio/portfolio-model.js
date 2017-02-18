const projects = require('./data/projects.json');
const courses = require('./data/courses.json');

let model = {
  getProjects: function (args) {
    return new Promise(function (resolve, reject){
      if(args && args.name) {
        resolve(projects.filter(project => project.name === args.name));
      } else {
        resolve(projects);
      }
    });
  },

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
