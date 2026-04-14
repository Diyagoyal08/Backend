 require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')  // 👈 import at top with others
const app = express()

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error('Missing required environment variables: MONGO_URI and/or JWT_SECRET')
  process.exit(1)
}

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => {
    console.error('MongoDB connection failed:', err)
    process.exit(1)
  })

// Routes imports
const users = require('./routes/users')
const products = require('./routes/products')
const auth = require('./routes/auth')
const posts = require('./routes/posts')

// Middleware
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'
app.use(cors({ origin: allowedOrigin }))
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date())
  next()
})

// Routes
app.use('/users', users)
app.use('/products', products)
app.use('/auth', auth)
app.use('/posts', posts)

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})