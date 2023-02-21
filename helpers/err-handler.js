function errHandler (res, err) {
  //   console.log(err.message)
  // if(err.name ===)
  const { name } = err
  switch (name !== '') {
    case name === 'SequelizeUniqueConstraintError':
      res.status(400).json({
        err: 'Username already taken',
        status: false
      })
      break
    case name === 'SequelizeValidationError':
      res.status(400).json({
        err: 'Username & Password min 6 character',
        status: false
      })
      break
    case name === 'InvalidUsername':
      res.status(404).json({
        err: 'Username not found',
        status: false
      })
      break
    case name === 'InvalidPassword':
      res.status(401).json({
        err: 'Invalid Password',
        status: false
      })
      break
    case name === 'JsonWebTokenError':
      res.status(403).json({ error: 'No Acess Token / Invalid User ' })
      break
    default:
      res.status(500).json({
        err: 'Internal Server Error',
        status: false
      })
      break
  }
}

module.exports = errHandler
