// middleware/verificarUsuario.js
//
// Parecido com verificarAdmin.js, mas sem a checagem de is_admin — só
// confere se existe um usuário autenticado de verdade por trás do token.
// Usado em rotas que qualquer usuário logado pode acessar sobre a própria
// conta (hoje: excluir a própria conta).
const obterClienteSupabaseAdmin = require("../config/supabaseAdmin");

async function verificarUsuario(req, res, next) {
  try {
    const cliente = obterClienteSupabaseAdmin();

    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length)
      : null;

    if (!token) {
      return res.status(401).json({ erro: "Token de acesso não fornecido." });
    }

    const { data, error } = await cliente.auth.getUser(token);

    if (error || !data || !data.user) {
      return res.status(401).json({ erro: "Token inválido ou expirado." });
    }

    req.usuarioLogado = data.user;
    next();
  } catch (erroInesperado) {
    console.error("Erro no middleware verificarUsuario:", erroInesperado.message);
    return res.status(500).json({ erro: "Erro ao verificar usuário." });
  }
}

module.exports = verificarUsuario;
