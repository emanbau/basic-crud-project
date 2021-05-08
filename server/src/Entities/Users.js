const { EntitySchema } = require('typeorm')

const Users = new EntitySchema({
    name: "Users",
    tableName: "Users",
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'text',
        },
        username: {
            type: 'text',
        },
        password: {
            type: 'text',
        }
    }
})

module.exports = { Users };