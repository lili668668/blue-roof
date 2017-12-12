const mongoose = require('mongoose')
const config = require('./config.js')

const dbname = config.database.name
const host = config.database.host
const port = config.database.port
const username = config.database.username
const password = config.database.password

var usernameAndPassword = `${username}:${password}@`
if (!username || !password) {
  usernameAndPassword = ''
}

const connectString = `mongodb://${usernameAndPassword}${host}:${port}/${dbname}`

const dbConn = mongoose.connect(connectString)

module.exports = dbConn
