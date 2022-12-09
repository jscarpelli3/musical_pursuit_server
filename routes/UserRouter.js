const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

//Get User With their list of people they watch(i.e their competiton)
router.get(
  '/userprof/:userId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUserWithWatched
)

//Get All Users
router.get('/',
// middleware.stripToken,
  // middleware.verifyToken,
  controller.getUsers
)

//Get a single user 
router.get('/user/:userId',
// middleware.stripToken,
// middleware.verifyToken,
controller.getUser
)

//Get the User With Their Barks Made upon others
router.get(
  '/userbarker/:userId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUserWithBarker
  )
  

//Get the User With Their Barks Made upon THEM
router.get(
  '/userbarked/:userId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUserWithBarked
)

module.exports = router
