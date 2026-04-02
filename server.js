require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Routes imports
const users = require('./routes/users')
const products = require('./routes/products')
const auth = require('./routes/auth')

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("Connection failed:", err))

// Middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date())
  next()
})

// Routes
app.use('/users', users)
app.use('/products', products)
app.use('/auth', auth) // 👈 you had 'auth' without the /

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})