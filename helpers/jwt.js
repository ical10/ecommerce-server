const jwt = require('jsonwebtoken')
const SECRET_CODE = process.env.SECRET_CODE

const createToken = (payload) => {
    return token = jwt.sign(payload, SECRET_CODE)
}

const verifyToken = async (token) => {
    try {
        return decoded = jwt.verify(token, SECRET_CODE);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createToken,
    verifyToken
}
