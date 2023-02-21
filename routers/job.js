const JobController = require('../controllers/job')
const { authenthication } = require('../middlewares/auth')

const router = require('express').Router()

router.use(authenthication)
router.get('/', JobController.getAllJobs)
router.get('/:id', JobController.getDetailJob)

module.exports = router
