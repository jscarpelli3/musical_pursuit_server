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


module.exports = {
  createBark,
  updateBark,
  deleteBark
}