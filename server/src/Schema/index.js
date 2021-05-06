const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;
const { GET_ALL_USERS } = require('./Queries/User');
const { CREATE_USER } = require('./Mutations/User');


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    }
});

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})