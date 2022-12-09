const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get(
  '/users/:userId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUserWithWatched
)

router.get('/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUsers
)

router.get('/user/:userId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUser
)

module.exports = router
