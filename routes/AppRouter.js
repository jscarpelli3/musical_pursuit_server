const router = require('express').Router()
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')
const BarkRouter = require('./BarkRouter.js')
router.use('/user', UserRouter)
router.use('/auth', AuthRouter)
router.use('/bark', BarkRouter)

module.exports = router