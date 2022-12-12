const { User, Bark, Watchlist } = require('../models')

const getUsers = async (req,res) => {
  try{
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const getUser = async (req,res) => {
  try{
    const user = await User.findOne({where: { id: req.params.userId }})
    res.send(user)
  } catch (error) {

    res.status(500).send({ error: error.message })
  }
}


const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.userId } })
    res.send({ msg: 'User Deleted', payload: req.params.userId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const updateStats = async (req,res) => {
  try {
    const updatedStats = await User.update(
      {...req.body},
      {where: {id:req.params.userId},returning:true}
    )
    res.send(updatedStats)
  } catch (error) {
    throw error
  }
}

const getUserWithWatched = async (req, res) => {
  try {
    const data = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: User, as: 'being_watched', through: Watchlist }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const addToWatchlist = async (req, res) => {
  try {
    const watch = await Watchlist.create({ ...req.body })
    res.send(watch)
  } catch (error) {
    throw error
  }
}

const deleteFromWatchlist = async (req, res) => {
  try {
    await Watchlist.destroy({ where: { being_watched: req.params.being_watchedId, watcher: req.params.watcherId}})
    res.send({ msg: 'Watch Deleted', status: 'Ok' })
  } catch (error) {
    throw error
  }
}


const getUserWithBarker = async (req, res) => {
  try {
    console.log(req.params.userId)
    const data = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: User, as: 'barker', through: Bark }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}
const getUserWithBarked = async (req, res) => {
  try {
    console.log(req.params.userId)
    const data = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: User, as: 'barked', through: Bark }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}



module.exports = {
  getUserWithWatched,
  getUsers,
  getUser,
  getUserWithBarker,
  getUserWithBarked,
  deleteUser,
  updateStats,
  addToWatchlist,
  deleteFromWatchlist
}


// const createBark = async (req, res) => {
//   try {
//     const bark = await Bark.create({ ...req.body })
//     res.send(bark)
//   } catch (error) {
//     throw error
//   }
// }

// const updateBark = async (req, res) => {
//   try {
//     const updatedBark = await Bark.update(
//       { ...req.body },
//       { where: { id: req.params.barkId }, returning: true }
//     )
//     res.send(updatedBark)
//   } catch (error) {
//     throw error
//   }
// }

// const deleteBark = async (req, res) => {
//   try {
//     await Bark.destroy({ where: { id: req.params.barkId } })
//     res.send({ msg: 'Bark Deleted', payload: req.params.barkId, status: 'Ok' })
//   } catch (error) {
//     throw error
//   }
// }