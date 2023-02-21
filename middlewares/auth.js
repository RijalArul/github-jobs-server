const jwt = require('jsonwebtoken')
const errHandler = require('../helpers/err-handler')
const { User } = require('../models')

async function authenthication (req, res, next) {
  try {
    const accessToken = req.headers['authorization']
    const payload = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
    const userData = await User.findOne({
      where: {
        username: payload.username
      }
    })

    if (!userData) {
      throw { name: 'ForbiddenAccess' }
    } else {
      req.userData = {
        id: userData.id,
        username: userData.username
      }
      next()
    }
  } catch (err) {
    errHandler(res, err)
  }
}

module.exports = {
  authenthication
}
