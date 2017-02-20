const { GraphQLString, GraphQLObjectType, GraphQLList, GraphQLScalarType } = require('graphql');

const links = new GraphQLScalarType({
  name: 'links',
  parseValue(value) {
    return value;
  },
  serialize(value) {
    return value;
  },
  parseLiteral(ast) {
    // if (ast.kind === Kind.INT) {
    //   return parseInt(ast.value, 10); // ast value is always in string format
    // }
    return null;
  },
});

const nested = new GraphQLScalarType({
  name: 'nested',
  parseValue(value) {
    return value;
  },
  serialize(value) {
    return value;
  },
  parseLiteral(ast) {
    // if (ast.kind === Kind.INT) {
    //   return parseInt(ast.value, 10); // ast value is always in string format
    // }
    return null;
  },
});

module.exports = new GraphQLObjectType({
  name: 'Project',
  description: '',
  fields: {
    name: {type: GraphQLString},
    platform: {type: GraphQLString},
    language: {type: GraphQLString},
    links: {type: links},
    nested: {type: nested},
    images: {type: new GraphQLList(GraphQLString)},
    description: {type: GraphQLString}
  }
});
