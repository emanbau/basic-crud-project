const UserType = require('../TypeDefs/User');
const graphql = require('graphql')
const { GraphQLList, GraphQLInt } = graphql;

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return [];
    }
}


module.exports = {GET_ALL_USERS };
