// controllers/conta.controller.js
//
// Ações que o próprio usuário logado pode fazer sobre a própria conta.
// Por enquanto só excluir. Usa a SERVICE_ROLE_KEY (via
// obterClienteSupabaseAdmin) porque apagar um usuário do Supabase Auth
// não é possível com a chave pública usada no navegador — por isso essa
// ação precisa passar pelo backend.
//
// ⚠️ Isto apaga o usuário do Supabase Auth de verdade (auth.admin.deleteUser
// não segue a regra de soft delete do resto do projeto, porque essa regra
// é sobre as TABELAS do banco — noticias/comentario — e não sobre contas
// de autenticação, que o próprio Supabase gerencia à parte). As notícias e
// comentários que essa pessoa já publicou continuam no banco como estão;
// se quiser que sejam apagados/anonimizados junto, isso é uma decisão à
// parte pra tomarmos depois.
const obterClienteSupabaseAdmin = require("../config/supabaseAdmin");

async function excluirConta(req, res) {
  try {
    const cliente = obterClienteSupabaseAdmin();
    const { error } = await cliente.auth.admin.deleteUser(req.usuarioLogado.id);

    if (error) {
      console.error("Erro ao excluir conta no Supabase:", error.message);
      return res.status(500).json({ erro: "Erro ao excluir conta." });
    }

    res.status(200).json({ mensagem: "Conta excluída com sucesso." });
  } catch (erro) {
    console.error("Erro ao excluir conta:", erro.message);
    res.status(500).json({ erro: "Erro ao excluir conta." });
  }
}

module.exports = { excluirConta };
