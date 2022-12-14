const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

//Get User With their list of people they watch(i.e their competiton)
router.get(
  '/userprof/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserWithWatched
)

//Get All Users
router.get('/users',
  controller.getUsers
)

//Get a single user 
router.get('/:userId',
middleware.stripToken,
middleware.verifyToken,
controller.getUser
)

//Delete a single user 
router.delete('/:userId',
middleware.stripToken,
middleware.verifyToken,
controller.deleteUser
)

//Delete a a watchlist record
router.delete('/:being_watchedId/:watcherId',
middleware.stripToken,
middleware.verifyToken,
controller.deleteFromWatchlist
)

router.post(
  '/watch',
  middleware.stripToken,
  middleware.verifyToken,
  controller.addToWatchlist
)

//Update a users stats 
router.put('/:userId',
middleware.stripToken,
middleware.verifyToken,
controller.updateStats
)

//Get the User With Their Barks Made upon THEM
router.get(
  '/userbarked/:userId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUserWithBarked
  )
  //Get the User With Their Barks Made upon others
  router.get(
    '/userbarker/:userId',
    // middleware.stripToken,
    // middleware.verifyToken,
    controller.getUserWithBarker
    )
    


module.exports = router
