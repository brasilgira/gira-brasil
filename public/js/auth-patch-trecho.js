// TRECHO PARA INTEGRAR EM js/auth.js (não é um arquivo novo)
// Some as duas partes abaixo ao arquivo existente.

// 1) Ao salvar o usuário no localStorage após login (onde hoje se grava
//    girabrasil_usuario: email, nome, id), inclua também is_admin, lido
//    do app_metadata que vem na sessão do Supabase:
//
//    const { data } = await supabaseClient.auth.getSession();
//    const usuarioSupabase = data.session.user;
//    localStorage.setItem("girabrasil_usuario", JSON.stringify({
//      id: usuarioSupabase.id,
//      email: usuarioSupabase.email,
//      nome: usuarioSupabase.user_metadata?.nome || usuarioSupabase.email,
//      is_admin: usuarioSupabase.app_metadata?.is_admin === true,
//    }));

// 2) Dentro de renderizarHeaderAuth(), depois de montar o mini-perfil,
//    mostre o link Admin condicionalmente:
function renderizarLinkAdmin(usuario) {
  const linkExistente = document.getElementById("header-link-admin");
  if (linkExistente) linkExistente.remove();

  if (!usuario || !usuario.is_admin) return;

  const link = document.createElement("a");
  link.id = "header-link-admin";
  link.href = "admin.html";
  link.textContent = "Admin";
  link.className = "header-link-admin";

  // Ajuste o seletor abaixo pro container real do header do projeto
  // (ex: onde ficam os outros links de navegação).
  const containerNav = document.querySelector(".header-nav") || document.querySelector("header nav");
  if (containerNav) containerNav.appendChild(link);
}

// Chamar renderizarLinkAdmin(usuario) dentro de renderizarHeaderAuth(),
// logo após ler o usuário do localStorage — passando o mesmo objeto
// (que agora tem is_admin).
