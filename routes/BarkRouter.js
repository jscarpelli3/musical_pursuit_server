const router = require('express').Router()
const controller = require('../controllers/BarkController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createBark
)

router.put(
  '/:barkId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateBark
)

router.delete(
  '/:barkId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteBark
)


// //Get the User With Their Barks Made upon others
// router.get(
//   '/userbarker/:userId',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.getUserWithBarker
//   )
  

// //Get the User With Their Barks Made upon THEM
// router.get(
//   '/userbarked/:userId',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.getUserWithBarked
// )

module.exports = router