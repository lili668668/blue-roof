const express = require('express')
const bodyparser = require('body-parser')

const api = require('./api')

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

app.set('port', port)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.use('/api', api)

app.listen(port, host)

console.log(host + ':' + port)
