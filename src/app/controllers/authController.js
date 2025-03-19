const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registrar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body
        const usuarioExistente = await Usuario.findOne({ email })

        if (usuarioExistente) {
            return res.status(400).json({ error: "Usuário já cadastrado!" })
        }

        const novoUsuario = new Usuario({ nome, email, senha })
        await novoUsuario.save()

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" })
        console.log('Register sucess!', novoUsuario)

    } catch (error) {
        res.status(500).json({ error: "Erro ao registrar usuário!" })
    }

}

exports.logar = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ email });

        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            return res.status(401).json({ error: "Credenciais inválidas!" });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ error: "Erro interno: chave JWT não definida!" });
        }

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        console.log("✅ Login bem-sucedido! 🔓🎉", token);
        res.json({ message: "✅ Login bem-sucedido! 🔓🎉", token });

    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro ao realizar login!" });
    }
};
