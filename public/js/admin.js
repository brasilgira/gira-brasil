/* ==========================================================================
   admin.js — Painel Administrativo (Gira Brasil)

   Estado atual: roda 100% com dados MOCK (marcados com "// MOCK" abaixo),
   só pra validar design/estrutura. Nada aqui ainda fala com o Supabase.

   TODO GERAL DE INTEGRAÇÃO (quando o backend do painel estiver pronto):
   1. No topo deste arquivo, pegar a sessão real:
        const { data } = await supabaseClient.auth.getSession();
        const token = data.session?.access_token;
      Se não tiver sessão ou o app_metadata.is_admin não for true,
      redirecionar pra index.html.
   2. Trocar as três funções fetchXxxMock() por fetch() de verdade pras
      rotas /api/admin/* (usando o middleware/verificarAdmin.js), mandando
      o token no header: { Authorization: `Bearer ${token}` }
   3. As ações de editar/apagar/criar já disparam os handlers certos —
      só falta trocar o "simulateRequest()" de cada uma por um fetch real
      (ver os comentários "TODO conectar" logo abaixo de cada handler).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  iniciarPainel();
});

/* ---------------------------------------------------------------------- */
/* Dados mock — trocar pelas chamadas reais de API quando o backend       */
/* do admin estiver pronto (ver TODO no topo do arquivo)                  */
/* ---------------------------------------------------------------------- */

// MOCK — trocar por GET /api/admin/metricas
const mockMetricas = {
  usuarios: { valor: 124, variacao: "+12% este mês" },
  noticias: { valor: 28, variacao: "+8% este mês" },
  comentarios: { valor: 156, variacao: "+10% este mês" },
};

// MOCK — trocar por GET /api/admin/cadastros-por-mes
const mockCadastrosPorMes = [
  { mes: "Out/24", total: 6 },
  { mes: "Nov/24", total: 9 },
  { mes: "Dez/24", total: 7 },
  { mes: "Jan/25", total: 12 },
  { mes: "Fev/25", total: 15 },
  { mes: "Mar/25", total: 14 },
  { mes: "Abr/25", total: 18 },
  { mes: "Mai/25", total: 22 },
  { mes: "Jun/25", total: 20 },
  { mes: "Jul/25", total: 27 },
  { mes: "Ago/25", total: 31 },
  { mes: "Set/25", total: 36 },
];

// MOCK — trocar por GET /api/admin/noticias
const mockNoticias = [
  { id: 1, titulo: "A importância da Amazônia para o clima global", regiao: "Amazônia", publicadaEm: "15/10/2025", ativo: true },
  { id: 2, titulo: "Pantanal: biodiversidade em recuperação", regiao: "Pantanal", publicadaEm: "12/10/2025", ativo: true },
  { id: 3, titulo: "Mata Atlântica e a recuperação de nascentes", regiao: "Mata Atlântica", publicadaEm: "08/10/2025", ativo: true },
  { id: 4, titulo: "O desafio da seca no Cerrado", regiao: "Cerrado", publicadaEm: "04/10/2025", ativo: true },
  { id: 5, titulo: "Caatinga: sistema de restauração da vegetação nativa", regiao: "Caatinga", publicadaEm: "01/10/2025", ativo: true },
];

// MOCK — trocar por GET /api/admin/comentarios
const mockComentarios = [
  { id: 42, autor: "Lucas Silva", noticia: "A importância da Amazônia...", texto: "Muito bom esse texto, aprendi bastante!", ativo: true },
  { id: 41, autor: "Ana Costa", noticia: "Pantanal: biodiversidade...", texto: "Já visitei o Pantanal, é lindo demais.", ativo: true },
  { id: 40, autor: "Rafael Souza", noticia: "Mata Atlântica e a recuper...", texto: "Precisamos falar mais sobre isso.", ativo: true },
  { id: 39, autor: "Juliana Alves", noticia: "O desafio da seca no Cerra...", texto: "Assustador ver os dados de seca crescendo.", ativo: true },
  { id: 38, autor: "Rodrigo Lima", noticia: "Caatinga: sistema de resta...", texto: "Ótima iniciativa de restauração!", ativo: true },
];

/* ---------------------------------------------------------------------- */
/* Inicialização                                                          */
/* ---------------------------------------------------------------------- */

function iniciarPainel() {
  renderizarMetricas(mockMetricas);
  renderizarGrafico(mockCadastrosPorMes);
  renderizarNoticias(mockNoticias);
  renderizarComentarios(mockComentarios);

  configurarMenuLateral();
  configurarModais();
  configurarFormularioNoticia();
  configurarFormularioComentario();
}

/* ---------------------------------------------------------------------- */
/* Métricas                                                                */
/* ---------------------------------------------------------------------- */

function renderizarMetricas(metricas) {
  Object.entries(metricas).forEach(([chave, dados]) => {
    const elValor = document.querySelector(`[data-metrica="${chave}"]`);
    const elVariacao = document.querySelector(`[data-metrica-variacao="${chave}"]`);
    if (elValor) elValor.textContent = dados.valor;
    if (elVariacao) elVariacao.textContent = dados.variacao;
  });
}

/* ---------------------------------------------------------------------- */
/* Gráfico de barras (CSS puro, sem lib)                                  */
/* ---------------------------------------------------------------------- */

function renderizarGrafico(pontos) {
  const container = document.querySelector("[data-grafico-cadastros]");
  const eixo = document.querySelector("[data-grafico-eixo]");
  if (!container) return;

  const maiorValor = Math.max(...pontos.map((p) => p.total));

  if (eixo) {
    const degraus = 4;
    const rotulos = [];
    for (let i = degraus; i >= 0; i--) {
      rotulos.push(Math.round((maiorValor / degraus) * i));
    }
    eixo.innerHTML = rotulos.map((valor) => `<span>${valor}</span>`).join("");
    eixo.style.display = "flex";
    eixo.style.flexDirection = "column";
    eixo.style.justifyContent = "space-between";
  }

  container.innerHTML = pontos
    .map((ponto) => {
      const alturaPercentual = Math.round((ponto.total / maiorValor) * 100);
      return `
        <div class="grafico-barras__coluna">
          <div class="grafico-barras__barra"
               style="height: ${alturaPercentual}%"
               title="${ponto.mes}: ${ponto.total} cadastros"></div>
          <span class="grafico-barras__rotulo">${ponto.mes}</span>
        </div>
      `;
    })
    .join("");
}

/* ---------------------------------------------------------------------- */
/* Tabela de notícias                                                      */
/* ---------------------------------------------------------------------- */

function renderizarNoticias(lista) {
  const corpo = document.querySelector('[data-tabela="noticias"]');
  if (!corpo) return;

  if (lista.length === 0) {
    corpo.innerHTML = `<tr class="estado-vazio"><td colspan="4">Nenhuma notícia cadastrada ainda.</td></tr>`;
    return;
  }

  corpo.innerHTML = lista
    .map(
      (noticia) => `
      <tr data-linha-noticia="${noticia.id}" class="${noticia.ativo ? "" : "esta-desativado"}">
        <td class="celula-truncada" title="${noticia.titulo}">${noticia.titulo}</td>
        <td><span class="tag-regiao">${noticia.regiao}</span></td>
        <td>${noticia.publicadaEm}</td>
        <td>
          <div class="acoes-linha">
            <button class="botao-acao" type="button" data-editar-noticia="${noticia.id}">Editar</button>
            <button class="botao-acao botao-acao--perigo" type="button"
                    data-apagar="noticia" data-apagar-id="${noticia.id}"
                    data-apagar-descricao="a notícia “${noticia.titulo}”">
              Apagar
            </button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");

  // TODO conectar: "Editar" hoje não abre formulário de edição de notícia
  // (só o de criação existe por enquanto). Quando conectar no banco,
  // decidir se reaproveita o modal "nova-noticia" pré-preenchido ou se
  // cria um modal próprio de edição.
  corpo.querySelectorAll("[data-editar-noticia]").forEach((botao) => {
    botao.addEventListener("click", () => {
      mostrarToast("Edição de notícia ainda não conectada ao banco.");
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Tabela de comentários                                                   */
/* ---------------------------------------------------------------------- */

function renderizarComentarios(lista) {
  const corpo = document.querySelector('[data-tabela="comentarios"]');
  if (!corpo) return;

  if (lista.length === 0) {
    corpo.innerHTML = `<tr class="estado-vazio"><td colspan="4">Nenhum comentário por enquanto.</td></tr>`;
    return;
  }

  corpo.innerHTML = lista
    .map(
      (comentario) => `
      <tr data-linha-comentario="${comentario.id}" class="${comentario.ativo ? "" : "esta-desativado"}">
        <td>${comentario.autor}</td>
        <td class="celula-truncada" title="${comentario.noticia}">${comentario.noticia}</td>
        <td class="celula-truncada" title="${comentario.texto}">${comentario.texto}</td>
        <td>
          <div class="acoes-linha">
            <button class="botao-acao" type="button"
                    data-editar-comentario="${comentario.id}" data-texto-atual="${comentario.texto}">
              Editar
            </button>
            <button class="botao-acao botao-acao--perigo" type="button"
                    data-apagar="comentario" data-apagar-id="${comentario.id}"
                    data-apagar-descricao="o comentário de ${comentario.autor}">
              Apagar
            </button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");

  corpo.querySelectorAll("[data-editar-comentario]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const id = botao.getAttribute("data-editar-comentario");
      const textoAtual = botao.getAttribute("data-texto-atual");
      abrirModalEdicaoComentario(id, textoAtual);
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Menu lateral (troca de seção)                                          */
/* ---------------------------------------------------------------------- */

function configurarMenuLateral() {
  const itens = document.querySelectorAll(".admin-menu__item");
  const secoes = {
    "visao-geral": [".admin-metricas", ".admin-grafico", ".admin-duas-colunas"],
    noticias: [".admin-duas-colunas"],
    comentarios: [".admin-duas-colunas"],
  };

  itens.forEach((item) => {
    item.addEventListener("click", () => {
      itens.forEach((i) => i.classList.remove("is-ativo"));
      item.classList.add("is-ativo");

      const secaoAlvo = item.getAttribute("data-secao");

      // Visão geral mostra tudo; as outras duas focam na tabela relevante
      // rolando a página até ela (sem esconder nada — o painel é curto
      // o suficiente pra não precisar de rotas separadas por enquanto).
      if (secaoAlvo === "visao-geral") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const tabela = document.querySelector(
        secaoAlvo === "noticias" ? '[data-tabela="noticias"]' : '[data-tabela="comentarios"]'
      );
      tabela?.closest(".admin-bloco")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Modais (abrir / fechar)                                                */
/* ---------------------------------------------------------------------- */

function configurarModais() {
  document.querySelectorAll("[data-abrir-modal]").forEach((botao) => {
    botao.addEventListener("click", () => {
      abrirModal(botao.getAttribute("data-abrir-modal"));
    });
  });

  document.querySelectorAll("[data-fechar-modal]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const modal = botao.closest(".modal-fundo");
      fecharModal(modal);
    });
  });

  // Fecha clicando fora da caixa
  document.querySelectorAll(".modal-fundo").forEach((modal) => {
    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) fecharModal(modal);
    });
  });

  // Fecha com Esc
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      document.querySelectorAll(".modal-fundo:not([hidden])").forEach(fecharModal);
    }
  });

  configurarExclusao();
}

function abrirModal(nome) {
  const modal = document.querySelector(`[data-modal="${nome}"]`);
  if (!modal) return;
  modal.hidden = false;
  modal.querySelector("input, select, textarea")?.focus();
}

function fecharModal(modal) {
  if (!modal) return;
  modal.hidden = true;
}

/* ---------------------------------------------------------------------- */
/* Formulário: nova notícia                                                */
/* ---------------------------------------------------------------------- */

function configurarFormularioNoticia() {
  const formulario = document.querySelector('[data-form="nova-noticia"]');
  if (!formulario) return;

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const dados = Object.fromEntries(new FormData(formulario).entries());

    // TODO conectar: trocar simulateRequest() pela chamada real, por ex.:
    //   await fetch("/api/admin/noticias", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    //     body: JSON.stringify(dados),
    //   });
    await simulateRequest();

    console.log("Notícia que seria enviada pro backend:", dados);
    mostrarToast("Formulário validado — ainda não conectado ao banco, então nada foi salvo de verdade.");
    formulario.reset();
    fecharModal(document.querySelector('[data-modal="nova-noticia"]'));
  });
}

/* ---------------------------------------------------------------------- */
/* Formulário: editar comentário                                           */
/* ---------------------------------------------------------------------- */

function abrirModalEdicaoComentario(id, textoAtual) {
  const modal = document.querySelector('[data-modal="editar-comentario"]');
  const formulario = modal?.querySelector('[data-form="editar-comentario"]');
  if (!modal || !formulario) return;

  formulario.dataset.comentarioId = id;
  formulario.querySelector('textarea[name="comentario"]').value = textoAtual;

  abrirModal("editar-comentario");
}

function configurarFormularioComentario() {
  const formulario = document.querySelector('[data-form="editar-comentario"]');
  if (!formulario) return;

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const id = formulario.dataset.comentarioId;
    const novoTexto = formulario.querySelector('textarea[name="comentario"]').value;

    // TODO conectar: trocar simulateRequest() pela chamada real, por ex.:
    //   await fetch(`/api/admin/comentarios/${id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    //     body: JSON.stringify({ texto: novoTexto }),
    //   });
    await simulateRequest();

    console.log(`Comentário ${id} que seria atualizado pro backend:`, novoTexto);
    mostrarToast("Formulário validado — ainda não conectado ao banco, então nada foi salvo de verdade.");
    fecharModal(document.querySelector('[data-modal="editar-comentario"]'));
  });
}

/* ---------------------------------------------------------------------- */
/* Exclusão (notícia ou comentário) — fluxo de confirmação reaproveitado  */
/* ---------------------------------------------------------------------- */

function configurarExclusao() {
  let pendente = null; // { tipo: "noticia" | "comentario", id }

  document.querySelectorAll("[data-apagar]").forEach((botao) => {
    botao.addEventListener("click", () => {
      pendente = {
        tipo: botao.getAttribute("data-apagar"),
        id: botao.getAttribute("data-apagar-id"),
      };

      const descricao = botao.getAttribute("data-apagar-descricao") || "este item";
      const modal = document.querySelector('[data-modal="confirmar-exclusao"]');
      modal.querySelector("[data-texto-exclusao]").textContent =
        `Tem certeza que quer apagar ${descricao}? Essa ação usa soft delete — o item some da listagem, mas continua no banco.`;

      abrirModal("confirmar-exclusao");
    });
  });

  document.querySelector("[data-confirmar-exclusao]")?.addEventListener("click", async () => {
    if (!pendente) return;

    // TODO conectar: trocar simulateRequest() pela chamada real, por ex.:
    //   await fetch(`/api/admin/${pendente.tipo === "noticia" ? "noticias" : "comentarios"}/${pendente.id}`, {
    //     method: "DELETE",
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    // Lembrando: no backend isso deve fazer soft delete (ativo = false),
    // nunca DELETE FROM de verdade — regra já estabelecida do projeto.
    await simulateRequest();

    const linha = document.querySelector(
      pendente.tipo === "noticia"
        ? `[data-linha-noticia="${pendente.id}"]`
        : `[data-linha-comentario="${pendente.id}"]`
    );
    linha?.classList.add("esta-desativado");

    mostrarToast("Marcado como apagado por aqui — ainda não conectado ao banco, então é só visual.");
    fecharModal(document.querySelector('[data-modal="confirmar-exclusao"]'));
    pendente = null;
  });
}

/* ---------------------------------------------------------------------- */
/* Auxiliares                                                              */
/* ---------------------------------------------------------------------- */

// Simula a latência de uma chamada de API — só pra deixar os botões com
// feedback de "carregando" coerente. Remover quando os fetches reais entrarem.
function simulateRequest() {
  return new Promise((resolve) => setTimeout(resolve, 350));
}

let toastTimeoutId = null;

function mostrarToast(mensagem) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;

  toast.textContent = mensagem;
  toast.hidden = false;

  clearTimeout(toastTimeoutId);
  toastTimeoutId = setTimeout(() => {
    toast.hidden = true;
  }, 3200);
}
