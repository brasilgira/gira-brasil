const comentariosModel = require('../models/comentarios.model');

// Lista todos os comentários de uma notícia específica
async function listarPorNoticia(req, res) {
  try {
    const { noticiaId } = req.params;
    const comentarios = await comentariosModel.listarPorNoticia(noticiaId);
    return res.json(comentarios);
  } catch (erro) {
    console.error('Erro ao buscar comentários:', erro);
    return res.status(500).json({ erro: 'Erro ao buscar comentários' });
  }
}

// Salva um novo comentário
async function criar(req, res) {
  try {
    const { conteudo, usuarioId, noticiaId, comentarioPaiId } = req.body;

    // Validação básica dos campos obrigatórios
    if (!conteudo || !usuarioId || !noticiaId) {
      return res.status(400).json({ 
        erro: 'Campos obrigatórios ausentes: conteudo, usuarioId e noticiaId' 
      });
    }

    const novoComentario = await comentariosModel.criar({
      conteudo,
      usuarioId,
      noticiaId,
      comentarioPaiId
    });

    return res.status(201).json(novoComentario);
  } catch (erro) {
    console.error('Erro ao criar comentário:', erro);
    return res.status(500).json({ erro: 'Erro ao salvar comentário' });
  }
}

module.exports = { listarPorNoticia, criar };