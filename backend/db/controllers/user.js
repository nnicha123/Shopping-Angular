const { User } = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUsers = async (req, res) => {
  const allUsers = await User.find()
  res.status(200).send(allUsers)
}
const registerUser = async (req, res) => {
  const { username, password, name } = req.body
  const invalidUsername = await User.findOne({ username })
  if (invalidUsername) {
    res.status(400).send({ message: 'Username already used' })
  }
  else {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    let newUser = new User({ username, password: hashedPassword, name })
    newUser.save().then((doc) => res.status(201).send(doc))
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const targetUser = await User.findOne({ username })
  if (!targetUser) {
    res.status(400).send({ message: "Username or password incorrect" })
  }
  else {
    const correctPassword = bcrypt.compareSync(password, targetUser.password)
    if (!correctPassword) {
      res.status(400).send({ message: "Username or password incorrect" })
    } else {
      const payload = {
        name: targetUser.name,
        id: targetUser._id
      }
      const token = jwt.sign(payload, "pook", { expiresIn: 3600 })
      res.status(200).send({
        message: "Successfully logged in",
        token,
        id: targetUser._id,
        name: targetUser.name
      })
    }
  }
}

module.exports = {
  getUsers, registerUser, loginUser
}
