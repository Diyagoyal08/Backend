const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "ab" , price :10000000 },
    { id: 2, name: "cd" , price : 20000000},
    { id: 3, name: "dd" , price : 40000000}
  ])
})

module.exports = router