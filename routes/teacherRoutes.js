const express = require('express')
const { authenticateToken } = require('../middlewares/authMiddleware')
const { getAllTeachers } = require('../controllers/teacherController')

const router = express.Router()

router.get('/teachers', authenticateToken, getAllTeachers)

module.exports = router