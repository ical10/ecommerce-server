const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.js')
const { authenticate } = require('../middlewares/auth')

const productsRouter = require('./products')
const cartsRouter = require('./carts')
const nodemailer = require('nodemailer')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/send', (req, res, next) => {
  const { email } = req.body
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e544f96b230c7c",
      pass: "3978ad96f7196c"
    }
  })

  const mailOptions = {
    from: "e544f96b230c7c",
    to: email,
    subject: `Registration confirmed! -- Welcome to Lajada`,
    text: `Thank you for registering to Lajada. We hope that you will find anything that you're searching for here. 
            Please login with the email and password that you've recently entered. See you soon!`,
    replyTo: `do-not@reply.lajada.co.id`
  }

  transport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log('error from Nodemailer transport: ', err)
    } else {
      console.log('yeay Nodemailer works: ', res)
    }
  })
})

router.use('/products', authenticate, productsRouter)
router.use('/carts', authenticate, cartsRouter)

module.exports = router

