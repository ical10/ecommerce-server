const { Product } = require('../models/')

class ProductController {
  static create (req, res, next) {
    const { name, image_url, price, stock, category } = req.body
    Product.create({
      name,
      image_url,
      price,
      stock,
      category
    })
      .then((product) => {
        res.status(201).json(product)
      })
      .catch(next)
  }

  static update (req, res, next) {
    const { stock, price, name, imageUrl } = req.body
    const id = +req.params.id

    Product.findByPk(id)
      .then(product => {
        return product.update({
          stock,
          price,
          name,
          image_url: imageUrl
        })
      })
      .then(updatedProduct => {
        console.log(">>>>", updatedProduct)
        res.status(200).json(updatedProduct)
      })
      .catch(next)
  }

  static delete (req, res, next) {
    const id = +req.params.id

    Product.destroy({
      where: {
        id
      }
    })
      .then(result => {
        if (result === 1) {
          const confirmDelete = [
            'Product deleted'
          ]

          res.status(200).json({ confirmDelete })
        } else {
          next({ name: 'ResourceNotFound' })
        }
      })
      .catch(next)
  }

  static fetchAll (req, res, next) {
    Product.findAll()
      .then(products => {
        res.status(200).json(products)
      })
      .catch(next)
  }

  static fetchById (req, res, next) {
    const id = +req.params.id
    Product.findByPk(id)
      .then(product => {
        if (product) {
          res.status(200).json(product)
        } else {
          next({ name: 'ResourceNotFound' })
        }
      })
      .catch(next)
  }
}

module.exports = ProductController
