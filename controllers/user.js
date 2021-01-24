const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class UserController {
  static login (req, res, next) {
    const { email, password } = req.body

    if (!email || !password) {
      next({ name: 'BadRequest' })
    }

    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) {
          next({ name: "ResourceNotFound" })
        }
        else {
          const match = comparePassword(password, user.password)

          if (match) {
            const payload = {
              id: user.id,
              email: user.email,
              role: user.role
            }

            const access_token = createToken(payload)

            return res.status(200).json({ access_token })
          }
          else {
            next({ name: "AuthError" })
          }
        }
      })
      .catch(next)
  }
}

module.exports = UserController
