const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/registrar', authController.registrar)
router.post('/login', authController.logar)

module.exports = router