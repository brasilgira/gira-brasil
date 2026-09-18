const comentariosModel = require('../models/comentarios.model');

// Lista todos os comentários de uma notícia específica
async function listarPorNoticia(req, res) {
  try {
    const { noticiaId } = req.params;
    const { usuarioId } = req.query; // quem está olhando a tela (opcional)
    const comentarios = await comentariosModel.listarPorNoticia(noticiaId, usuarioId);
    return res.json(comentarios);
  } catch (erro) {
    console.error('Erro ao buscar comentários:', erro);
    return res.status(500).json({ erro: 'Erro ao buscar comentários' });
  }
}

// Salva um novo comentário
async function criar(req, res) {
  try {
    const { conteudo, usuarioId, usuarioNome, noticiaId, comentarioPaiId } = req.body;

    // Validação básica dos campos obrigatórios
    if (!conteudo || !conteudo.trim() || !usuarioId || !noticiaId) {
      return res.status(400).json({
        erro: 'Campos obrigatórios ausentes: conteudo, usuarioId e noticiaId'
      });
    }

    const novoComentario = await comentariosModel.criar({
      conteudo: conteudo.trim(),
      usuarioId,
      usuarioNome: usuarioNome && usuarioNome.trim() ? usuarioNome.trim() : 'Usuário',
      noticiaId,
      comentarioPaiId
    });

    // Já devolve no mesmo formato da listagem (com curtidas zeradas),
    // pra dar pra jogar direto na lista no front sem precisar recarregar.
    return res.status(201).json({
      ...novoComentario,
      curtidas: 0,
      curtido_por_mim: false,
    });
  } catch (erro) {
    console.error('Erro ao criar comentário:', erro);
    return res.status(500).json({ erro: 'Erro ao salvar comentário' });
  }
}

// Curte ou descurte um comentário (toggle) em nome de um usuário
async function curtir(req, res) {
  try {
    const { id } = req.params;
    const { usuarioId } = req.body;

    if (!usuarioId) {
      return res.status(400).json({ erro: 'usuarioId é obrigatório' });
    }

    const resultado = await comentariosModel.alternarCurtida(id, usuarioId);
    return res.json(resultado);
  } catch (erro) {
    console.error('Erro ao curtir comentário:', erro);
    return res.status(500).json({ erro: 'Erro ao curtir comentário' });
  }
}

module.exports = { listarPorNoticia, criar, curtir };
