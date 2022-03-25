import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.get('/',  checkAuth, postsCtrl.index)
router.post('/',  checkAuth, postsCtrl.create)
router.put('/:id', checkAuth, postCtrl.update)
router.delete('/:id', checkAuth, postCtrl.delete)
router.get('/:id', checkAuth, postCtrl.show)

export {
  router
}