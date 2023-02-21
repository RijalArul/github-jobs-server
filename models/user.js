'use strict'
const { Model } = require('sequelize')
const { generatePassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Username Is Required'
          },
          max: {
            args: [6],
            msg: 'Username must be 6 Character'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Password Is Required'
          },
          len: {
            args: [6],
            msg: 'Password must be 6 Character'
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate (instance, attributes) {
          instance.password = generatePassword(instance.password)
        }
      }
    }
  )
  return User
}
