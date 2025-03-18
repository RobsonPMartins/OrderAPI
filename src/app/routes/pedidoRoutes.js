// Lidar com a rota de 
const express = require('express')
const pedidoController = require('../controllers/pedidoController')

const router = express.Router()

// get (acessar todos)
router.get('/', pedidoController.listarPedidos)
// post (criar)
router.post('/', pedidoController.criarPedido)

// get (buscar id)
router.get('/:id', pedidoController.buscarPedidoPorId)

// put (atualizar)
router.put('/:id', pedidoController.atualizarPedido)

// delete (deletar)
router.delete('/:id', pedidoController.deletarPedido)


module.exports = router