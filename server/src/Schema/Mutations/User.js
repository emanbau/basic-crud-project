const UserType = require('../TypeDefs/User');
const MessageType = require('../TypeDefs/Messages');
const graphql = require('graphql')
const { GraphQLString, GraphQLID } = graphql;
const { Users } = require('../../Entities/Users');
const { getRepository } = require('typeorm');

const CREATE_USER = {
    type: MessageType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const {name, username, password} = args;
        const userExists = await getRepository(Users).findOne({username: username});
        if (!userExists) {
            getRepository(Users).insert({ name, username, password });
            return {successful: true, message: 'CREATE SUCCESSFUL'};
        }
        throw new Error("USERNAME EXISTS ALREADY");
    }
}

const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent, args) {
        const { id } = args;
        await getRepository(Users).delete(id);
        return {successful: true, message: 'DELETE SUCCESSFUL'};
    }
}

const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString }, 
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const { username, oldPassword, newPassword } = args;
        const user = await getRepository(Users).findOne({username: username});
        if (!user) {
            throw new Error("USERNAME DOES NOT EXIST");
        }
        const userPassword = user?.password;
        if (oldPassword === userPassword) {
            await getRepository(Users).update({ username: username }, { password: newPassword });
            return {successful: true, message: 'UPDATE PASSWORD SUCCESSFUL'};
        } else {
            throw new Error("PASSWORDS DO NOT MATCH!");
        }
    }
}


module.exports = { CREATE_USER, DELETE_USER, UPDATE_PASSWORD };