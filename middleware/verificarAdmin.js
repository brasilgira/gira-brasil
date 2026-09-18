// middleware/verificarAdmin.js
//
// Confere se quem está fazendo a requisição é um usuário autenticado E
// marcado como admin (app_metadata.is_admin === true) no Supabase Auth.
//
// O cliente do Supabase agora vem de config/supabaseAdmin.js (compartilhado
// com controllers/conta.controller.js), em vez de ser criado aqui dentro —
// mesma ideia de antes (criado sob demanda, não no topo do arquivo, pra um
// erro de configuração não derrubar o server.js inteiro), só que numa
// fonte única.
const obterClienteSupabaseAdmin = require("../config/supabaseAdmin");

async function verificarAdmin(req, res, next) {
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

    const usuario = data.user;
    const ehAdmin = usuario.app_metadata && usuario.app_metadata.is_admin === true;

    if (!ehAdmin) {
      return res.status(403).json({ erro: "Acesso restrito a administradores." });
    }

    req.usuarioAdmin = usuario;
    next();
  } catch (erroInesperado) {
    console.error("Erro no middleware verificarAdmin:", erroInesperado.message);
    return res.status(500).json({ erro: "Erro ao verificar permissão de administrador." });
  }
}

module.exports = verificarAdmin;
