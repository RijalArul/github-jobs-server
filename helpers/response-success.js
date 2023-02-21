function responseSuccess (res, code, result, status) {
  return res.status(code).json({
    result: result,
    status: status
  })
}

module.exports = responseSuccess
