// ============================================================================
// js/noticias-regiao.js
//
// Monta a tela de NOTÍCIAS de UMA região (public/regioes/norte.html,
// nordeste.html, etc.) — diferente da noticias.html geral, aqui já vem
// pré-filtrado pelo bioma da região, com visual temático próprio (cores
// que mudam por região via CSS, com base no data-regiao do <body>).
//
// Fontes de dados:
//   window.REGIOES  (js/regioes-data.js)  -> nome, apelido, imagem, bioma
//   window.NOTICIAS (js/noticias-data.js) -> as notícias de verdade
//
// Regra de filtro: mostra as notícias do bioma da região + as notícias
// "Nacionais" (que não são de um bioma específico, mas afetam o país
// todo) — assim nenhuma região fica com a tela vazia enquanto não
// tivermos as 12 notícias reais de cada uma.
// ============================================================================

function normalizarTexto(texto) {
  return (texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function montarNoticiasRegiao() {
  const chave = document.body.dataset.regiao;
  const regiao = (window.REGIOES || {})[chave];
  const todasNoticias = window.NOTICIAS || [];
  const raiz = document.getElementById('noticias-regiao-root');
  if (!raiz) return;

  if (!regiao) {
    raiz.innerHTML = '<p class="regiao-erro">Região não encontrada.</p>';
    return;
  }

  document.title = `Notícias — ${regiao.nome} — Gira-Brasil`;

  // Notícias específicas dessa região primeiro, depois as nacionais
  const noticiasDaRegiao = todasNoticias.filter((n) => n.bioma === regiao.bioma);
  const noticiasNacionais = todasNoticias.filter((n) => n.bioma === 'Nacional');
  const noticiasBase = [...noticiasDaRegiao, ...noticiasNacionais];

  // Temas disponíveis SÓ dentro desse conjunto (não os 12 temas gerais)
  const temasDisponiveis = [...new Set(noticiasBase.map((n) => n.categoria))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));

  let temaAtivo = 'Todos';
  let busca = '';

  function noticiasFiltradas() {
    const buscaNormalizada = normalizarTexto(busca.trim());
    return noticiasBase.filter((n) => {
      if (temaAtivo !== 'Todos' && n.categoria !== temaAtivo) return false;
      if (buscaNormalizada) {
        const alvo = normalizarTexto(`${n.titulo} ${n.resumo} ${n.categoria}`);
        if (!alvo.includes(buscaNormalizada)) return false;
      }
      return true;
    });
  }

  function cardHtml(n) {
    const ehDaRegiao = n.bioma === regiao.bioma;
    return `
      <a href="../noticia.html?id=${n.id}" class="card-noticia">
        <img class="card-noticia-imagem" src="${n.imagem}" alt="${n.titulo}">
        <div class="card-noticia-corpo">
          <div class="card-noticia-tags">
            <span class="tag tag-regiao-cor">${n.categoria}</span>
            ${!ehDaRegiao ? '<span class="tag tag-nacional">Nacional</span>' : ''}
          </div>
          <h3>${n.titulo}</h3>
          <p>${n.resumo}</p>
          <div class="card-noticia-meta">${n.meta}</div>
        </div>
      </a>
    `;
  }

  function renderizarGrid() {
    const lista = noticiasFiltradas();
    const grid = raiz.querySelector('#regiao-noticias-grid');
    const contador = raiz.querySelector('#regiao-noticias-contador');

    contador.textContent = `${lista.length} notícia${lista.length === 1 ? '' : 's'}`;

    if (lista.length === 0) {
      grid.innerHTML = `
        <div class="sem-resultados">
          <p>Nenhuma notícia encontrada com esse filtro.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = `<div class="grid-noticias">${lista.map(cardHtml).join('')}</div>`;
  }

  const chipsHtml = temasDisponiveis
    .map((tema) => `<button class="chip-tema" data-tema="${tema}">${tema}</button>`)
    .join('');

  raiz.innerHTML = `
    <div class="regiao-noticias-hero">
      <img src="../${regiao.imagem}" alt="Paisagem característica da região ${regiao.nome}" class="regiao-hero-imagem">
      <div class="regiao-hero-texto">
        <div class="tag tag-regiao-cor">NOTÍCIAS DA REGIÃO</div>
        <div class="regiao-apelido">${regiao.apelido}</div>
        <h1>${regiao.nome}</h1>
        <p class="regiao-estados">${regiao.descricao}</p>
      </div>
    </div>

    <section class="secao-noticias-grid regiao-noticias-corpo">
      <div class="filtros-noticias">
        <div class="filtros-linha-topo">
          <div class="campo-busca">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="regiao-noticias-busca" placeholder="Buscar nas notícias desta região..." aria-label="Buscar notícias desta região">
          </div>
          <a href="../noticias.html" class="botao botao-secundario">Ver todas as notícias →</a>
        </div>
        <div class="chips-temas" id="regiao-noticias-chips">
          <button class="chip-tema ativo" data-tema="Todos">Todos os temas</button>
          ${chipsHtml}
        </div>
      </div>

      <p class="contador-resultados" id="regiao-noticias-contador"></p>
      <div id="regiao-noticias-grid"></div>
    </section>
  `;

  // Liga os eventos depois de desenhar o HTML (busca + chips de tema)
  raiz.querySelector('#regiao-noticias-busca').addEventListener('input', (e) => {
    busca = e.target.value;
    renderizarGrid();
  });

  raiz.querySelectorAll('#regiao-noticias-chips .chip-tema').forEach((botao) => {
    botao.addEventListener('click', () => {
      temaAtivo = botao.dataset.tema;
      raiz.querySelectorAll('#regiao-noticias-chips .chip-tema').forEach((b) => b.classList.remove('ativo'));
      botao.classList.add('ativo');
      renderizarGrid();
    });
  });

  renderizarGrid();
}

montarNoticiasRegiao();
