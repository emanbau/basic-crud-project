const UserType = require('../TypeDefs/User');
const graphql = require('graphql')
const { GraphQLString } = graphql;


const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parent, args) {
        const {name, username, password} = args;
        return args;
    }
}


module.exports = { CREATE_USER };