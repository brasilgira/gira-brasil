// middleware/verificarAdmin.js
//
// Confere se quem está fazendo a requisição é um usuário autenticado E
// marcado como admin (app_metadata.is_admin === true) no Supabase Auth.
//
// A verificação usa a SERVICE_ROLE_KEY, que só existe no backend (.env /
// painel da Vercel) — nunca no front-end. É essa chave que permite ao
// backend consultar o usuário dono de um token com privilégio total,
// inclusive lendo app_metadata (que o próprio usuário/navegador não
// consegue alterar).
//
// Uso: aplicar como middleware nas rotas de admin.
//   router.delete("/noticias/:id", verificarAdmin, adminController.apagarNoticia);

const { createClient } = require("@supabase/supabase-js");

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function verificarAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length)
      : null;

    if (!token) {
      return res.status(401).json({ erro: "Token de acesso não fornecido." });
    }

    // Pede pro Supabase validar o token e devolver o usuário dono dele.
    const { data, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !data || !data.user) {
      return res.status(401).json({ erro: "Token inválido ou expirado." });
    }

    const usuario = data.user;
    const ehAdmin = usuario.app_metadata && usuario.app_metadata.is_admin === true;

    if (!ehAdmin) {
      return res.status(403).json({ erro: "Acesso restrito a administradores." });
    }

    // Deixa o usuário autenticado disponível pros controllers, se precisar
    // (ex: registrar quem fez a ação num log).
    req.usuarioAdmin = usuario;

    next();
  } catch (erroInesperado) {
    console.error("Erro no middleware verificarAdmin:", erroInesperado);
    return res.status(500).json({ erro: "Erro ao verificar permissão de administrador." });
  }
}

module.exports = verificarAdmin;
