// js/admin.js
//
// Assume que js/auth.js já rodou antes e deixou disponível a instância
// global `supabaseClient`. Aqui só usamos ela pra pegar o token da sessão
// atual e mandar nas requisições — quem decide se o usuário É admin de
// verdade é sempre o middleware verificarAdmin no backend, nunca este
// arquivo.

const avisoEl = document.getElementById("admin-aviso");
const tabelaNoticiasCorpo = document.getElementById("tabela-noticias-corpo");
const tabelaComentariosCorpo = document.getElementById("tabela-comentarios-corpo");

async function pegarTokenSessao() {
  const { data } = await supabaseClient.auth.getSession();
  return data && data.session ? data.session.access_token : null;
}

function mostrarAviso(mensagem) {
  avisoEl.textContent = mensagem;
  avisoEl.hidden = false;
}

async function chamarApiAdmin(caminho, opcoes = {}) {
  const token = await pegarTokenSessao();

  if (!token) {
    mostrarAviso("Você precisa estar logado para acessar o painel administrativo.");
    throw new Error("Sem sessão ativa.");
  }

  const resposta = await fetch(`/api/admin${caminho}`, {
    ...opcoes,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(opcoes.headers || {}),
    },
  });

  if (resposta.status === 401 || resposta.status === 403) {
    mostrarAviso("Você não tem permissão de administrador para acessar esta área.");
    throw new Error("Acesso negado.");
  }

  if (!resposta.ok) {
    const corpo = await resposta.json().catch(() => ({}));
    throw new Error(corpo.erro || "Erro na requisição ao painel administrativo.");
  }

  return resposta.json();
}

// ---------- Notícias ----------

async function carregarNoticias() {
  try {
    const noticias = await chamarApiAdmin("/noticias");
    renderizarNoticias(noticias);
  } catch (erro) {
    console.error(erro);
    tabelaNoticiasCorpo.innerHTML = `
      <tr><td colspan="4" class="admin-vazio">Não foi possível carregar as notícias.</td></tr>
    `;
  }
}

function renderizarNoticias(noticias) {
  tabelaNoticiasCorpo.innerHTML = "";

  if (!noticias || noticias.length === 0) {
    tabelaNoticiasCorpo.innerHTML = `
      <tr><td colspan="4" class="admin-vazio">Nenhuma notícia cadastrada ainda.</td></tr>
    `;
    return;
  }

  noticias.forEach((noticia) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td class="admin-celula-texto">${escaparHtml(noticia.titulo)}</td>
      <td>${escaparHtml(noticia.autor_nome || "—")}</td>
      <td>${escaparHtml(noticia.regiao_nome || "—")}</td>
      <td>
        <button class="admin-botao-editar" data-id="${noticia.id}" type="button">Editar</button>
        <button class="admin-botao-apagar" data-id="${noticia.id}" type="button">Apagar</button>
      </td>
    `;
    tabelaNoticiasCorpo.appendChild(linha);

    linha.querySelector(".admin-botao-editar").addEventListener("click", () => {
      abrirModalEdicaoNoticia(noticia.id, noticia.titulo, noticia.conteudo || "");
    });
    linha.querySelector(".admin-botao-apagar").addEventListener("click", () => {
      apagarNoticia(noticia.id);
    });
  });
}

async function apagarNoticia(id) {
  const confirmar = confirm("Apagar esta notícia? Ela deixará de aparecer no site.");
  if (!confirmar) return;

  try {
    await chamarApiAdmin(`/noticias/${id}`, { method: "DELETE" });
    carregarNoticias();
  } catch (erro) {
    console.error(erro);
    alert("Não foi possível apagar a notícia.");
  }
}

// ---------- Modal de edição de notícia ----------

let idNoticiaEmEdicao = null;

const modalNoticia = document.getElementById("modal-editar-noticia");
const modalNoticiaTitulo = document.getElementById("modal-noticia-titulo");
const modalNoticiaConteudo = document.getElementById("modal-noticia-conteudo");

function abrirModalEdicaoNoticia(id, tituloAtual, conteudoAtual) {
  idNoticiaEmEdicao = id;
  modalNoticiaTitulo.value = tituloAtual;
  modalNoticiaConteudo.value = conteudoAtual;
  modalNoticia.hidden = false;
}

function fecharModalEdicaoNoticia() {
  idNoticiaEmEdicao = null;
  modalNoticia.hidden = true;
}

document.getElementById("modal-noticia-cancelar").addEventListener("click", fecharModalEdicaoNoticia);

document.getElementById("modal-noticia-salvar").addEventListener("click", async () => {
  if (!idNoticiaEmEdicao) return;

  try {
    await chamarApiAdmin(`/noticias/${idNoticiaEmEdicao}`, {
      method: "PUT",
      body: JSON.stringify({
        titulo: modalNoticiaTitulo.value,
        conteudo: modalNoticiaConteudo.value,
      }),
    });
    fecharModalEdicaoNoticia();
    carregarNoticias();
  } catch (erro) {
    console.error(erro);
    alert("Não foi possível salvar a notícia.");
  }
});

// ---------- Comentários ----------

let idComentarioEmEdicao = null;

async function carregarComentarios() {
  try {
    const comentarios = await chamarApiAdmin("/comentarios");
    renderizarComentarios(comentarios);
  } catch (erro) {
    console.error(erro);
    tabelaComentariosCorpo.innerHTML = `
      <tr><td colspan="4" class="admin-vazio">Não foi possível carregar os comentários.</td></tr>
    `;
  }
}

function renderizarComentarios(comentarios) {
  tabelaComentariosCorpo.innerHTML = "";

  if (!comentarios || comentarios.length === 0) {
    tabelaComentariosCorpo.innerHTML = `
      <tr><td colspan="4" class="admin-vazio">Nenhum comentário cadastrado ainda.</td></tr>
    `;
    return;
  }

  comentarios.forEach((comentario) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td class="admin-celula-texto">${escaparHtml(comentario.texto)}</td>
      <td>${escaparHtml(comentario.autor_nome || "—")}</td>
      <td>${escaparHtml(comentario.noticia_titulo || "—")}</td>
      <td>
        <button class="admin-botao-editar" data-id="${comentario.id}" type="button">Editar</button>
        <button class="admin-botao-apagar" data-id="${comentario.id}" type="button">Apagar</button>
      </td>
    `;
    tabelaComentariosCorpo.appendChild(linha);

    linha.querySelector(".admin-botao-editar").addEventListener("click", () => {
      abrirModalEdicao(comentario.id, comentario.texto);
    });
    linha.querySelector(".admin-botao-apagar").addEventListener("click", () => {
      apagarComentario(comentario.id);
    });
  });
}

async function apagarComentario(id) {
  const confirmar = confirm("Apagar este comentário?");
  if (!confirmar) return;

  try {
    await chamarApiAdmin(`/comentarios/${id}`, { method: "DELETE" });
    carregarComentarios();
  } catch (erro) {
    console.error(erro);
    alert("Não foi possível apagar o comentário.");
  }
}

const modal = document.getElementById("modal-editar-comentario");
const modalTexto = document.getElementById("modal-editar-texto");

function abrirModalEdicao(id, textoAtual) {
  idComentarioEmEdicao = id;
  modalTexto.value = textoAtual;
  modal.hidden = false;
}

function fecharModalEdicao() {
  idComentarioEmEdicao = null;
  modal.hidden = true;
}

document.getElementById("modal-editar-cancelar").addEventListener("click", fecharModalEdicao);

document.getElementById("modal-editar-salvar").addEventListener("click", async () => {
  if (!idComentarioEmEdicao) return;

  try {
    await chamarApiAdmin(`/comentarios/${idComentarioEmEdicao}`, {
      method: "PUT",
      body: JSON.stringify({ texto: modalTexto.value }),
    });
    fecharModalEdicao();
    carregarComentarios();
  } catch (erro) {
    console.error(erro);
    alert("Não foi possível salvar o comentário.");
  }
});

// ---------- Abas ----------

document.querySelectorAll(".admin-aba").forEach((aba) => {
  aba.addEventListener("click", () => {
    document.querySelectorAll(".admin-aba").forEach((a) => a.classList.remove("admin-aba--ativa"));
    aba.classList.add("admin-aba--ativa");

    const destino = aba.dataset.aba;
    document.getElementById("painel-noticias").hidden = destino !== "noticias";
    document.getElementById("painel-comentarios").hidden = destino !== "comentarios";
  });
});

// ---------- Utilitário ----------

function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}

// ---------- Inicialização ----------

carregarNoticias();
carregarComentarios();
