// models/admin.model.js
//
// SQL das ações administrativas. Segue o schema real (usuario, regiao,
// noticias, comentario — sem tabela administrador separada) e a regra de
// sempre usar soft delete (ativo = false), nunca DELETE FROM de verdade.
const pool = require("../config/db");

// ---------- Notícias ----------

async function listarNoticias() {
  const resultado = await pool.query(
    `SELECT n.*, u.nome AS autor_nome, r.nome AS regiao_nome
     FROM noticias n
     JOIN usuario u ON u.id = n.usuario_id
     JOIN regiao r ON r.id = n.regiao_id
     ORDER BY n.criado_em DESC`
  );
  return resultado.rows;
}

async function editarNoticia(id, titulo, conteudo) {
  const resultado = await pool.query(
    `UPDATE noticias SET titulo = $1, conteudo = $2 WHERE id = $3 RETURNING *`,
    [titulo, conteudo, id]
  );
  return resultado.rows[0] || null;
}

async function apagarNoticia(id) {
  const resultado = await pool.query(
    `UPDATE noticias SET ativo = false WHERE id = $1 RETURNING id, ativo`,
    [id]
  );
  return resultado.rows[0] || null;
}

// ---------- Comentários ----------

async function listarComentarios() {
  const resultado = await pool.query(
    `SELECT c.*, u.nome AS autor_nome, n.titulo AS noticia_titulo
     FROM comentario c
     JOIN usuario u ON u.id = c.usuario_id
     JOIN noticias n ON n.id = c.noticia_id
     ORDER BY c.criado_em DESC`
  );
  return resultado.rows;
}

async function editarComentario(id, texto) {
  const resultado = await pool.query(
    `UPDATE comentario SET texto = $1 WHERE id = $2 RETURNING *`,
    [texto, id]
  );
  return resultado.rows[0] || null;
}

async function apagarComentario(id) {
  const resultado = await pool.query(
    `UPDATE comentario SET ativo = false WHERE id = $1 RETURNING id, ativo`,
    [id]
  );
  return resultado.rows[0] || null;
}

module.exports = {
  listarNoticias,
  editarNoticia,
  apagarNoticia,
  listarComentarios,
  editarComentario,
  apagarComentario,
};
