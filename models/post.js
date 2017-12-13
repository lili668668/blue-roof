const mongoose = require('mongoose')
const schema = mongoose.schema

const postSchema = new schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  content: { type: String, require: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date }
})

const postModel = mongoose.model('Post', postSchema)

module.exports = postModel
