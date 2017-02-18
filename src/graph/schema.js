const { GraphQLObjectType, GraphQLSchema, GraphQLList } = require('graphql');
const portfolioModel = require('../portfolio/portfolio-model');
const ProjectType = require('./types/project');
const CourseType = require('./types/course');

const query = new GraphQLObjectType({
  name: 'Root',
  description: '',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: (_, args) => portfolioModel.getProjects()
    },
    courses: {
      type: new GraphQLList(CourseType),
      resolve: (_, args) => portfolioModel.getCourses()
    }
  }
});

module.exports = new GraphQLSchema({
  query: query
});
