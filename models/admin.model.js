// models/admin.model.js
//
// SQL das ações administrativas. Segue o schema real (usuario, regiao,
// noticias, comentario — sem tabela administrador separada) e a regra de
// sempre usar soft delete (ativo = false), nunca DELETE FROM de verdade.
const pool = require("../config/db");

// ---------- Notícias ----------

async function listarNoticias() {
  const resultado = await pool.query(
    `SELECT n.*, p.nome AS autor_nome, r.nome AS regiao_nome
     FROM noticias n
     LEFT JOIN perfil p ON p.id = n.usuario_id
     LEFT JOIN regiao r ON r.id = n.regiao_id
     ORDER BY n.criado_em DESC`
  );
  return resultado.rows;
}

async function criarNoticia({ titulo, resumo, conteudo, imagemUrl, categoria, linkFonte, regiaoId, usuarioId }) {
  const resultado = await pool.query(
    `INSERT INTO noticias (titulo, resumo, conteudo, imagem_url, categoria, link_fonte, regiao_id, usuario_id)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [titulo, resumo, conteudo, imagemUrl, categoria, linkFonte, regiaoId || null, usuarioId || null]
  );
  return resultado.rows[0];
}

async function editarNoticia(id, { titulo, resumo, conteudo, imagemUrl, categoria, linkFonte, regiaoId }) {
  const resultado = await pool.query(
    `UPDATE noticias SET
       titulo = $1,
       resumo = COALESCE($2, resumo),
       conteudo = $3,
       imagem_url = COALESCE($4, imagem_url),
       categoria = COALESCE($5, categoria),
       link_fonte = COALESCE($6, link_fonte),
       regiao_id = COALESCE($7, regiao_id),
       atualizado_em = now()
     WHERE id = $8
     RETURNING *`,
    [titulo, resumo, conteudo, imagemUrl, categoria, linkFonte, regiaoId, id]
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
  // OBS: o autor do comentário agora vem direto de c.usuario_nome (o login
  // é feito via Supabase Auth, então não dá mais pra confiar num JOIN com
  // a tabela `usuario` local — nem todo usuário logado existe lá).
  const resultado = await pool.query(
    `SELECT c.*, c.usuario_nome AS autor_nome, n.titulo AS noticia_titulo
     FROM comentario c
     JOIN noticias n ON n.id = c.noticia_id
     ORDER BY c.criado_em DESC`
  );
  return resultado.rows;
}

async function editarComentario(id, texto) {
  // OBS: a coluna real na tabela é `conteudo` (não `texto` — esse era um
  // bug antigo aqui que fazia essa query falhar).
  const resultado = await pool.query(
    `UPDATE comentario SET conteudo = $1 WHERE id = $2 RETURNING *`,
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
  criarNoticia,
  editarNoticia,
  apagarNoticia,
  listarComentarios,
  editarComentario,
  apagarComentario,
};
