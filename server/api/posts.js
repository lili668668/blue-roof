import { Router } from 'express'

const router = Router()

const PostModel = require('../../models/post.js')

const mockPosts = [
  {
    title: 'OwO',
    author: 'ballfish',
    content: 'Deadline~ Deadline~ Coming Soon~ How I escape the Dealine~',
    created: Date.now()
  },
  {
    title: 'OAO',
    author: 'fishball',
    content: 'Deadline~ Deadline~ Coming Soon~ How the work do you do~',
    created: Date.now()
  }
]

router.get('/mock_posts', (req, res, next) => {
  res.json(mockPosts)
})

router.get('/posts', (req, res, next) => {
  PostModel.find({}, (err, posts) => {
    if (err) {
      res.json({error: err.name}, 500)
    }
    res.json({posts: posts})
  })
})

router.get('/post/:id', (req, res, next) => {
  var id = req.params.id
  PostModel.findById(id, (err, post) => {
    if (err) {
      res.json({error: err.name}, 500)
    }
    res.json({post: post})
  })
})

router.post('/post', (req, res, next) => {
  var data = req.body
  var post = new PostModel(data)
  post.save((err, result) => {
    if (err) {
      res.json({error: err.name}, 500)
    }
    res.json({post: result})
  })
})

router.put('/post/:id', (req, res, next) => {
  var id = req.params.id
  var data = req.body
  PostModel.findById(id, (err, post) => {
    if (err) {
      res.json({error: err.name}, 500)
    }
    post.title = data.title
    post.author = data.author
    post.content = data.content
    post.created = data.created
    post.updated = Date.now()

    post.save((err, result) => {
      if (err) {
        res.json({error: err.name}, 500)
      }
      res.json({post: result})
    })
  })
})

router.delete('/post/:id', (req, res, next) => {
  var id = req.params.id
  PostModel.findById(id, (err, post) => {
    if (err) {
      res.json({error: err.name}, 500)
    }

    post.remove((err, result) => {
      if (err) {
        res.json({error: err.name}, 500)
      }
      res.json(result)
    })
  })
})

export default router
