const router = require('express').Router()
const UserRouter = require('./UserRouter')
// const WatchlistRouter = require('./WatchlistRouter')
const AuthRouter = require('./AuthRouter')
// const MusicianRouter = require('./MusicianRouter')
router.use('/user', UserRouter)
// router.use('/watchlist', WatchlistRouter)
router.use('/auth', AuthRouter)
// router.use('/musician', MusicianRouter)

module.exports = router