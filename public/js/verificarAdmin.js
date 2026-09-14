// middleware/verificarAdmin.js
//
// Confere se quem está fazendo a requisição é um usuário autenticado E
// marcado como admin (app_metadata.is_admin === true) no Supabase Auth.
//
// CORREÇÃO IMPORTANTE em relação à versão anterior: o cliente do Supabase
// agora é criado sob demanda (dentro da função), não no topo do arquivo.
// Antes, se SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY estivessem ausentes
// ou errados, o createClient() lançava um erro assim que o arquivo era
// importado — o que derrubava o server.js inteiro (todas as rotas do
// site, não só as de admin) já que o require acontece em cascata no
// carregamento do servidor. Agora, se faltar configuração, só a rota de
// admin responde com erro — o resto do site continua no ar normalmente.

const { createClient } = require("@supabase/supabase-js");

let supabaseAdmin = null;

function obterClienteSupabaseAdmin() {
  if (supabaseAdmin) return supabaseAdmin;

  const url = process.env.SUPABASE_URL;
  const chave = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !chave) {
    throw new Error(
      "Configuração ausente: verifique SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY nas variáveis de ambiente."
    );
  }

  supabaseAdmin = createClient(url, chave);
  return supabaseAdmin;
}

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
