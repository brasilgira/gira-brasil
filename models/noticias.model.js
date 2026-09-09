const pool = require('../config/db');

// Busca todas as notícias ativas, com JOIN na região e no usuário autor
async function listarTodas(regiaoId) {
  let query = `
    SELECT n.id, n.titulo, n.conteudo, n.criado_em, n.atualizado_em,
           r.id AS regiao_id, r.nome AS regiao_nome,
           u.id AS usuario_id, u.nome AS usuario_nome
    FROM noticias n
    JOIN regiao r ON r.id = n.regiao_id
    JOIN usuario u ON u.id = n.usuario_id
    WHERE n.ativo = true
  `;
  const valores = [];

  if (regiaoId) {
    valores.push(regiaoId);
    query += ` AND n.regiao_id = $${valores.length}`;
  }

  query += ' ORDER BY n.criado_em DESC';

  const resultado = await pool.query(query, valores);
  return resultado.rows;
}

// Busca uma única notícia pelo ID
async function buscarPorId(id) {
  const resultado = await pool.query(
    `SELECT n.id, n.titulo, n.conteudo, n.criado_em, n.atualizado_em,
            r.id AS regiao_id, r.nome AS regiao_nome,
            u.id AS usuario_id, u.nome AS usuario_nome
     FROM noticias n
     JOIN regiao r ON r.id = n.regiao_id
     JOIN usuario u ON u.id = n.usuario_id
     WHERE n.id = $1 AND n.ativo = true`,
    [id]
  );
  return resultado.rows[0];
}

module.exports = { listarTodas, buscarPorId };