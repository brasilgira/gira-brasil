// ============================================================================
// js/noticias-regiao.js
//
// Monta a tela de NOTÍCIAS de UMA região (public/regioes/norte.html, etc.),
// a partir de window.REGIOES (js/regioes-data.js) e window.REGIAO_NOTICIAS
// (js/regiao-noticias-data.js — as 12 notícias editáveis de cada região).
// ============================================================================

function normalizarTexto(texto) {
  return (texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

// Ícones simples em SVG (sem emoji) — usados no lugar de 🌿/📅/👁 etc.
const ICONES = {
  folha: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17 3C10 3 4 9 4 17v3h3c8 0 14-6 14-13V3h-4z"/></svg>',
  calendario: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path></svg>',
  seta: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>',
  arvore: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2 5 12h4l-5 8h16l-5-8h4L12 2z"/><rect x="11" y="20" width="2" height="2"/></svg>',
  pessoas: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"></circle><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"></path><circle cx="17" cy="9" r="2.3"></circle><path d="M16 14c2.8.3 5 2.5 5 6"></path></svg>'
};

function montarNoticiasRegiao() {
  const chave = document.body.dataset.regiao;
  const regiao = (window.REGIOES || {})[chave];
  const raiz = document.getElementById('noticias-regiao-root');
  if (!raiz) return;

  if (!regiao) {
    raiz.innerHTML = '<p class="regiao-erro">Região não encontrada.</p>';
    return;
  }

  document.title = `Região ${regiao.nome} — Gira-Brasil`;

  let temaAtivo = 'Todas';

  const placeholders = (window.REGIAO_NOTICIAS || {})[chave] || [];

  function cardHtml(n) {
  // Caminhos locais (ex: 'assets/noticias/foto.jpg') são relativos a
  // public/, mas esta página vive em public/regioes/, uma pasta abaixo —
  // por isso precisa do '../' na frente. URLs completas (http://...)
  // não devem levar esse prefixo.
  const caminhoImagem = n.imagem && /^https?:\/\//i.test(n.imagem)
    ? n.imagem
    : (n.imagem ? `../${n.imagem}` : '');

  const imagemHtml = caminhoImagem
    ? `<img class="card-noticia-imagem" src="${caminhoImagem}" alt="${n.titulo}">`
    : `<div class="card-noticia-imagem"></div>`;

    const conteudoHtml = `
        ${imagemHtml}
        <div class="card-noticia-tags">
          <span class="tag tag-regiao-cor">${n.categoria}</span>
        </div>
        <h3>${n.titulo}</h3>
        <p>${n.resumo}</p>
        <div class="card-noticia-meta">${n.data || 'Em breve'}</div>
    `;

    return n.link
      ? `<a class="card-noticia card-noticia-placeholder" href="${n.link}" target="_blank" rel="noopener">${conteudoHtml}</a>`
      : `<div class="card-noticia card-noticia-placeholder">${conteudoHtml}</div>`;
  }

  function renderizarGrid() {
    const lista = temaAtivo === 'Todas'
      ? placeholders
      : placeholders.filter((n) => n.categoria === temaAtivo);

    const grid = raiz.querySelector('#regiao-noticias-grid');
    const contador = raiz.querySelector('#regiao-noticias-contador');
    contador.textContent = `${lista.length} notícia${lista.length === 1 ? '' : 's'} (exemplo)`;

    if (lista.length === 0) {
      grid.innerHTML = `<div class="sem-resultados"><p>Nenhuma notícia de exemplo com esse filtro.</p></div>`;
      return;
    }
    grid.innerHTML = `<div class="grid-noticias">${lista.map(cardHtml).join('')}</div>`;
  }

  // Filtros gerados a partir das categorias REAIS presentes nas notícias
  // cadastradas desta região (window.REGIAO_NOTICIAS), em vez da lista
  // fixa de temas antiga — assim, se as categorias das notícias mudarem,
  // os filtros acompanham automaticamente, sem precisar mexer no código.
  const categoriasDisponiveis = [...new Set(placeholders.map((n) => n.categoria))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));

  const pillsHtml = ['Todas', ...categoriasDisponiveis]
    .map((tema) => `<button class="pill-tema-regiao ${tema === 'Todas' ? 'ativo' : ''}" data-tema="${tema}">${tema}</button>`)
    .join('');

  const destaquesHtml = regiao.destaques
    .map((texto) => `
      <a href="../noticias.html" class="destaque-regiao-item">
        <span class="destaque-regiao-icone">${ICONES.folha}</span>
        <span>${texto}</span>
        <span class="destaque-regiao-seta">${ICONES.seta}</span>
      </a>
    `)
    .join('');

  raiz.innerHTML = `
    <section class="regiao-hero" style="background-image: linear-gradient(100deg, rgba(10,18,13,0.94) 0%, rgba(10,18,13,0.6) 45%, rgba(10,18,13,0.15) 100%), linear-gradient(0deg, rgba(10,18,13,0.35) 0%, rgba(10,18,13,0) 55%), url('../${regiao.imagem}');">
      <div class="regiao-hero-conteudo">
        <div class="regiao-hero-tag">${ICONES.folha} REGIÃO ${regiao.nome.toUpperCase()}</div>
        <h1 class="regiao-hero-titulo">
          ${regiao.heroLinha1}<br>
          <span class="regiao-hero-destaque">${regiao.heroLinha2}</span>
        </h1>
        <p class="regiao-hero-texto">${regiao.descricao}</p>
      </div>

      <div class="destaques-regiao-card">
        <h4>${ICONES.folha} Destaques da região</h4>
        ${destaquesHtml}
      </div>
    </section>

    <div class="regiao-layout">
      <main class="regiao-noticias-centro">
        <div class="regiao-noticias-cabecalho-lista">
          <h2>Notícias da Região ${regiao.nome}</h2>
        </div>

        <div class="pills-tema-regiao" id="regiao-pills">${pillsHtml}</div>

        <p class="contador-resultados" id="regiao-noticias-contador"></p>
        <div id="regiao-noticias-grid"></div>
      </main>

      <aside class="regiao-lateral">
        <div class="regiao-mini-mapa-card">
          <h4>${ICONES.folha} Região ${regiao.nome}</h4>
          <div class="regiao-mini-mapa" id="regiao-mini-mapa"></div>
          <ul class="regiao-stats">
            <li>${ICONES.arvore} <div><strong>${regiao.area}</strong><span>Área aproximada</span></div></li>
            <li>${ICONES.pessoas} <div><strong>${regiao.populacao}</strong><span>População</span></div></li>
          </ul>
          <blockquote class="regiao-frase">“${regiao.frase}”</blockquote>
        </div>

        <div class="sobre-regiao-card">
          <h4>${ICONES.folha} Sobre a Região ${regiao.nome}</h4>
          <p id="sobre-regiao-texto">${regiao.estados}. ${regiao.descricao}</p>
        </div>
      </aside>
    </div>
  `;

  // Mini-mapa: reaproveita o mesmo SVG do Brasil usado em regioes.html,
  // só que pequeno e com apenas a região atual destacada.
  const miniMapaEl = raiz.querySelector('#regiao-mini-mapa');
  if (miniMapaEl && window.MAPA_BRASIL_SVG) {
    miniMapaEl.innerHTML = window.MAPA_BRASIL_SVG;
    miniMapaEl.querySelectorAll('.regiao-mapa').forEach((g) => {
      g.classList.toggle('ativo', g.dataset.regiao === chave);
    });
  }

  raiz.querySelectorAll('#regiao-pills .pill-tema-regiao').forEach((botao) => {
    botao.addEventListener('click', () => {
      temaAtivo = botao.dataset.tema;
      raiz.querySelectorAll('#regiao-pills .pill-tema-regiao').forEach((b) => b.classList.remove('ativo'));
      botao.classList.add('ativo');
      renderizarGrid();
    });
  });

  renderizarGrid();
}

montarNoticiasRegiao();
