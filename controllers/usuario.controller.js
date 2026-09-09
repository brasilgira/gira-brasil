const usuariosModel = require('../models/usuarios.model');

async function cadastrar(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Preencha todos os campos obrigatorios.' });
    }

    const novoUsuario = await usuariosModel.criarUsuario(nome, email, senha);
    return res.status(201).json(novoUsuario);
  } catch (erro) {
    console.error('Erro ao cadastrar usuario:', erro);
    return res.status(500).json({ erro: 'Erro ao salvar usuario no banco.' });
  }
}

module.exports = { cadastrar };