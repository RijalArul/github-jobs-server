const { checkPassword } = require('../helpers/bcrypt')
const errHandler = require('../helpers/err-handler')
const { generateToken } = require('../helpers/jwt')
const responseSuccess = require('../helpers/response-success')
const { User } = require('../models')
class UserController {
  static async register (req, res) {
    const { username, password } = req.body
    try {
      const user = await User.create({
        username,
        password
      })

      responseSuccess(res, 201, user, true)
    } catch (err) {
      errHandler(res, err)
    }
  }

  static async login (req, res) {
    const { username, password } = req.body
    try {
      const user = await User.findOne({
        where: {
          username: username
        }
      })

      if (user) {
        const comparePass = checkPassword(password, user.password)

        if (comparePass) {
          const payload = {
            id: user.id,
            username: user.username
          }
          const accessToken = generateToken(payload)

          responseSuccess(res, 200, accessToken, true)
        } else {
          throw { name: 'InvalidPassword' }
        }
      } else {
        throw { name: 'InvalidUsername' }
      }
    } catch (err) {
      errHandler(res, err)
    }
  }
}

module.exports = UserController
