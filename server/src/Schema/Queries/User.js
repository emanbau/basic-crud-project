const UserType = require('../TypeDefs/User');
const graphql = require('graphql')
const { GraphQLList } = graphql;
const { Users } = require('../../Entities/Users');
const { getRepository } = require('typeorm');

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return getRepository(Users).find();
    }
}


module.exports = { GET_ALL_USERS };
