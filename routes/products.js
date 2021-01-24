const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product')
const { authorize } = require('../middlewares/auth')

router.get('/', ProductController.fetchAll)
router.get('/:id', ProductController.fetchById)
router.post('/', ProductController.create)
router.put('/:id', authorize, ProductController.update)
router.delete('/:id', authorize, ProductController.delete)

module.exports = router

