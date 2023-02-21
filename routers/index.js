const router = require('express').Router()
const userRouter = require('./user')
const jobRouter = require('./job')
router.use('/users', userRouter)
router.use('/jobs', jobRouter)
module.exports = router
