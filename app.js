const express = require('express')
const cors = require('cors')
const router = require('./routers')

require('dotenv').config()
const app = express()
const port = process.env.PORT
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
