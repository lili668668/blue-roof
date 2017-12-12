import { Router } from 'express'

const router = Router()

const mockPost = [
  { post: 'Hello World' }
]

router.get('/posts', (req, res, next) => {
  res.json(mockPost)
})

export default router
