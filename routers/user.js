const UserController = require('../controllers/user')
const errHandler = require('../helpers/err-handler')

const router = require('express').Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router
