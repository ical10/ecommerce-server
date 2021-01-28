const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product')
const { authorize } = require('../middlewares/auth')

// Available for users and admin
router.get('/', ProductController.fetchAll)
router.get('/:id', ProductController.fetchById)

// only accessible for admin
router.post('/', authorize, ProductController.create)
router.put('/:id', authorize, ProductController.update)
router.delete('/:id', authorize, ProductController.delete)

module.exports = router

