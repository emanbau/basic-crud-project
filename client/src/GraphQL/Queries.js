import { gql } from '@apollo/client';

export const LOAD_ALL_USERS = gql`
    query {
        getAllUsers {
            id
            name
            username
            password
        }
    }
`

export const LOAD_USER = gql`
    query getUser(
        $name: String!
        $username: String!
        $password: String!
    ) {
        getUser(
            name: $name
            username: $username
            password: $password
        ) {
            id
            name
            username
            password
        }
    }
`