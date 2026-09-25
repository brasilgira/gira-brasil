const perfilModel = require('../models/perfil.model');

// GET /api/perfil/:id — perfil público de qualquer usuário (é isso que
// abre quando alguém clica no nome de quem comentou)
async function buscarPerfil(req, res) {
  try {
    const { id } = req.params;

    const perfil = await perfilModel.buscarPorId(id);
    if (!perfil) {
      return res.status(404).json({ erro: 'Perfil não encontrado.' });
    }

    const [comentarios, salvas, curtidas] = await Promise.all([
      perfilModel.listarComentariosDoUsuario(id),
      perfilModel.listarNoticiasSalvasDoUsuario(id),
      perfilModel.listarNoticiasCurtidasDoUsuario(id),
    ]);

    return res.json({ ...perfil, comentarios, noticiasSalvas: salvas, noticiasCurtidas: curtidas });
  } catch (erro) {
    console.error('Erro ao buscar perfil:', erro);
    return res.status(500).json({ erro: 'Erro ao buscar perfil.' });
  }
}

// PUT /api/perfil/:id — edição do próprio perfil (nome/avatar/bio).
// OBS: não tem verificação de "é você mesmo?" ainda — dá pra reforçar
// isso depois exigindo o token do Supabase, igual o verificarAdmin faz.
async function atualizarPerfil(req, res) {
  try {
    const { id } = req.params;
    const { nome, avatarUrl, bio } = req.body;

    const perfilAtualizado = await perfilModel.atualizar(id, { nome, avatarUrl, bio });
    if (!perfilAtualizado) {
      return res.status(404).json({ erro: 'Perfil não encontrado.' });
    }

    return res.json(perfilAtualizado);
  } catch (erro) {
    console.error('Erro ao atualizar perfil:', erro);
    return res.status(500).json({ erro: 'Erro ao atualizar perfil.' });
  }
}

module.exports = { buscarPerfil, atualizarPerfil };
