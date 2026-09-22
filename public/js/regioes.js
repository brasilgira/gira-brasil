// Os dados de cada região agora vêm de js/regioes-data.js (window.REGIOES),
// carregado antes deste arquivo — fonte única, reaproveitada também pelas
// páginas dedicadas em public/regioes/*.html.
const dadosRegioes = window.REGIOES || {};

// Pinta o conteúdo do painel da direita com os dados da região recebida
function renderizarRegiao(chave) {
  const regiao = dadosRegioes[chave];
  if (!regiao) return;

  const painel = document.querySelector('.painel-regiao');

  const temasHtml = regiao.temas
    .map(tema => `<span class="tag">${tema}</span>`)
    .join('');

  const noticiasHtml = regiao.noticias
    .map(n => `
      <a href="#" class="item-noticia-regiao">
        <h4>${n.titulo}</h4>
        <div class="meta">${n.tag} · ${n.data}</div>
      </a>
    `)
    .join('');

  painel.innerHTML = `
    <img src="${regiao.imagem}" alt="Paisagem característica da região ${regiao.nome}">
    <div class="tag">REGIÃO</div>
    <h2>${regiao.nome}</h2>
    <p class="painel-estados">${regiao.estados}</p>
    <p class="painel-descricao">${regiao.descricao}</p>

    <h3 class="painel-subtitulo">Temas ambientais</h3>
    <div class="lista-temas">${temasHtml}</div>

    <h3 class="painel-subtitulo">Notícias da região</h3>
    <div class="lista-noticias-regiao">${noticiasHtml}</div>

    <div class="painel-botoes">
      <a href="regioes/${chave}.html" class="botao botao-primario">Ver notícias da região →</a>
      <a href="girabot.html" class="botao botao-secundario">Perguntar ao Gira-Bot →</a>
    </div>
  `;
}

// Marca visualmente qual botão de região está ativo
function marcarBotaoAtivo(chave) {
  document.querySelectorAll('.pill-regiao').forEach(botao => {
    botao.classList.toggle('ativo', botao.dataset.regiao === chave);
  });
}

// Marca visualmente qual região do mapa está ativa
function marcarRegiaoMapaAtiva(chave) {
  const wrap = document.getElementById('mapa-regioes-wrap');
  if (!wrap) return;
  wrap.querySelectorAll('.regiao-mapa').forEach(g => {
    g.classList.toggle('ativo', g.getAttribute('data-regiao') === chave);
  });
}

// Ponto único de seleção de região: atualiza painel, botão e mapa juntos
function selecionarRegiao(chave) {
  renderizarRegiao(chave);
  marcarBotaoAtivo(chave);
  marcarRegiaoMapaAtiva(chave);
}

// Desenha o mapa do Brasil (SVG embutido em js/mapa-brasil-svg.js) e liga o
// clique em cada região à mesma seleção usada pelos botões de pílula.
function inicializarMapaRegioes() {
  const wrap = document.getElementById('mapa-regioes-wrap');
  if (!wrap) return;
  if (!window.MAPA_BRASIL_SVG) {
    wrap.innerHTML = '<div class="mapa-indisponivel">Mapa indisponível no momento</div>';
    return;
  }
  wrap.innerHTML = window.MAPA_BRASIL_SVG;
  wrap.querySelectorAll('.regiao-mapa').forEach(g => {
    g.addEventListener('click', () => selecionarRegiao(g.getAttribute('data-regiao')));
  });
  marcarRegiaoMapaAtiva('norte');
}

// Liga o clique de cada botão de região à troca do painel
document.querySelectorAll('.pill-regiao').forEach(botao => {
  botao.addEventListener('click', () => selecionarRegiao(botao.dataset.regiao));
});

inicializarMapaRegioes();

// Região exibida por padrão ao carregar a página
renderizarRegiao('norte');
