 
const User = require('../models/User.js')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}


 const saveusers = async (req, res) => { // save user
  try {
    const existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered.' })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })

    await user.save()
    res.status(201).json({ message: 'User saved!', user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const deleteUser = async (req, res) => { // delete user
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ error: 'Unauthorized to delete this account.' })
    }

    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    console.log('deleted', user)
    res.json({ message: 'User deleted!', user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const updateUser = async (req, res) => { // update user
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ error: 'Unauthorized to update this account.' })
    }

    const updates = { ...req.body }
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10)
    }

    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true })
    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    console.log('Updated', user)
    res.json({ message: 'User updated!', user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { getAllUsers  , updateUser , deleteUser , saveusers}