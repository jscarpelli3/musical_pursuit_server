const { User } = require('../models')

const getUserWithWatched = async (req, res) => {
  try {
    console.log(req.params.userId)
    const data = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: User, as: 'competition', through: [] }]
    })

    res.send(data)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

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
  getUserWithWatched,
  getUsers,
  getUser
}