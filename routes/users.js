 const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const { getAllUsers, saveusers, updateUser, deleteUser } = require('../controllers/userController')

router.get('/', authMiddleware, getAllUsers)
router.post('/', saveusers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router