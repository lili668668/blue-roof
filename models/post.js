const mongoose = require('mongoose')
const dbConn = require('../util/db.js')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  content: { type: String, require: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date }
})

const postModel = dbConn.model('Post', postSchema)

module.exports = postModel
