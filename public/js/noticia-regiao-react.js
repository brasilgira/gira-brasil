// ============================================================================
// js/noticia-regiao-react.js
//
// Monta a tela de LEITURA de uma notícia de região, a partir do que vem na
// URL: noticia-regiao.html?regiao=norte&id=3. Busca a notícia certa dentro
// de window.REGIAO_NOTICIAS (js/regiao-noticias-data.js) e desenha o
// `corpo` dela — mesmo esquema de blocos usado em js/noticias-data.js
// (paragrafo, titulo, subtitulo, lista, estatisticas, citacao, regiao).
// ============================================================================

const { useEffect } = React;

function obterParametrosDaUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    regiao: params.get('regiao'),
    id: parseInt(params.get('id'), 10),
  };
}

const { regiao: regiaoChaveUrl, id: idUrl } = obterParametrosDaUrl();
const listaDaRegiao = (window.REGIAO_NOTICIAS || {})[regiaoChaveUrl] || [];
const artigo = listaDaRegiao.find((n) => n.id === idUrl) || listaDaRegiao[0];
const regiaoInfo = (window.REGIOES || {})[regiaoChaveUrl];

const sumario = (artigo?.corpo || [])
  .filter((b) => b.tipo === 'titulo' || b.tipo === 'subtitulo')
  .map((b) => ({ id: b.id, titulo: b.texto }));

// Outras notícias da mesma região, pra seção "Continue lendo".
const outrasDaRegiao = listaDaRegiao.filter((n) => n.id !== artigo?.id).slice(0, 3);

function renderBloco(bloco, i) {
  switch (bloco.tipo) {
    case 'paragrafo':
      return <p key={i}>{bloco.texto}</p>;
    case 'titulo':
      return <h2 key={i} id={bloco.id}>{bloco.texto}</h2>;
    case 'subtitulo':
      return <h3 key={i} id={bloco.id}>{bloco.texto}</h3>;
    case 'lista':
      return <ul key={i}>{bloco.itens.map((item, j) => <li key={j}>{item}</li>)}</ul>;
    case 'estatisticas':
      return (
        <div className="stat-strip" key={i}>
          {bloco.itens.map((s, j) => (
            <div className="stat-cell" key={j}>
              <span className="stat-num">{s.numero}</span>
              <span className="stat-label">{s.legenda}</span>
            </div>
          ))}
        </div>
      );
    case 'citacao':
      return (
        <div className="quote-block" key={i}>
          <blockquote>{bloco.texto}</blockquote>
          <cite>— {bloco.autor}</cite>
        </div>
      );
    case 'regiao':
      return (
        <div className="region-card" key={i}>
          <span className="region-eyebrow">Esta notícia está relacionada</span>
          <h3 className="region-name">{bloco.nome}</h3>
          <p className="region-desc">{bloco.descricao}</p>
          <a className="region-btn" href={bloco.link}>Explorar região →</a>
        </div>
      );
    default:
      return null;
  }
}

function caminhoImagemDe(imagem) {
  if (!imagem) return '';
  return /^https?:\/\//i.test(imagem) ? imagem : `../${imagem}`;
}

function App() {
  useEffect(() => {
    if (artigo) document.title = `${artigo.titulo} — Gira-Brasil`;
  }, []);

  if (!artigo || !regiaoInfo) {
    return (
      <div className="breadcrumb" style={{ padding: '60px 32px' }}>
        Notícia não encontrada. <a href="../regioes.html">Voltar para regiões</a>
      </div>
    );
  }

  return (
    <React.Fragment>

      <div className="breadcrumb">
        <a href="../index.html">Início</a><span className="sep">/</span>
        <a href={`${regiaoChaveUrl}.html`}>Região {regiaoInfo.nome}</a><span className="sep">/</span>
        <span className="current">{artigo.categoria}</span>
      </div>

      <header className="article-header">
        <span className="category-badge">{artigo.categoria}</span>
        <h1 className="headline">{artigo.titulo}</h1>
        <p className="deck">{artigo.resumo}</p>
        <div className="meta-row">
          <span className="author">Por {artigo.autor}</span>
          <span className="meta-dot"></span>
          <span>{artigo.dataPublicacao}</span>
          <span className="meta-dot"></span>
          <span>{artigo.tempoLeitura}</span>
        </div>
      </header>

      {caminhoImagemDe(artigo.imagem) && (
        <React.Fragment>
          <div className="hero">
            <div className="hero-frame">
              <img src={caminhoImagemDe(artigo.imagem)} alt={artigo.titulo} />
            </div>
          </div>
          <p className="hero-caption">{artigo.legendaHero}</p>
        </React.Fragment>
      )}

      <div className="layout">

        <article className="article-body">
          {artigo.corpo.map((bloco, i) => renderBloco(bloco, i))}

          {artigo.linkFonte && (
            <p style={{ fontSize: '0.85rem', marginTop: '24px' }}>
              Fonte original: <a href={artigo.linkFonte} target="_blank" rel="noopener noreferrer">{artigo.linkFonte}</a>
            </p>
          )}
        </article>

        <aside className="sidebar">
          <div className="side-block">
            <div className="side-title">Neste artigo</div>
            <ul className="toc-list">
              {sumario.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.titulo}</a></li>
              ))}
            </ul>
          </div>
        </aside>

      </div>

      {outrasDaRegiao.length > 0 && (
        <section className="related">
          <span className="section-label">Continue lendo</span>
          <h2>Mais notícias da Região {regiaoInfo.nome}</h2>
          <div className="related-grid">
            {outrasDaRegiao.map((n) => (
              <a className="news-card" href={`noticia-regiao.html?regiao=${regiaoChaveUrl}&id=${n.id}`} key={n.id}>
                <div className="thumb">
                  {caminhoImagemDe(n.imagem)
                    ? <img src={caminhoImagemDe(n.imagem)} alt={n.titulo} />
                    : null}
                </div>
                <div className="body">
                  <span className="cat">{n.categoria}</span>
                  <h3>{n.titulo}</h3>
                  <p>{n.resumo}</p>
                  <span className="meta">{n.data}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <div className="back-link">
        <a href={`${regiaoChaveUrl}.html`}>← Voltar para Região {regiaoInfo.nome}</a>
      </div>

    </React.Fragment>
  );
}

const raizNoticiaRegiaoEl = document.getElementById('noticia-regiao-root');
if (raizNoticiaRegiaoEl) {
  ReactDOM.createRoot(raizNoticiaRegiaoEl).render(<App />);
}
