const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "ab" },
    { id: 2, name: "cd" }
  ])
})

router.get('/:id', (req, res) => {
  res.json({ userId: req.params.id })
})

module.exports = router