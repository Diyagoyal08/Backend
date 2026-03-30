const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "ab" },
    { id: 2, name: "cd" }
  ])
})


router.get('/search', (req, res) => {
  console.log(req.query)
  res.json(req.query)
}) 


module.exports = router