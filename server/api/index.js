const express = require('express')
const router = express.Router()

const posts = require('./posts')

router.use(posts)

module.exports = router
