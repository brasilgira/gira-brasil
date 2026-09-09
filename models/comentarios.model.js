const pool = require('../config/db');

// Busca todos os comentários ativos de uma notícia específica
async function listarPorNoticia(noticiaId) {
  const query = `
    SELECT c.id, c.conteudo, c.criado_em, c.comentario_pai_id,
           u.id AS usuario_id, u.nome AS usuario_nome
    FROM comentario c
    JOIN usuario u ON u.id = c.usuario_id
    WHERE c.noticia_id = $1 AND c.ativo = true
    ORDER BY c.criado_em ASC
  `;
  const resultado = await pool.query(query, [noticiaId]);
  return resultado.rows;
}

// Cria um novo comentário vinculado a um usuário e uma notícia
async function criar({ conteudo, usuarioId, noticiaId, comentarioPaiId = null }) {
  const query = `
    INSERT INTO comentario (conteudo, usuario_id, noticia_id, comentario_pai_id)
    VALUES ($1, $2, $3, $4)
    RETURNING id, conteudo, criado_em, usuario_id, noticia_id, comentario_pai_id
  `;
  const valores = [conteudo, usuarioId, noticiaId, comentarioPaiId];
  const resultado = await pool.query(query, valores);
  return resultado.rows[0];
}

module.exports = { listarPorNoticia, criar };