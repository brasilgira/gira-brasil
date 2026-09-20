// ============================================================================
// js/noticias-data.js
//
// Fonte única de dados das notícias — igual o padrão que já usamos em
// js/biomas-data.js (window.BIOMAS). Aqui é window.NOTICIAS.
//
// Cada notícia tem duas "camadas" de informação:
//   1) Dados resumidos -> usados no card da listagem (noticias.html)
//   2) `corpo` (array de blocos) -> usado na tela de leitura (noticia.html)
//
// Pra abrir uma notícia específica, o link do card aponta pra
// noticia.html?id=X, e a tela de leitura procura nesse array o objeto
// com esse id.
//
// TIPOS DE BLOCO que o `corpo` pode ter (usados pela tela de leitura pra
// decidir o que desenhar):
//   { tipo: 'paragrafo', texto }
//   { tipo: 'titulo', id, texto }       -> vira <h2>, entra no sumário lateral
//   { tipo: 'subtitulo', id, texto }    -> vira <h3>, entra no sumário lateral
//   { tipo: 'lista', itens: [...] }     -> <ul><li>
//   { tipo: 'estatisticas', itens: [{ numero, legenda }] } -> faixa de stats
//   { tipo: 'citacao', texto, autor }   -> quote-block em destaque
//   { tipo: 'regiao', nome, descricao, link } -> card "esta notícia está
//                                                 relacionada" no final
//
// ⚠️ Isto ainda é conteúdo de exemplo/placeholder pra validar a estrutura,
// igual já era no noticia.html antigo. Quando a tela ligar na API de
// verdade (Supabase), esse `corpo` provavelmente vira o campo
// `conteudo_html` ou `blocos JSONB` da tabela `noticias` (pendência já
// documentada no projeto).
// ============================================================================

window.NOTICIAS = [

  {
    id: 1,
    categoria: 'Desmatamento',
    bioma: 'Amazônia',
    titulo: 'Desmatamento na Amazônia cai 17% no 1º trimestre, mas volta a subir em março',
    imagem: 'https://s2-g1.glbimg.com/09bqcChKWSsaWpWZdeQAugFVdVA=/0x0:4000x3000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/Y/A/d4Hy2QR1KoZZ9HKNBSsg/2022-10-07t171259z-1021400778-rc2l7v9lsv3p-rtrmadp-3-brazil-environment.jpg',
    resumo: 'Levantamento do Imazon aponta que 348 km² de floresta foram derrubados entre janeiro e março deste ano. No acumulado do calendário de monitoramento, queda é de 36%, a menor área para o período desde 2017.',
    meta: '27/04/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '27 de abril de 2026',
    dataAtualizacao: '27 de abril de 2026',
    tempoLeitura: '6 min de leitura',
    legendaHero: 'Área de floresta amazônica vista de cima. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'Imagens de satélite analisadas nas últimas semanas mostram um avanço expressivo do desmatamento em regiões da Amazônia Legal historicamente associadas à expansão de atividades agropecuárias. O aumento chama atenção de pesquisadores e órgãos ambientais, que reforçam a necessidade de monitoramento contínuo e ações coordenadas de fiscalização.' },
      { tipo: 'paragrafo', texto: 'Segundo dados preliminares, a área afetada nos últimos doze meses é significativamente maior do que a registrada no mesmo período do ciclo anterior, revertendo parte da tendência de queda observada em anos recentes.' },

      { tipo: 'titulo', id: 'sec-acontecendo', texto: 'O que está acontecendo' },
      { tipo: 'paragrafo', texto: 'O monitoramento por satélite identificou novos polígonos de desmatamento concentrados principalmente ao longo do chamado "arco do desmatamento", faixa que corta o sul e o sudeste da Amazônia. A maior parte da vegetação suprimida se converteu, no curto prazo, em pastagens e áreas de cultivo.' },
      { tipo: 'lista', itens: [
        'Abertura de novas estradas não oficiais facilitando o acesso a áreas antes preservadas.',
        'Aumento de queimadas associadas à limpeza de terreno para uso agropecuário.',
        'Concentração de alertas em unidades de conservação e terras indígenas no entorno da floresta.',
      ]},

      { tipo: 'estatisticas', itens: [
        { numero: '+18%', legenda: 'Aumento registrado na área afetada em relação ao ciclo anterior.' },
        { numero: '6', legenda: 'Biomas brasileiros monitorados pelos sistemas de alerta ambiental.' },
        { numero: '120 mil+', legenda: 'Espécies já catalogadas nas regiões de floresta acompanhadas.' },
      ]},

      { tipo: 'titulo', id: 'sec-impactos', texto: 'Os impactos ambientais' },
      { tipo: 'paragrafo', texto: 'A perda de cobertura vegetal em larga escala compromete diretamente a capacidade da floresta de regular o clima regional, armazenar carbono e manter o ciclo de chuvas que abastece boa parte do território brasileiro. Especialistas apontam que a fragmentação de grandes áreas contínuas também isola populações de fauna e flora, reduzindo a resiliência dos ecossistemas.' },
      { tipo: 'paragrafo', texto: 'O desmatamento acumulado também eleva o risco de a floresta atingir um ponto de savanização em regiões mais secas, um processo de degradação que pode ser difícil de reverter no longo prazo.' },

      { tipo: 'citacao', texto: 'A preservação da floresta depende de informação, monitoramento e participação da sociedade.', autor: 'Equipe de Monitoramento Ambiental, Gira-Brasil' },

      { tipo: 'subtitulo', id: 'sec-porque', texto: 'Por que isso importa?' },
      { tipo: 'paragrafo', texto: 'A Amazônia desempenha um papel central na estabilidade climática da América do Sul. Mudanças na cobertura florestal afetam desde o regime de chuvas em regiões agrícolas distantes até a disponibilidade de água em grandes centros urbanos, tornando o tema relevante para todo o país — não apenas para quem vive próximo à floresta.' },

      { tipo: 'titulo', id: 'sec-fazer', texto: 'O que pode ser feito' },
      { tipo: 'paragrafo', texto: 'Órgãos de fiscalização ambiental têm reforçado o uso de tecnologia de monitoramento em tempo real para identificar focos de desmatamento com mais agilidade. Entre as medidas discutidas por especialistas estão:' },
      { tipo: 'lista', itens: [
        'Ampliação da fiscalização em áreas de maior incidência de alertas.',
        'Incentivo a cadeias produtivas livres de desmatamento.',
        'Fortalecimento da proteção de terras indígenas e unidades de conservação.',
        'Investimento em tecnologias de monitoramento por satélite acessíveis a comunidades locais.',
      ]},
      { tipo: 'paragrafo', texto: 'Iniciativas de ciência cidadã e plataformas educativas, como o próprio Gira-Brasil, também têm papel importante ao aproximar o público desses dados e estimular o acompanhamento contínuo da situação da floresta.' },

      { tipo: 'regiao', nome: 'Amazônia', descricao: 'Explore informações sobre o bioma, espécies, características e principais desafios ambientais da maior floresta tropical do planeta.', link: 'regioes.html' },
    ],
  },

  {
    id: 2,
    categoria: 'Queimadas',
    bioma: 'Cerrado',
    titulo: 'Reunião técnica atualiza previsões climáticas e aponta intensificação do El Niño até dezembro',
    imagem: 'https://www.gov.br/mma/pt-br/noticias-defeso-eleitoral/reuniao-tecnica-atualiza-previsoes-climaticas-e-aponta-intensificacao-do-el-nino-ate-dezembro/mma_tamanho-site-97.png/@@images/19bb88e9-b3ce-456b-aca0-68d755604824.png',
    resumo: 'Especialistas indicam aumento do risco de incêndios florestais entre agosto e outubro, principalmente na Amazônia, Cerrado e parte do Centro-Oeste.',
    meta: '17/07/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '17 de julho de 2026',
    dataAtualizacao: '17 de julho de 2026',
    tempoLeitura: '4 min de leitura',
    legendaHero: 'Reunião técnica de especialistas em clima. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'Uma reunião técnica reuniu pesquisadores de instituições climáticas para atualizar as previsões do fenômeno El Niño e seus efeitos sobre o território brasileiro nos próximos meses.' },
      { tipo: 'titulo', id: 'sec-previsao', texto: 'O que os dados indicam' },
      { tipo: 'paragrafo', texto: 'As projeções apontam para um período mais seco e quente do que o normal entre agosto e outubro, condição que historicamente favorece a propagação de incêndios florestais em biomas já fragilizados pelo desmatamento.' },
      { tipo: 'lista', itens: [
        'Risco elevado de incêndios na Amazônia, Cerrado e parte do Centro-Oeste.',
        'Redução no volume de chuvas esperado para o período.',
        'Recomendação de reforço nas brigadas de combate a incêndio.',
      ]},
      { tipo: 'estatisticas', itens: [
        { numero: '3', legenda: 'Biomas com risco elevado de queimadas no período.' },
        { numero: '90 dias', legenda: 'Janela crítica prevista pelos especialistas.' },
      ]},
      { tipo: 'titulo', id: 'sec-prevencao', texto: 'O que pode ser feito' },
      { tipo: 'paragrafo', texto: 'Órgãos ambientais recomendam o fortalecimento do monitoramento por satélite e a ampliação das equipes de brigadistas nas regiões de maior risco, além de campanhas de conscientização sobre queimadas de origem humana.' },
      { tipo: 'regiao', nome: 'Cerrado', descricao: 'Conheça as características, a fauna e a flora de um dos biomas mais afetados por queimadas no Brasil.', link: 'regioes.html' },
    ],
  },

  {
    id: 3,
    categoria: 'Energia Limpa',
    bioma: 'Mata Atlântica',
    titulo: 'CineSolar leva cinema ao ar livre movido a energia solar para a Vila Ana com sessões gratuitas',
    imagem: 'https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2026/06/cinesolar_morada_das_vinhas_complexo_francisco_gastaldo-37-de-54-1280x854.jpg',
    resumo: 'A população de Jundiaí terá a oportunidade de vivenciar uma experiência cultural e educativa especial com mais uma edição do CineSolar, o primeiro cinema itinerante movido a energia solar do Brasil.',
    meta: '07/06/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '7 de junho de 2026',
    dataAtualizacao: '7 de junho de 2026',
    tempoLeitura: '3 min de leitura',
    legendaHero: 'Sessão do CineSolar ao ar livre. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'O projeto CineSolar chega à Vila Ana com sessões gratuitas de cinema ao ar livre, usando um sistema de projeção alimentado inteiramente por energia solar.' },
      { tipo: 'titulo', id: 'sec-projeto', texto: 'Como funciona o projeto' },
      { tipo: 'paragrafo', texto: 'A estrutura itinerante conta com painéis solares que armazenam energia ao longo do dia para abastecer o telão, o som e a iluminação das sessões noturnas, sem depender da rede elétrica local.' },
      { tipo: 'lista', itens: [
        'Sessões gratuitas e abertas à comunidade.',
        'Estrutura 100% alimentada por energia solar.',
        'Ação de educação ambiental combinada ao evento cultural.',
      ]},
      { tipo: 'titulo', id: 'sec-impacto', texto: 'Por que isso importa' },
      { tipo: 'paragrafo', texto: 'Iniciativas como essa mostram, na prática, como fontes renováveis podem viabilizar atividades culturais e de lazer, aproximando o público do tema da energia limpa de forma acessível.' },
      { tipo: 'regiao', nome: 'Sustentabilidade', descricao: 'Veja outras iniciativas de energia limpa e tecnologia sustentável espalhadas pelo Brasil.', link: 'regioes.html' },
    ],
  },

  {
    id: 4,
    categoria: 'Biodiversidade',
    bioma: 'Caatinga',
    titulo: 'Brasil apresenta na COP17 na Mongólia experiência de combate à degradação da terra e mitigação dos efeitos da seca',
    imagem: 'https://www.gov.br/mma/pt-br/noticias-defeso-eleitoral/brasil-apresenta-na-cop17-na-mongolia-experiencia-de-combate-a-degradacao-da-terra-e-mitigacao-dos-efeitos-da-seca/unccdcop17_horiz_2col.png/@@images/472b6abc-b75e-44eb-9577-6c0fc52c7298.png',
    resumo: 'A participação brasileira, coordenada pelo MMA, Itamaraty e ApexBrasil, ocorre nesta segunda-feira, dia 17.',
    meta: '15/08/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '15 de agosto de 2026',
    dataAtualizacao: '15 de agosto de 2026',
    tempoLeitura: '5 min de leitura',
    legendaHero: 'Delegação brasileira na COP17. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'O Brasil apresentou, durante a COP17 realizada na Mongólia, sua experiência de combate à degradação da terra e às políticas de mitigação dos efeitos da seca em regiões vulneráveis do país.' },
      { tipo: 'titulo', id: 'sec-apresentacao', texto: 'O que foi apresentado' },
      { tipo: 'paragrafo', texto: 'A delegação, coordenada pelo Ministério do Meio Ambiente em conjunto com o Itamaraty e a ApexBrasil, destacou programas de recuperação de áreas degradadas e tecnologias de manejo de solo desenvolvidas no semiárido brasileiro.' },
      { tipo: 'lista', itens: [
        'Programas de recuperação de solos degradados.',
        'Tecnologias de convivência com a seca no semiárido.',
        'Parcerias internacionais para troca de conhecimento técnico.',
      ]},
      { tipo: 'titulo', id: 'sec-relevancia', texto: 'Por que isso importa' },
      { tipo: 'paragrafo', texto: 'A degradação da terra afeta diretamente a segurança alimentar e hídrica de milhões de pessoas. Compartilhar experiências em fóruns internacionais ajuda o Brasil a atrair cooperação técnica e financeira para projetos de recuperação ambiental.' },
      { tipo: 'regiao', nome: 'Caatinga', descricao: 'Saiba mais sobre o bioma mais afetado pela seca no Brasil e as estratégias de convivência com o clima semiárido.', link: 'regioes.html' },
    ],
  },

  {
    id: 5,
    categoria: 'Educação',
    bioma: 'Nacional',
    titulo: 'MEC amplia ações de sustentabilidade na educação básica',
    imagem: 'https://images.educamaisbrasil.com.br/content/noticias/mec-amplia-acoes-de-sustentabilidade-na-educacao-basica_g.jpg',
    resumo: 'Iniciativas reforçam conscientização sobre mudanças climáticas nas escolas.',
    meta: '17/03/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '17 de março de 2026',
    dataAtualizacao: '17 de março de 2026',
    tempoLeitura: '3 min de leitura',
    legendaHero: 'Atividade de educação ambiental em sala de aula. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'O Ministério da Educação anunciou a ampliação de programas voltados à sustentabilidade dentro da educação básica, com foco em conscientização sobre mudanças climáticas desde os primeiros anos escolares.' },
      { tipo: 'titulo', id: 'sec-iniciativas', texto: 'O que muda nas escolas' },
      { tipo: 'lista', itens: [
        'Inclusão de temas ambientais no currículo de forma transversal.',
        'Material didático voltado para mudanças climáticas e biodiversidade.',
        'Incentivo a projetos de horta escolar e coleta seletiva.',
      ]},
      { tipo: 'titulo', id: 'sec-relevancia', texto: 'Por que isso importa' },
      { tipo: 'paragrafo', texto: 'Especialistas em educação ambiental apontam que formar desde cedo uma geração mais consciente sobre o meio ambiente é uma das formas mais eficazes de garantir mudanças de comportamento no longo prazo.' },
      { tipo: 'regiao', nome: 'Educação Ambiental', descricao: 'Veja como o Gira-Brasil também busca aproximar estudantes de temas ambientais por meio de conteúdo e tecnologia.', link: 'sobre.html' },
    ],
  },

  {
    id: 6,
    categoria: 'Tecnologia',
    bioma: 'Nacional',
    titulo: '7 projetos de estudantes que inspiram soluções sustentáveis',
    imagem: 'https://ciclovivo.com.br/wp-content/uploads/2026/06/projetos-estudantes-ciclo-composteira-1024x683.jpg',
    resumo: 'De composteiras inteligentes a jardins flutuantes, conheça projetos que unem tecnologia, educação ambiental, inovação e impacto social.',
    meta: '05/05/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '5 de maio de 2026',
    dataAtualizacao: '5 de maio de 2026',
    tempoLeitura: '5 min de leitura',
    legendaHero: 'Estudantes apresentando projeto de composteira. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'Uma seleção de projetos criados por estudantes de todo o país mostra como criatividade e tecnologia podem se unir para propor soluções sustentáveis, desde composteiras automatizadas até sistemas de cultivo flutuante.' },
      { tipo: 'titulo', id: 'sec-projetos', texto: 'Destaques da seleção' },
      { tipo: 'lista', itens: [
        'Composteira inteligente com sensores de umidade e temperatura.',
        'Jardim flutuante para tratamento natural de água.',
        'Sistema de irrigação por reaproveitamento de água da chuva.',
        'Aplicativo de monitoramento de coleta seletiva comunitária.',
      ]},
      { tipo: 'titulo', id: 'sec-impacto', texto: 'Por que isso importa' },
      { tipo: 'paragrafo', texto: 'Projetos como esses mostram que soluções ambientais não precisam vir apenas de grandes instituições — iniciativas estudantis também têm potencial de gerar impacto real nas comunidades onde são aplicadas.' },
      { tipo: 'regiao', nome: 'Tecnologia e Meio Ambiente', descricao: 'Conheça mais sobre como a tecnologia tem sido aplicada à conservação ambiental no Brasil.', link: 'sobre.html' },
    ],
  },

  {
    id: 7,
    categoria: 'Reciclagem',
    bioma: 'Nacional',
    titulo: 'Do clima à reciclagem: avanços na agenda verde do Senado',
    imagem: 'https://imgs.search.brave.com/UiD_lyQVHeITprEL10Lmw7tzu9T7C4gAkX38G8mDQ2U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbGFz/c2ljLmV4YW1lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wMi9ldXJlY2lj/bG8uanBn',
    resumo: 'Resumo curto da reportagem, explicando do que se trata em uma ou duas linhas.',
    meta: '21/07/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '21 de julho de 2026',
    dataAtualizacao: '21 de julho de 2026',
    tempoLeitura: '4 min de leitura',
    legendaHero: 'Sessão do Senado sobre pauta ambiental. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'O Senado avançou em discussões sobre a agenda verde nacional, com projetos que vão da regulação climática ao fortalecimento das políticas de reciclagem em âmbito federal.' },
      { tipo: 'titulo', id: 'sec-pauta', texto: 'O que está em discussão' },
      { tipo: 'lista', itens: [
        'Metas de redução de resíduos sólidos em aterros.',
        'Incentivos fiscais para cooperativas de reciclagem.',
        'Integração da agenda climática às políticas de resíduos.',
      ]},
      { tipo: 'titulo', id: 'sec-relevancia', texto: 'Por que isso importa' },
      { tipo: 'paragrafo', texto: 'A pauta de reciclagem tem ganhado espaço junto às discussões climáticas por seu papel direto na redução de emissões e no fortalecimento da economia circular no país.' },
      { tipo: 'regiao', nome: 'Economia Circular', descricao: 'Entenda como as políticas de reciclagem se conectam com a conservação dos biomas brasileiros.', link: 'regioes.html' },
    ],
  },

  {
    id: 8,
    categoria: 'Espécies Ameaçadas',
    bioma: 'Amazônia',
    titulo: 'Tambaqui entra na lista de espécies ameaçadas na Amazônia',
    imagem: 'https://revistaamazonia.com.br/wp-content/uploads/2026/08/capa-1786895228127-47437-1200x685.webp',
    resumo: 'Resumo curto da reportagem, explicando do que se trata em uma ou duas linhas.',
    meta: '16/08/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '16 de agosto de 2026',
    dataAtualizacao: '16 de agosto de 2026',
    tempoLeitura: '4 min de leitura',
    legendaHero: 'Tambaqui em rio da Amazônia. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'O tambaqui, um dos peixes mais importantes da pesca amazônica, passou a integrar a lista oficial de espécies ameaçadas, resultado da pesca predatória e de alterações no regime hídrico dos rios da região.' },
      { tipo: 'titulo', id: 'sec-causas', texto: 'Por que a espécie está ameaçada' },
      { tipo: 'lista', itens: [
        'Pesca acima da capacidade de reposição natural da espécie.',
        'Alterações no nível dos rios associadas ao desmatamento.',
        'Perda de áreas de desova por degradação ambiental.',
      ]},
      { tipo: 'estatisticas', itens: [
        { numero: '1', legenda: 'Nova espécie incluída na lista de ameaçadas na região.' },
      ]},
      { tipo: 'titulo', id: 'sec-medidas', texto: 'O que pode ser feito' },
      { tipo: 'paragrafo', texto: 'Pesquisadores defendem o reforço da fiscalização durante o período de defeso e a ampliação de programas de reprodução em cativeiro para reintrodução da espécie em seu habitat natural.' },
      { tipo: 'regiao', nome: 'Amazônia', descricao: 'Explore mais sobre a fauna aquática e os desafios de conservação da maior floresta tropical do planeta.', link: 'regioes.html' },
    ],
  },

  {
    id: 9,
    categoria: 'Crise Climática',
    bioma: 'Nacional',
    titulo: 'Brasil avança na governança climática, mas queimadas batem recorde e desastres custam R$ 38 bi',
    imagem: 'https://classic.exame.com/wp-content/uploads/2024/09/pzzb7670.webp?ims=750x/filters:quality(85):format(webp)',
    resumo: 'Segundo Anuário Estadual de Mudanças Climáticas mostra que desmatamento caiu 32%, mas incêndios explodiram em todos os biomas — e metade dos estados ainda não tem fundo climático estruturado.',
    meta: '20/03/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '20 de março de 2026',
    dataAtualizacao: '20 de março de 2026',
    tempoLeitura: '7 min de leitura',
    legendaHero: 'Área atingida por incêndio florestal. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'O Anuário Estadual de Mudanças Climáticas revelou um cenário misto: enquanto o desmatamento apresentou queda expressiva, os incêndios florestais atingiram números recordes em todos os biomas brasileiros no último ano.' },
      { tipo: 'titulo', id: 'sec-dados', texto: 'Os números do anuário' },
      { tipo: 'estatisticas', itens: [
        { numero: '-32%', legenda: 'Redução no desmatamento registrada no período analisado.' },
        { numero: 'R$ 38 bi', legenda: 'Custo estimado dos desastres climáticos no país.' },
        { numero: '50%', legenda: 'Estados que ainda não têm fundo climático estruturado.' },
      ]},
      { tipo: 'titulo', id: 'sec-desafios', texto: 'Os principais desafios' },
      { tipo: 'lista', itens: [
        'Ausência de fundos climáticos em boa parte dos estados.',
        'Aumento expressivo de queimadas mesmo com queda no desmatamento.',
        'Necessidade de políticas integradas entre governança e prevenção de desastres.',
      ]},
      { tipo: 'citacao', texto: 'Reduzir o desmatamento não é suficiente se não vier acompanhado de políticas efetivas de prevenção a incêndios.', autor: 'Anuário Estadual de Mudanças Climáticas' },
      { tipo: 'regiao', nome: 'Governança Climática', descricao: 'Entenda como as políticas públicas afetam diretamente a conservação dos biomas brasileiros.', link: 'sobre.html' },
    ],
  },

  {
    id: 10,
    categoria: 'Sustentabilidade',
    bioma: 'Nacional',
    titulo: 'ESG Summit 2026: como a sustentabilidade entra na conta da perenidade dos negócios',
    imagem: 'https://classic.exame.com/wp-content/uploads/2026/05/DSCF9858.jpg?ims=750x/filters:quality(85):format(webp)',
    resumo: 'Com R$ 250 milhões investidos em energia renovável, Ypê defende que impacto ambiental e retorno econômico devem caminhar juntos.',
    meta: '29/05/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '29 de maio de 2026',
    dataAtualizacao: '29 de maio de 2026',
    tempoLeitura: '5 min de leitura',
    legendaHero: 'Painel do ESG Summit 2026. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'Durante o ESG Summit 2026, representantes de grandes empresas debateram como práticas sustentáveis deixaram de ser apenas uma exigência regulatória para se tornarem parte da estratégia de longevidade dos negócios.' },
      { tipo: 'titulo', id: 'sec-investimentos', texto: 'Os investimentos em destaque' },
      { tipo: 'estatisticas', itens: [
        { numero: 'R$ 250 mi', legenda: 'Valor investido em energia renovável por uma das empresas participantes.' },
      ]},
      { tipo: 'titulo', id: 'sec-debate', texto: 'O que foi discutido' },
      { tipo: 'lista', itens: [
        'Integração entre metas ambientais e resultado financeiro.',
        'Transparência em relatórios de impacto ambiental.',
        'Pressão de investidores por práticas ESG consolidadas.',
      ]},
      { tipo: 'citacao', texto: 'Impacto ambiental e retorno econômico devem caminhar juntos, não em direções opostas.', autor: 'Participante do ESG Summit 2026' },
      { tipo: 'regiao', nome: 'Economia Verde', descricao: 'Veja outras iniciativas que conectam sustentabilidade e economia no Brasil.', link: 'sobre.html' },
    ],
  },

  {
    id: 11,
    categoria: 'Petróleo e Meio Ambiente',
    bioma: 'Amazônia',
    titulo: 'Petrobras espera gastar R$ 3,3 bilhões em poços na Foz do Amazonas',
    imagem: 'https://imgs.search.brave.com/Qe8j9-FDhG8_-TBnWC_oMMwwF4_k4gzBECTqXbS9g1w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MjY4NTIxMi9wdC9m/b3RvL2Etd29ya2Vy/LWF0LWEtcGV0cm9i/cmFzLWdhcy1zdGF0/aW9uLWluLXNhby1w/YXVsby1icmF6aWwt/b24tdGh1cnNkYXkt/bWF5LTE2LTIwMjQt/YnJhemlscy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9LXpF/M05nakRDSkpNM3ot/Z3F6Q19UY1p5TXR2/d0o2LW14Ql9pbnRH/NUdiUT0',
    resumo: 'Instituto ambiental ainda não autorizou exploração de novas perfurações; estatal encontrou petróleo em primeiro poço.',
    meta: '16/08/2026',
    autor: 'Gira-Brasil',
    dataPublicacao: '16 de agosto de 2026',
    dataAtualizacao: '16 de agosto de 2026',
    tempoLeitura: '5 min de leitura',
    legendaHero: 'Plataforma de exploração na Foz do Amazonas. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'A Petrobras prevê investimentos bilionários em novos poços na região da Foz do Amazonas, área ambientalmente sensível onde a exploração ainda depende de autorização do órgão ambiental responsável.' },
      { tipo: 'titulo', id: 'sec-contexto', texto: 'O contexto da exploração' },
      { tipo: 'paragrafo', texto: 'A estatal já identificou a presença de petróleo em um primeiro poço perfurado na região, o que reforça o interesse econômico no local, mesmo diante da ausência de autorização para novas perfurações.' },
      { tipo: 'estatisticas', itens: [
        { numero: 'R$ 3,3 bi', legenda: 'Investimento previsto em novos poços na região.' },
      ]},
      { tipo: 'titulo', id: 'sec-preocupacoes', texto: 'As preocupações ambientais' },
      { tipo: 'lista', itens: [
        'Proximidade com áreas de manguezal e recifes na foz do rio.',
        'Risco de vazamentos em uma região de alta biodiversidade marinha.',
        'Ausência, até o momento, de licença ambiental definitiva.',
      ]},
      { tipo: 'regiao', nome: 'Amazônia', descricao: 'Saiba mais sobre os ecossistemas costeiros e marinhos ligados à foz do rio Amazonas.', link: 'regioes.html' },
    ],
  },

  {
    id: 12,
    categoria: 'Economia Verde',
    bioma: 'Nacional',
    titulo: 'Investimentos privados em meio ambiente no Brasil somam R$ 48,2 bi em 2025',
    imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/10/meioambiente.png?w=1200&h=900&crop=0&quality=90',
    resumo: 'Amcham aponta crescimento de 24% em investimentos em energia limpa, reflorestamento e economia circular.',
    meta: '14/10/2025',
    autor: 'Gira-Brasil',
    dataPublicacao: '14 de outubro de 2025',
    dataAtualizacao: '14 de outubro de 2025',
    tempoLeitura: '5 min de leitura',
    legendaHero: 'Painel solar em área de investimento privado. Foto: Gira-Brasil.',
    corpo: [
      { tipo: 'paragrafo', texto: 'Levantamento da Amcham mostra que os investimentos privados em iniciativas ambientais no Brasil alcançaram R$ 48,2 bilhões em 2025, um crescimento expressivo em relação ao ano anterior.' },
      { tipo: 'titulo', id: 'sec-setores', texto: 'Onde o dinheiro foi investido' },
      { tipo: 'estatisticas', itens: [
        { numero: 'R$ 48,2 bi', legenda: 'Total investido por empresas privadas em iniciativas ambientais em 2025.' },
        { numero: '+24%', legenda: 'Crescimento em relação ao ano anterior.' },
      ]},
      { tipo: 'lista', itens: [
        'Expansão de projetos de energia limpa.',
        'Programas de reflorestamento corporativo.',
        'Iniciativas de economia circular na cadeia produtiva.',
      ]},
      { tipo: 'titulo', id: 'sec-relevancia', texto: 'Por que isso importa' },
      { tipo: 'paragrafo', texto: 'O crescimento do investimento privado sinaliza uma mudança de postura do setor empresarial brasileiro, que passa a tratar a pauta ambiental como parte central da estratégia de negócio, e não apenas como exigência regulatória.' },
      { tipo: 'regiao', nome: 'Economia Verde', descricao: 'Conheça mais sobre como o setor privado tem impulsionado a conservação ambiental no Brasil.', link: 'sobre.html' },
    ],
  },

];
