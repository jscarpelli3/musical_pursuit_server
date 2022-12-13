const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { handle: req.body.handle },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(
        user.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: user.id,
        handle: user.handle,
        current_level: user.currentl_level
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { handle, password, city, alltime_level, current_level, high_ses_score, total_score} = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      handle,
      passwordDigest,
      city,
      alltime_level, 
      current_level,
      high_ses_score, 
      total_score
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    })
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
