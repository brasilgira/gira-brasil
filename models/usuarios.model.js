const db = require('../config/db');

async function criarUsuario(nome, email, senhaHash) {
  const query = `
    INSERT INTO usuario (nome, email, senha_hash)
    VALUES ($1, $2, $3)
    RETURNING id, nome, email;
  `;
  const resultado = await db.query(query, [nome, email, senhaHash]);
  return resultado.rows[0];
}

module.exports = { criarUsuario };