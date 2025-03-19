// Usuario.js
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
})

// Hash
UsuarioSchema.pre('save', async function (next) {
    if (!this.isModified('senha')) return next()
    this.senha = await bcrypt.hash(this.senha, 10)
    next()
})

const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario