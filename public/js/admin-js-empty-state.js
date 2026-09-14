// AJUSTE EM js/admin.js — substitua as duas funções abaixo pelas versões
// atuais (só adicionei a checagem de lista vazia no início de cada uma).

function renderizarNoticias(noticias) {
  tabelaNoticiasCorpo.innerHTML = "";

  if (!noticias || noticias.length === 0) {
    tabelaNoticiasCorpo.innerHTML = `
      <tr>
        <td colspan="4" class="admin-vazio">Nenhuma notícia cadastrada ainda.</td>
      </tr>
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
        <button class="admin-botao-apagar" data-id="${noticia.id}" type="button">Apagar</button>
      </td>
    `;
    tabelaNoticiasCorpo.appendChild(linha);
  });

  tabelaNoticiasCorpo.querySelectorAll(".admin-botao-apagar").forEach((botao) => {
    botao.addEventListener("click", () => apagarNoticia(botao.dataset.id));
  });
}

function renderizarComentarios(comentarios) {
  tabelaComentariosCorpo.innerHTML = "";

  if (!comentarios || comentarios.length === 0) {
    tabelaComentariosCorpo.innerHTML = `
      <tr>
        <td colspan="4" class="admin-vazio">Nenhum comentário cadastrado ainda.</td>
      </tr>
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

// E no css/admin.css, adicione:
//
// .admin-vazio {
//   text-align: center;
//   color: #7A7563;
//   font-style: italic;
//   padding: 24px 16px !important;
// }
