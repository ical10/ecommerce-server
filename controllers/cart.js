const { Cart, Product, User } = require('../models/')


class CartController {
  // for history
  static fetchAllCarts (req, res, next) {
    const UserId = +req.user.id

    Cart.findAll({
      where: {
        UserId,
        status: false
      },
      include: [{
        model: Product, attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }, {
        model: User, attributes: {
          exclude: ['createdAt', 'updatedAt', 'password', 'role']
        }
      }
      ]
    })
      .then(carts => {
        if (!carts) {
          throw { name: 'ResourceNotFound' }
        } else {
          res.status(200).json(carts)
        }
      })
      .catch(next)
  }

  // for carts page
  static fetchOneCart (req, res, next) {
    const cartId = +req.params.cartId

    Cart.findByPk(cartId, {
      include: [{
        model: Product, attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }, {
        model: User, attributes: {
          exclude: ['createdAt', 'updatedAt', 'password', 'role']
        }
      }
      ]
    })
      .then((foundCart) => {
        if (!foundCart) {
          throw { name: 'ResourceNotFound' }
        } else {
          res.status(200).json(foundCart)
        }
      })
      .catch(next)
  }

  // for when we click on a button Add to cart
  static async addToCart (req, res, next) {
    try {
      const UserId = req.user.id
      const quantity = +req.body.quantity
      const ProductId = +req.body.ProductId

      let currentCart
      let productStock = 0

      const product = await Product.findOne({
        where: {
          id: ProductId
        }
      })

      if (product.stock >= quantity) {
        productStock = product.stock
        currentCart = await Cart.findOne({
          where: {
            ProductId,
            UserId
          }
        })
      } else {
        throw { name: 'StockExceeded' }
      }
      if (!currentCart) {
        let newCart = await Cart.create({
          UserId,
          ProductId,
          quantity: +quantity
        })
        const message = ['Product added']
        res.status(201).json({ messages })
      } else {
        const newQuantity = Number(currentCart.quantity) + Number(quantity)
        if (newQuantity <= productStock) {
          let updatedCart = await currentCart.update({
            quantity: newQuantity
          })
          const messages = ['Product added']
          res.status(200).json({ messages })
        } else {
          throw { name: 'StockExceeded' }
        }
      }

    } catch (err) {
      next(err)
    }
  }

  // update a cart
  static async updateCart (req, res, next) {
    try {
      const cartId = +req.params.cartId
      const quantity = +req.body.quantity
      const ProductId = +req.body.ProductId

      let currentCart
      let productStock = 0

      const product = await Product.findOne({
        where: {
          id: ProductId
        }
      })

      if (product.stock >= quantity) {
        productStock = product.stock
        currentCart = await Cart.findByPk(cartId)
      } else {
        throw { name: 'StockExceeded' }
      }

      if (!currentCart) {
        throw { name: 'ResourceNotFound' }
      } else {
        const newQuantity = quantity
        if (newQuantity <= productStock) {
          let updatedCart = await currentCart.update({
            quantity: newQuantity
          })
          const messages = ['Cart updated']
          res.status(200).json({ messages })
        } else {
          throw { name: 'StockExceeded' }
        }
      }
    } catch (err) {
      next(err)
    }
  }

  // for when we want to cancel a cart
  static removeCart (req, res, next) {
    const cartId = +req.params.cartId

    Cart.destroy({
      where: {
        id: cartId
      }
    })
      .then(result => {
        if (result === 1) {
          const messages = ['Product removed from cart']

          res.status(200).json({ messages })
        } else {
          throw { name: 'ResourceNotFound' }
        }
      })
      .catch(next)
  }

  static checkOut (req, res, next) {
    const UserId = +req.user.id

    Cart.findAll({
      where: {
        UserId,
        status: false
      }
    })
      .then((foundCarts) => {
        return foundCarts.update({
          status: true
        })
      })
      .then((checkedOutCarts) => {
        const messages = ["Checkout successful"]
        res.status(200).json({ messages })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = CartController
