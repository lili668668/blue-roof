const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

const api = require('./api')

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

app.set('port', port)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))

app.use(cors())
app.use(helmet())

app.use('/api', api)

app.listen(port, host, () => console.log('Listen on ' + host + ':' + port))
