const express = require('express')
const router = express.Router()

const PostModel = require('../../models/post.js')

router.get('/posts', (req, res, next) => {
  PostModel.find({}, (err, posts) => {
    if (err) {
      return next(err)
    }
    res.json({posts: posts})
  })
})

router.get('/post/:id', (req, res, next) => {
  var id = req.params.id
  PostModel.findById(id, (err, post) => {
    if (err) {
      return next(err)
    }
    res.json({post: post})
  })
})

router.post('/post', (req, res, next) => {
  var data = req.body
  var post = new PostModel(data)
  post.save((err, result) => {
    if (err) {
      return next(err)
    }
    res.json({post: result})
  })
})

router.put('/post/:id', (req, res, next) => {
  var id = req.params.id
  var data = req.body
  PostModel.findById(id, (err, post) => {
    if (err) {
      return next(err)
    }
    post.title = data.title
    post.author = data.author
    post.content = data.content
    post.created = data.created
    post.updated = Date.now()

    post.save((err, result) => {
      if (err) {
        return next(err)
      }
      res.json({post: result})
    })
  })
})

router.delete('/post/:id', (req, res, next) => {
  var id = req.params.id
  PostModel.findById(id, (err, post) => {
    if (err) {
        return next(err)
    }

    post.remove((err, result) => {
      if (err) {
        return next(err)
      }
      res.json(result)
    })
  })
})

module.exports = router
