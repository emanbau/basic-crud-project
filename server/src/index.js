const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { createConnection } = require('typeorm');
const schema = require('./Schema');
const { Users } = require('./Entities/Users');
const PORT = 3001

const main = async function() {

    await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        database: "GraphQLCRUD",
        username: "root",
        password: "born1968",
        logging: true,
        synchronize: false,
        entities: [Users],
    })

    const app = express();
    app.use(cors());

    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(PORT, () => console.log("Server is running!"))
    
}

main().catch((err) => console.log(err));