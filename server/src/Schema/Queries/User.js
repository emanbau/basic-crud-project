const UserType = require('../TypeDefs/User');
const graphql = require('graphql')
const { GraphQLList, GraphQLString } = graphql;
const { Users } = require('../../Entities/Users');
const { getRepository } = require('typeorm');

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return getRepository(Users).find();
    }
}

const GET_USER = {
    type: UserType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const {username, password} = args;
        const user = await getRepository(Users).findOne({username: username, password: password})
        if (!user) {
            throw new Error("INCORRECT USERNAME OR PASSWORD")
        }
        return user;
    }
}


module.exports = { GET_ALL_USERS, GET_USER };
