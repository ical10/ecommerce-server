const { User, Product } = require('../models/')
const { verifyToken } = require('../helpers/jwt')


const authenticate = async (req, res, next) => {
  try {
    if (req.headers.access_token) {
      const decodedPayload = await verifyToken(req.headers.access_token)
      const foundUser = await User.findOne({
        where: {
          email: decodedPayload.email
        }
      })
      if (!foundUser) {
        next({ name: 'ResourceNotFound' })
      } else if (foundUser.role !== 'admin') {
        next({ name: 'NoCredentials' })
      }
      else {
        req.user = {
          id: decodedPayload.id,
          role: decodedPayload.role
        }
        next()
      }
    } else {
      next({ name: 'NoCredentials' })
    }
  }
  catch (err) {
    next(err)
  }
}

const authorize = (req, res, next) => {

  const idProduct = +req.params.id

  Product.findOne({
    where: {
      id: idProduct
    }
  })
    .then(foundProduct => {
      if (!foundProduct) {
        next({ name: "ResourceNotFound" })
      }
      else if (req.user.role !== 'admin') {
        next({ name: "NoCredentials" })
      }
      else {
        next()
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  authenticate, authorize
}

