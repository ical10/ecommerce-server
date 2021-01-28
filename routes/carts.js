const router = require('express').Router()
const CartController = require('../controllers/cart')

router.get('/', CartController.fetchAllCarts)
router.get('/:cartId', CartController.fetchOneCart)
router.post('/', CartController.addToCart)
router.patch('/:cartId', CartController.updateCart)
router.delete('/:cartId', CartController.removeCart)
router.patch('/', CartController.checkOut)

module.exports = router
