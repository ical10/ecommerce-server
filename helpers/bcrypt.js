const bcrypt = require('bcryptjs')

const hashPassword = (userPwd) => {
    return hashedPwd = bcrypt.hashSync(userPwd, 10)
}

const comparePassword = (userPwd, dbPwd) => {
    return match = bcrypt.compareSync(userPwd, dbPwd)
}

module.exports = {
    hashPassword,
    comparePassword
}
