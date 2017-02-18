const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Course',
  description: '',
  fields: {
    name: {type: GraphQLString}
  }
});
