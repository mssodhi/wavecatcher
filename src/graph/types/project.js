const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Project',
  description: '',
  fields: {
    name: {type: GraphQLString},
    platform: {type: GraphQLString},
    language: {type: GraphQLString},
    links: {type: new GraphQLObjectType({
      name: 'links',
      fields: {
        site: {type: GraphQLString},
        github: {type: GraphQLString}
      }
    })},
    images: {type: new GraphQLList(GraphQLString)}
  }
});
