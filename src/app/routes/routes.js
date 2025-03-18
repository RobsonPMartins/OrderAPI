// index.js | Todas as rotas
const express = require('express')
const router = express.Router()
// rota pedidos
const pedidoRoutes = require('./pedidoRoutes')

router.use('/pedidos', pedidoRoutes)

module.exports = router