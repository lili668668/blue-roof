import express from 'express'
import bodyparser from 'body-parser'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))

app.use('/api', api)

app.listen(port, host)
