const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.js')
const { authenticate } = require('../middlewares/auth')

const productsRouter = require('./products')

router.post('/login', UserController.login)

router.use('/products', authenticate, productsRouter)

module.exports = router

