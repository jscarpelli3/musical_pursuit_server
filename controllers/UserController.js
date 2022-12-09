const { User, Bark } = require('../models')

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

const getUserWithWatched = async (req, res) => {
  try {
    console.log(req.params.userId)
    const data = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: User, as: 'competition', through: Watchlist }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
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
  getUserWithBarked
}