const { User, Watchlist } = require('../models')

const getUserWithWatched = async (req, res) => {
  try {
    const data = await User.findOne({
      where: { id: req.params.id },
      include: [{ model: User, as: 'being_watched', through: [] }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

// const getAllStudentClasses = async (req, res) => {
//   try {
//     const data = await Student.findAll({
//       include: [{ model: Class, as: 'class_list', through: [] }]
//     })

//     res.send(data)
//   } catch (error) {
//     res.status(500).send({ error: error.message })
//   }
// }

module.exports = {
  getStudentClasses
  // getAllStudentClasses
}