const { GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');
const portfolioModel = require('../portfolio/portfolio-model');
const ProjectType = require('./types/project');
const CourseType = require('./types/course');

const query = new GraphQLObjectType({
  name: 'Root',
  description: '',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      args: {
        name: {type: GraphQLString}
      },
      resolve: (_, args) => portfolioModel.getProjects(args)
    },
    courses: {
      type: new GraphQLList(CourseType),
      args: {
        name: {type: GraphQLString}
      },
      resolve: (_, args) => portfolioModel.getCourses(args)
    }
  }
});

module.exports = new GraphQLSchema({
  query: query
});
