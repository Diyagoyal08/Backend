 
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
  const hashedPassword = await bcrypt.hash(req.body.password, 10)

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword 
    })
    
    await user.save()
    res.status(201).json({ message: "User saved!", user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

 
 

const deleteUser =  async (req, res) => { // delete user
  try{
    const user =  await User.findByIdAndDelete(req.params.id)
    console.log("deleted" , user)
    res.json({ message: "User deleted!", user })
  }catch (err) {
    res.status(400).json({error: err.message})
  }
}


 const updateUser =  async (req, res) => { // update user
  try{
    const user =  await User.findByIdAndUpdate(req.params.id , req.body  , { new: true })
    
    console.log("Updated" , user)
    res.json({ message: "User updated!", user })
  }catch (err) {
    res.status(400).json({error: err.message})
  }
}

module.exports = { getAllUsers  , updateUser , deleteUser , saveusers}