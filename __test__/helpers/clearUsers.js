const { User } = require('../../models/')

const clearUsers = () => {
    if (process.env.NODE_ENV === 'test') {
        return User.destroy({
            where: {}
        })
    }
}

module.exports = clearUsers
