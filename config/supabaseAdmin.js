// config/supabaseAdmin.js
//
// Cliente do Supabase com a SERVICE_ROLE_KEY — só pode ser usado no
// backend (nunca no navegador). Antes essa lógica vivia só dentro de
// middleware/verificarAdmin.js; centralizei aqui porque agora ela também
// é usada em controllers/conta.controller.js (excluir a própria conta),
// e duplicar esse trecho em dois arquivos ia gerar duas fontes de
// verdade pra manter sincronizadas.
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

module.exports = obterClienteSupabaseAdmin;
