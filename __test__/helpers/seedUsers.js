const { User } = require('../../models/')

const users = [
    {
        email: 'user@mail.com',
        password: 'thisisnotapassword',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'admin@mail.com',
        password: 'thisisnotapassword',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

const seedUsers = () => {
    return User.bulkCreate(users, { individualHooks: true })
}

module.exports = seedUsers

