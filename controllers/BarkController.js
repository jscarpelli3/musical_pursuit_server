const { Bark } = require('../models')

const createBark = async (req, res) => {
  try {
    const bark = await Bark.create({ ...req.body })
    res.send(bark)
  } catch (error) {
    throw error
  }
}

const updateBark = async (req, res) => {
  try {
    const updatedBark = await Bark.update(
      { ...req.body },
      { where: { id: req.params.barkId }, returning: true }
    )
    res.send(updatedBark)
  } catch (error) {
    throw error
  }
}

const deleteBark = async (req, res) => {
  try {
    await Bark.destroy({ where: { id: req.params.barkId } })
    res.send({ msg: 'Bark Deleted', payload: req.params.barkId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

// const getUserWithBarker = async (req, res) => {
//   try {
//     console.log(req.params.userId)
//     const data = await User.findOne({
//       where: { id: req.params.userId },
//       include: [{ model: User, as: 'barker', through: Barks }]
//     })

//     res.send(data)
//   } catch (error) {
//     res.status(500).send({ error: error.message })
//   }
// }
// const getUserWithBarked = async (req, res) => {
//   try {
//     console.log(req.params.userId)
//     const data = await User.findOne({
//       where: { id: req.params.userId },
//       include: [{ model: User, as: 'barked', through: Barks }]
//     })

//     res.send(data)
//   } catch (error) {
//     res.status(500).send({ error: error.message })
//   }
// }




module.exports = {
  createBark,
  updateBark,
  deleteBark
}