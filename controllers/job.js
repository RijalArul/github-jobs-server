const { default: axios } = require('axios')
const errHandler = require('../helpers/err-handler')
const responseSuccess = require('../helpers/response-success')

class JobController {
  static async getAllJobs (req, res) {
    const { description, location, page, type } = req.query
    try {
      const resp = await axios({
        method: 'GET',
        url: `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page}&description=${description}&location=${location}&type=${type}`
      })
      responseSuccess(res, 200, resp.data, true)
    } catch (err) {
      errHandler(res, err)
    }
  }

  static async getDetailJob (req, res) {
    const { id } = req.params
    try {
      const resp = await axios({
        method: 'GET',
        url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
      })

      responseSuccess(res, 200, resp.data, true)
    } catch (err) {
      errHandler(res, err)
    }
  }
}

module.exports = JobController
