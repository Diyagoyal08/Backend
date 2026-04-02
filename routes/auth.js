const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
 router.post('/login', async (req, res) => {
  try {
    // Step 1 - find user by email
    const user = await User.findOne({ email: req.body.email })

    // Step 2 - if user doesn't exist
    if (!user) {
      return res.status(400).json({ error: "User not found!" })
    }

    // Step 3 - compare passwords
    const isMatch = await bcrypt.compare(req.body.password, user.password)

    // Step 4 - if password wrong
    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password!" })
    }

    // Step 5 - create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.json({ message: "Login successful!", token })

  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})



module.exports = router