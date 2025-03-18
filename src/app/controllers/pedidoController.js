// controller de pedidos
const Pedido = require('../models/Pedido')

// Retornar todos os pedidos
exports.listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find()
        res.json(pedidos)
        console.log('✅ Todos pedidos:', pedidos)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos!" })
    }
}

// Criar um novo pedido
exports.criarPedido = async (req, res) => {
    try {
        const novoPedido = new Pedido(req.body)
        await novoPedido.save()

        res.status(201).json(novoPedido)
        console.log('📌 Novo Pedido!', novoPedido);

    } catch (error) {
        res.status(500).json({ error: "Erro ao criar o pedido!" })
    }
}

// Buscar pedidos pelo id
exports.buscarPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id)
        if (!pedido) {
            return res.status(404).json({ error: "Pedido não encontrado!" })
        }
        res.json(pedido)
        console.log('Achamos 🛠️!', pedido)

    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o pedido!" })
    }
}

// Atualizar
exports.atualizarPedido = async (req, res) => {
    try {
        const pedidoAtualizado = await Pedido.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Retorna atualizado o pedido
        )
        if (!pedidoAtualizado) {
            return res.status(404).json({ error: "Pedido não encontrado para atualizar!" })
        }
        res.json(pedidoAtualizado)
        console.log('✅ Pedido Atualizado! 😃', pedidoAtualizado)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar o pedido!" })
    }
}

// Deletar Pedido
exports.deletarPedido = async (req, res) => {
    try {
        const pedidoDeletado = await Pedido.findByIdAndDelete(req.params.id);
        
        if (!pedidoDeletado) {
            return res.status(404).json({ error: "Pedido não encontrado para deletar" });
        }

        res.json({ message: `Pedido ${req.params.id} deletado com sucesso!` });
        console.log('Deletado com sucesso! 🗑️ ', pedidoDeletado);

    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar o pedido!" });
    }
};

