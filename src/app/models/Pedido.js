// Schema p/ mongodb
const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    pagamento: {
        tipo: {
            type: String,
            enum: ['pix', 'cartão de crédito', 'boleto'],
            required: true,
        },
        status: {
            type: String,
            enum: ['pendente', 'pago', 'falhou'],
            default: 'pendente',
        },
        detalhes: {
            type: String,
            required: true,
        },
    },
    status: {
        type: String,
        enum: ['pendente', 'em preparação', 'enviado', 'entregue'],
        default: 'pendente',
    },
    itens: [
        {
            nomeProduto: {
                type: String,
                required: true,
            },
            quantidade: {
                type: Number,
                required: true,
            },
            preco: {
                type: Number,
                required: true,
            }
        }
    ],

}, {
    timestamps: true
})

module.exports = mongoose.model('Pedido', PedidoSchema)