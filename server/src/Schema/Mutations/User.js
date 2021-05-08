const UserType = require('../TypeDefs/User');
const graphql = require('graphql')
const { GraphQLString, GraphQLID } = graphql;
const { Users } = require('../../Entities/Users');
const { getRepository } = require('typeorm');

const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parent, args) {
        const {name, username, password} = args;
        getRepository(Users).insert({ name, username, password });
        return args;
    }
}

const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent, args) {
        const { id } = args;
        await getRepository(Users).delete(id);
        return args;
    }
}

const UPDATE_PASSWORD = {
    type: UserType,
    args: {
        username: { type: GraphQLString }, 
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const { username, oldPassword, newPassword } = args;
        const user = await getRepository(Users).findOne({username: username})
        const userPassword = user?.password;
        if (oldPassword === userPassword) {
            return await getRepository(Users).update({ username: username }, { password: newPassword });
        } else {
            throw new Error("PASSWORDS DO NOT MATCH!");
        }
    }
}


module.exports = { CREATE_USER, DELETE_USER, UPDATE_PASSWORD };