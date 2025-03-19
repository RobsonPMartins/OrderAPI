// index.js | Todas as rotas
const express = require('express')
const router = express.Router()
// rota pedidos
const pedidoRoutes = require('./pedidoRoutes')
// rota auth
const authRoutes = require('./authRoutes')

// ###########
router.use('/pedidos', pedidoRoutes)
// ###########
router.use('/auth', authRoutes)

module.exports = router