// ============================================================================
// js/regiao-noticias-data.js
//
// As 12 notícias de cada uma das 5 regiões. Cada notícia agora tem duas
// camadas, igual o padrão usado em js/noticias-data.js:
//   1) Dados resumidos -> card na tela da região (norte.html, etc.)
//   2) `corpo` (array de blocos) -> tela de leitura (noticia-regiao.html)
//
// ⚠️ O `corpo` de cada notícia é conteúdo FICTÍCIO gerado pra validar a
// estrutura de leitura (mesmo esquema de blocos de js/noticias-data.js:
// paragrafo, titulo, subtitulo, lista, estatisticas, citacao, regiao).
// Título, resumo, imagem, data e categoria de cada notícia continuam
// exatamente como vocês escreveram — só o corpo do texto é inventado.
//
// `linkFonte`: se a notícia tinha um link de fonte real (diferente do
// placeholder 'https://...'), ele é mostrado no fim da matéria como
// "Fonte original". Notícias sem fonte real não mostram esse link.
//
// Categoria precisa ser IGUAL a um dos temas cadastrados da região em
// js/regioes-data.js — senão o filtro de categoria não vai combinar com
// nenhum botão de filtro.
// ============================================================================

window.REGIAO_NOTICIAS = {
  "norte": [
    {
      "id": 1,
      "titulo": "Amazônia tem mais de 2,7 mil espécies de peixes, aponta estudo",
      "resumo": "Número representa 15% de todas as espécies conhecidas no mundo",
      "imagem": "assets/noticias/norte1.jpg",
      "data": "08/09/2026",
      "categoria": "Biodiversidade",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "08/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Número representa 15% de todas as espécies conhecidas no mundo"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Biodiversidade\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Amazonas ganha quatro reservas de desenvolvimento sustentável",
      "resumo": "Áreas somam cerca de 669 mil hectares de unidades de conservação",
      "imagem": "assets/noticias/norte2.png",
      "data": "08/09/2026",
      "categoria": "Conservação",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "08/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Áreas somam cerca de 669 mil hectares de unidades de conservação"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Conservação\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Dia da Amazônia é celebrado com El Niño e alerta de seca intensa",
      "resumo": "Bioma concentra 20% de toda água do planeta e é essencial para a vida",
      "imagem": "assets/noticias/norte3.webp",
      "data": "04/09/2026",
      "categoria": "Clima e Meio Ambiente",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "04/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Bioma concentra 20% de toda água do planeta e é essencial para a vida"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Clima e Meio Ambiente\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 4,
      "titulo": "Devastação na Amazônia pode quebrar maior \"máquina de chuva\" do mundo",
      "resumo": "Cientistas destacam importância do bioma para toda a América do Sul",
      "imagem": "assets/noticias/norte4.webp",
      "data": "12/09/2026",
      "categoria": "Desmatamento",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "12/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Cientistas destacam importância do bioma para toda a América do Sul"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Desmatamento\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Com calor e seca nos rios amazônicos, SUS reforça assistência à saúde na região Norte",
      "resumo": "Bases da Força Nacional do SUS e Centros de Informação em Saúde e Clima reforçam o apoio técnico às comunidades da Amazônia",
      "imagem": "assets/noticias/norte5.webp",
      "data": "16/09/2026",
      "categoria": "Saúde e Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "16/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Bases da Força Nacional do SUS e Centros de Informação em Saúde e Clima reforçam o apoio técnico às comunidades da Amazônia"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Saúde e Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 6,
      "titulo": "Manaus atinge nível péssimo de qualidade do ar após queimadas na Amazônia",
      "resumo": "Resumo da notíciaPesquisadores apontam que fumaça de queimadas afeta a capital amazonense desde o início de setembro",
      "imagem": "assets/noticias/norte6.webp",
      "data": "23/09/26",
      "categoria": "Incêndios Florestais",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "23/09/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Resumo da notíciaPesquisadores apontam que fumaça de queimadas afeta a capital amazonense desde o início de setembro"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Incêndios Florestais\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 7,
      "titulo": "MPF cobra R$ 50 mil à União por demora em conter invasão em terra indígena",
      "resumo": "Mais de 500 pessoas ocuparam a TI Ituna-Itatá, no Pará, área destinada à proteção de indígenas isolados; MPF aponta aumento de queimadas, desmatamento e ameaças a servidores da Funai",
      "imagem": "assets/noticias/norte7.webp",
      "data": "08/09/26",
      "categoria": "Povos da floresta",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "08/09/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Mais de 500 pessoas ocuparam a TI Ituna-Itatá, no Pará, área destinada à proteção de indígenas isolados; MPF aponta aumento de queimadas, desmatamento e ameaças a servidores da Funai"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Povos da floresta\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 8,
      "titulo": "Pará declara alerta climático preventivo diante de projeções do El Niño",
      "resumo": "Medida vale por 180 dias e prevê ações para reduzir riscos de estiagem, incêndios florestais, ondas de calor e escassez de água no estado",
      "imagem": "assets/noticias/norte8.webp",
      "data": "25/08/26",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "25/08/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Medida vale por 180 dias e prevê ações para reduzir riscos de estiagem, incêndios florestais, ondas de calor e escassez de água no estado"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 9,
      "titulo": "Terras indígenas respondem por 1,7% do desmatamento na Amazônia, diz Imazon",
      "resumo": "Dados mostram que quase 60% desses territórios não tiveram registro de derrubada entre agosto de 2025 e julho de 2026",
      "imagem": "assets/noticias/norte9.webp",
      "data": "31/08/26",
      "categoria": "Desmatamento",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "31/08/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Dados mostram que quase 60% desses territórios não tiveram registro de derrubada entre agosto de 2025 e julho de 2026"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Desmatamento\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 10,
      "titulo": "Rio Acre registra 3,10 metros neste domingo em Rio Branco",
      "resumo": "Resumo da notícia",
      "imagem": "assets/noticias/norte10.webp",
      "data": "20/09/26",
      "categoria": "Recursos Hídricos",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "20/09/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Resumo da notícia"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Recursos Hídricos\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 11,
      "titulo": "Tocantins inicia monitoramento sanitário para prevenir Influenza Aviária e Doença de Newcastle",
      "resumo": "Estudo será realizado em 38 propriedades selecionadas pelo Ministério da Agricultura e Pecuária para comprovar ausência dos vírus no estado.",
      "imagem": "assets/noticias/norte11.jpeg",
      "data": "15/09/26",
      "categoria": "Fauna e Saúde",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "15/09/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Estudo será realizado em 38 propriedades selecionadas pelo Ministério da Agricultura e Pecuária para comprovar ausência dos vírus no estado."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"Fauna e Saúde\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    },
    {
      "id": 12,
      "titulo": "Hospital Universitário é entregue em Porto Velho para atender pacientes pelo SUStícia",
      "resumo": "Unidade vai oferecer consultas e exames em Oftalmologia, Ortopedia e Cardiologia. Atendimentos estão previstos para começar em 28 de setembro.",
      "imagem": "assets/noticias/norte12.webp",
      "data": "18/09/26",
      "categoria": "saúde",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "18/09/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Unidade vai oferecer consultas e exames em Oftalmologia, Ortopedia e Cardiologia. Atendimentos estão previstos para começar em 28 de setembro."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Norte, reacendendo o debate sobre o tema \"saúde\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Norte, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Norte",
          "descricao": "Conheça mais sobre a Região Norte, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/norte.html"
        }
      ]
    }
  ],
  "nordeste": [
    {
      "id": 1,
      "titulo": "Expedição científica brasileira investiga abismos do Atlântico",
      "resumo": "Grupo sairá de Fortaleça, no Ceará no domingo",
      "imagem": "assets/noticias/nordeste1.webp",
      "data": "18/09/2026",
      "categoria": "Pesquisa e Ciência",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "18/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Grupo sairá de Fortaleça, no Ceará no domingo"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Pesquisa e Ciência\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Nordeste ganha espaço no mercado de carros elétricos e híbridos",
      "resumo": "Resumo da notícia",
      "imagem": "assets/noticias/nordeste2.webp",
      "data": "12/09/2026",
      "categoria": "Sustentabilidade",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "12/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Resumo da notícia"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Sustentabilidade\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Chuva intensa mantém alerta para tempestades no litoral do Nordeste",
      "resumo": "Capitais podem registrar 150 mm até domingo (17), com risco elevado para alagamentos, enchentes e deslizamentos após volumes acima da média em abril e maio",
      "imagem": "assets/noticias/nordeste3.webp",
      "data": "12/05/26",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "12/05/26",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Capitais podem registrar 150 mm até domingo (17), com risco elevado para alagamentos, enchentes e deslizamentos após volumes acima da média em abril e maio"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 4,
      "titulo": "Tremor de terra registrado na Bahia é sentido por moradores do Tocantins",
      "resumo": "Abalo foi registrado na manhã da terça-feira (14) em Barreiras; sismo também foi percebido em cidades vizinhas e no Tocantins",
      "imagem": "assets/noticias/nordeste4.webp",
      "data": "15/10/25",
      "categoria": "Fenômenos Naturais",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "15/10/25",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Abalo foi registrado na manhã da terça-feira (14) em Barreiras; sismo também foi percebido em cidades vizinhas e no Tocantins"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Fenômenos Naturais\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Turista é resgatada com auxílio de helicóptero após acidente com quadriciclo em Jericoacoara",
      "resumo": "Resumo da notícia",
      "imagem": "assets/noticias/nordeste6.jpg",
      "data": "05/09/2026",
      "categoria": "Turismo e Segurança",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "05/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Resumo da notícia"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Turismo e Segurança\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 6,
      "titulo": "Mutirões de limpeza mobilizam voluntários em 7 praias no litoral brasileiro neste sábado",
      "resumo": "Dia Mundial da Limpeza mobiliza milhões de pessoas em mais de 212 países e territórios em defesa do meio ambiente",
      "imagem": "assets/noticias/nordeste7.webp",
      "data": "19/09/2026",
      "categoria": "Conservação Marinha",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "19/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Dia Mundial da Limpeza mobiliza milhões de pessoas em mais de 212 países e territórios em defesa do meio ambiente"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Conservação Marinha\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 7,
      "titulo": "Previsão do tempo na região Nordeste para segunda-feira (21) ",
      "resumo": "A segunda-feira (21) na região Nordeste será marcada por altas temperaturas, com termômetros registrando máximas de até 37,5°C",
      "imagem": "assets/noticias/nordeste8.webp",
      "data": "20/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "20/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "A segunda-feira (21) na região Nordeste será marcada por altas temperaturas, com termômetros registrando máximas de até 37,5°C"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 8,
      "titulo": "Dia Mundial dos Oceanos: ONGs atuam na preservação dos oceanos no Nordeste",
      "resumo": "Diversas entidades protegem e realizam um trabalho de conservação no litoral nordestino com projetos que vão do mapeamento dos meios biológico, geomorfológico e social à preservação de espécies marinhas.",
      "imagem": "assets/noticias/nordeste9.webp",
      "data": "08/06/2026",
      "categoria": "Conservação Marinha",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "08/06/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Diversas entidades protegem e realizam um trabalho de conservação no litoral nordestino com projetos que vão do mapeamento dos meios biológico, geomorfológico e social à preservação de espécies marinhas."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Conservação Marinha\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 9,
      "titulo": "Alerta para queimadas continua no interior do Nordeste com calor e ar seco",
      "resumo": "Massa de ar seco mantém temperaturas elevadas e baixos índices de umidade em grande parte do interior da região, favorecendo a propagação de focos de incêndio.",
      "imagem": "assets/noticias/nordeste10.webp",
      "data": "23/09/2026",
      "categoria": "Incêndios Florestais.",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "23/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Massa de ar seco mantém temperaturas elevadas e baixos índices de umidade em grande parte do interior da região, favorecendo a propagação de focos de incêndio."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Incêndios Florestais.\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 10,
      "titulo": "Primavera em Pernambuco pode ser mais seca e mais quente por conta do El Niño, diz Apac",
      "resumo": "El Niño pode agravar o aumento das temperaturas e diminuir ainda mais a umidade do ar, que pode chegar a 10% em algumas localidades de Pernambuco",
      "imagem": "assets/noticias/nordeste11.jpeg",
      "data": "22/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "22/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "El Niño pode agravar o aumento das temperaturas e diminuir ainda mais a umidade do ar, que pode chegar a 10% em algumas localidades de Pernambuco"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 11,
      "titulo": "Calor intenso e chuva irregular devem marcar a primavera em Sergipe, aponta Semac",
      "resumo": "Segundo análise climática do estado, sertão e agreste têm maior chance de enfrentar temperaturas elevadas e déficit hídrico nos próximos meses.",
      "imagem": "assets/noticias/nordeste12.webp",
      "data": "21/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "21/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Segundo análise climática do estado, sertão e agreste têm maior chance de enfrentar temperaturas elevadas e déficit hídrico nos próximos meses."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    },
    {
      "id": 12,
      "titulo": "Mergulho em naufrágios é prejudicado por poluição que pode ter origem em dragagem no Recife",
      "resumo": "Notícia de fato apresentada ao Ministério Público Federal questiona possível relação de dragagem no Porto do Recife com água turva e lixo; administração portuária nega evidências de impacto e anuncia novo monitoramento",
      "imagem": "assets/noticias/nordeste13.jpeg",
      "data": " 23/09/2026",
      "categoria": "Oceanografia e Poluição",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": " 23/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Notícia de fato apresentada ao Ministério Público Federal questiona possível relação de dragagem no Porto do Recife com água turva e lixo; administração portuária nega evidências de impacto e anuncia novo monitoramento"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Nordeste, reacendendo o debate sobre o tema \"Oceanografia e Poluição\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Nordeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Nordeste",
          "descricao": "Conheça mais sobre a Região Nordeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/nordeste.html"
        }
      ]
    }
  ],
  "centro-oeste": [
    {
      "id": 1,
      "titulo": "Desmatamento do Cerrado cai 19% em um ano, segundo o Inpe",
      "resumo": "Dia do Cerrado: em um ano desmatamento do bioma cai 19%, diz Inpe",
      "imagem": "assets/noticias/centro1.webp",
      "data": "11/09/2026",
      "categoria": "Desmatamento",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "11/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Dia do Cerrado: em um ano desmatamento do bioma cai 19%, diz Inpe"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Desmatamento\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Cerrado registra segundo menor nível de alertas de desmatamento para agosto",
      "resumo": "Deter aponta 238 km² sob alerta no mês, uma redução de 18,9% em relação ao mesmo período de 2025. Maranhão, Mato Grosso, Tocantins foram os estados com maior número de alertas",
      "imagem": "assets/noticias/centro2.jpeg",
      "data": "11/09/2026",
      "categoria": "Desmatamento",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "11/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Deter aponta 238 km² sob alerta no mês, uma redução de 18,9% em relação ao mesmo período de 2025. Maranhão, Mato Grosso, Tocantins foram os estados com maior número de alertas"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Desmatamento\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Domingo divide Mato Grosso do Sul entre alertas de tempestade e baixa umidade",
      "resumo": "Enquanto regiões do estado podem ter chuva de até 100 mm por dia, ventos de até 100 km/h e granizo, outras enfrentam umidade relativa do ar de até 20%.",
      "imagem": "assets/noticias/centro3.webp",
      "data": "20/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "20/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Enquanto regiões do estado podem ter chuva de até 100 mm por dia, ventos de até 100 km/h e granizo, outras enfrentam umidade relativa do ar de até 20%."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 4,
      "titulo": "Frente fria derruba temperaturas no Centro-Oeste e provoca chuvas intensas",
      "resumo": "Massa de ar frio muda o tempo em Mato Grosso do Sul e Goiás, enquanto o Distrito Federal segue com calor e tempo seco",
      "imagem": "assets/noticias/centro4.webp",
      "data": "21/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "21/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Massa de ar frio muda o tempo em Mato Grosso do Sul e Goiás, enquanto o Distrito Federal segue com calor e tempo seco"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Rouanet Centro-Oeste recebe 1.270 propostas para projetos culturais",
      "resumo": "Goiás concentrou o maior número de propostas. Iniciativas habilitadas passarão por avaliação técnica, e o resultado está previsto para dezembro de 2026",
      "imagem": "assets/noticias/centro5.jpg",
      "data": "13/09/2026",
      "categoria": "Cultura",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "13/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Goiás concentrou o maior número de propostas. Iniciativas habilitadas passarão por avaliação técnica, e o resultado está previsto para dezembro de 2026"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Cultura\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 6,
      "titulo": "Avião que caiu em fazenda e deixou dois pilotos mortos em MT estava em fase de teste após manutenção, diz delegado",
      "resumo": "Aeronave havia passado por manutenção em Primavera do Leste antes do voo. Segundo delegado, houve uma possível falha pouco depois da decolagem em Poxoréu.Resumo da notícia",
      "imagem": "assets/noticias/centro6.avif",
      "data": "19/09/2026",
      "categoria": "Seguranças",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "19/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Aeronave havia passado por manutenção em Primavera do Leste antes do voo. Segundo delegado, houve uma possível falha pouco depois da decolagem em Poxoréu.Resumo da notícia"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Seguranças\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 7,
      "titulo": "Rajada de vento ‘tomba’ teto de posto de gasolina no MS e assusta moradores",
      "resumo": "Resumo da notícia",
      "imagem": "assets/noticias/centro7.webp",
      "data": "10/09/2026",
      "categoria": "Eventos Climáticos",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "10/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Resumo da notícia"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Eventos Climáticos\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 8,
      "titulo": "Receita investiga esquema de notas fiscais que movimentou R$900 milhões",
      "resumo": "Operação aponta prejuízo superior a R$ 500 milhões aos cofres públicos",
      "imagem": "assets/noticias/centro8.jpg",
      "data": "10/09/2026",
      "categoria": "Fiscalização",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "10/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Operação aponta prejuízo superior a R$ 500 milhões aos cofres públicos"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Fiscalização\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 9,
      "titulo": "Primavera começa com previsão de calor acima da média e chuvas irregulares",
      "resumo": "Previsão indica chuva acima da média no Sul e abaixo do esperado em áreas do Norte, Mato Grosso e MATOPIBA",
      "imagem": "assets/noticias/centro9.webp",
      "data": "22/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "22/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Previsão indica chuva acima da média no Sul e abaixo do esperado em áreas do Norte, Mato Grosso e MATOPIBA"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 10,
      "titulo": "Chuvas irregulares exigem cautela no início da semeadura de soja e milho em Goiás e Mato Grosso.",
      "resumo": "A previsão de chuvas nos próximos dias ainda será insuficiente para recuperar a umidade do solo.",
      "imagem": "assets/noticias/centro10.png",
      "data": "22/09/2026",
      "categoria": "Clima e Agricultura",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "22/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "A previsão de chuvas nos próximos dias ainda será insuficiente para recuperar a umidade do solo."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Clima e Agricultura\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 11,
      "titulo": "Risco de incêndios florestais aumenta em 399 municípios do Centro-Oeste",
      "resumo": "O período de seca e a previsão de intensificação do El Niño aumentam o risco de incêndios no Cerrado e em outras áreas do Centro-Oeste.",
      "imagem": "assets/noticias/centro11.webp",
      "data": "10/09/2026",
      "categoria": "Incêndios Florestais",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "10/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "O período de seca e a previsão de intensificação do El Niño aumentam o risco de incêndios no Cerrado e em outras áreas do Centro-Oeste."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Incêndios Florestais\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    },
    {
      "id": 12,
      "titulo": "SUS reforça assistência no Centro-Oeste diante do risco de incêndios e calor intenso",
      "resumo": "Ações de saúde e monitoramento foram reforçadas na região diante do calor intenso, da seca e do aumento do risco de incêndios florestais.",
      "imagem": "assets/noticias/centro12.webp",
      "data": "16/09/2026",
      "categoria": "Saúde e Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "16/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Ações de saúde e monitoramento foram reforçadas na região diante do calor intenso, da seca e do aumento do risco de incêndios florestais."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Centro-Oeste, reacendendo o debate sobre o tema \"Saúde e Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Centro-Oeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Centro-Oeste",
          "descricao": "Conheça mais sobre a Região Centro-Oeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/centro-oeste.html"
        }
      ]
    }
  ],
  "sudeste": [
    {
      "id": 1,
      "titulo": "Mata Atlântica perde quase 10 milhões de hectares de vegetação madura enquanto agricultura avança",
      "resumo": "Levantamento do MapBiomas revela transformação do bioma em 41 anos: agricultura ganhou 11 milhões de hectares, enquanto 9,7 milhões de hectares de vegetação madura foram perdidos desde 1985",
      "imagem": "assets/noticias/sudeste1.webp",
      "data": "14/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "14/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Levantamento do MapBiomas revela transformação do bioma em 41 anos: agricultura ganhou 11 milhões de hectares, enquanto 9,7 milhões de hectares de vegetação madura foram perdidos desde 1985"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "São Paulo registra setembro mais chuvoso desde o início dos registros",
      "resumo": "Volume já equivale a três vezes a média mensal para o período",
      "imagem": "assets/noticias/sudeste2.webp",
      "data": " 21/09/2026",
      "categoria": "Recuperação florestal",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": " 21/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Volume já equivale a três vezes a média mensal para o período"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Recuperação florestal\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Reservas de Mata Atlântica entre São Paulo e Paraná protegem cerca de 470 mil hectares",
      "resumo": "Reservas reconhecidas pela Unesco protegem cerca de 470 mil hectares de um dos trechos mais preservados do bioma no País",
      "imagem": "assets/noticias/sudeste3.jpeg",
      "data": "17/09/2026",
      "categoria": "Conservação",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "17/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Reservas reconhecidas pela Unesco protegem cerca de 470 mil hectares de um dos trechos mais preservados do bioma no País"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Conservação\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 4,
      "titulo": "Temporais avançam por Minas Gerais, Rio de Janeiro e Espírito Santo",
      "resumo": "Instabilidade avança pelo Sudeste e deixa a quarta-feira mais chuvosa no Rio de Janeiro, em grande parte de Minas Gerais e no Espírito Santo.",
      "imagem": "assets/noticias/sudeste4.webp",
      "data": "22/09/2026",
      "categoria": "Temporais",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "22/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Instabilidade avança pelo Sudeste e deixa a quarta-feira mais chuvosa no Rio de Janeiro, em grande parte de Minas Gerais e no Espírito Santo."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Temporais\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Dia Mundial da Limpeza: mutirões fazem ações de coleta em praias do Rio",
      "resumo": "Ações reúnem voluntários, estudantes e colaboradores em diferentes pontos da cidade para recolher resíduos e reforçar a conscientização ambiental",
      "imagem": "assets/noticias/sudeste5.jpeg",
      "data": "19/09/2026",
      "categoria": "Conservação Marinha",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "19/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Ações reúnem voluntários, estudantes e colaboradores em diferentes pontos da cidade para recolher resíduos e reforçar a conscientização ambiental"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Conservação Marinha\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 6,
      "titulo": "Ciclone extratropical provoca instabilidade no Sudeste",
      "resumo": "Centro-Oeste e interior do Nordeste terão calor e baixa umidade; litoral gaúcho pode ter ventos de até 90 km/h",
      "imagem": "assets/noticias/sudeste6.avif",
      "data": "19/09/2026",
      "categoria": "Eventos Climáticos",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "19/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Centro-Oeste e interior do Nordeste terão calor e baixa umidade; litoral gaúcho pode ter ventos de até 90 km/h"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Eventos Climáticos\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 7,
      "titulo": "Onça-pintada é encontrada em São Paulo após percorrer dezenas de quilômetros",
      "resumo": "Animal com aproximadamente 110kg não apresentava ferimentos e foi resgatado no interior do estado, na cidade de Teodoro Sampaio; deslocamento foi escoltado por policiais e agentes de conservação",
      "imagem": "assets/noticias/sudeste7.webp",
      "data": "18/09/2026",
      "categoria": "Fauna",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "18/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Animal com aproximadamente 110kg não apresentava ferimentos e foi resgatado no interior do estado, na cidade de Teodoro Sampaio; deslocamento foi escoltado por policiais e agentes de conservação"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Fauna\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 8,
      "titulo": "Estudo revela que Bacia do Rio Doce segue sob impacto ambiental 10 anos após desastre de Mariana",
      "resumo": "Pesquisa aponta impactos persistentes sobre a biodiversidade aquática da Bacia do Rio Doce, incluindo alterações na reprodução de peixes nativos.",
      "imagem": "assets/noticias/sudeste8.jpeg",
      "data": "23/09/2026",
      "categoria": "Biodiversidade e Recursos Hídricos",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "23/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Pesquisa aponta impactos persistentes sobre a biodiversidade aquática da Bacia do Rio Doce, incluindo alterações na reprodução de peixes nativos."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Biodiversidade e Recursos Hídricos\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 9,
      "titulo": "BNDES libera R$ 180,7 milhões para usinas de biometano em São Paulo e Espírito Santo",
      "resumo": "Duas novas usinas vão transformar resíduos de aterros sanitários em biometano, um combustível renovável, nos estados de São Paulo e Espírito Santo.",
      "imagem": "assets/noticias/sudeste9.webp",
      "data": "22/09/2026",
      "categoria": "Energia Renovável",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "22/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Duas novas usinas vão transformar resíduos de aterros sanitários em biometano, um combustível renovável, nos estados de São Paulo e Espírito Santo."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Energia Renovável\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 10,
      "titulo": "Rio Tietê registra redução de 26,7% na carga de poluição na Grande São Paulo",
      "resumo": "Estudo da Cetesb aponta redução da carga de matéria orgânica transportada pelo Rio Tietê na saída da Região Metropolitana de São Paulo.",
      "imagem": "assets/noticias/sudeste10.avif",
      "data": "17/09/2026",
      "categoria": "Recursos Hídricos",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "17/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Estudo da Cetesb aponta redução da carga de matéria orgânica transportada pelo Rio Tietê na saída da Região Metropolitana de São Paulo."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Recursos Hídricos\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 11,
      "titulo": "Polícia Federal combate pesca ilegal na Reserva de Alcatrazes",
      "resumo": "Operação investiga a captura ilegal de tubarões, arraias e outras espécies protegidas na Reserva de Vida Silvestre do Arquipélago de Alcatrazes.",
      "imagem": "assets/noticias/sudeste11.jpeg",
      "data": "15/09/2026",
      "categoria": "Fauna Marinha",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "15/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Operação investiga a captura ilegal de tubarões, arraias e outras espécies protegidas na Reserva de Vida Silvestre do Arquipélago de Alcatrazes."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Fauna Marinha\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    },
    {
      "id": 12,
      "titulo": "Serra do Japi ganha novas ações de proteção, tecnologia e educação ambiental",
      "resumo": "Novo programa reúne tecnologia, monitoramento, mapas interativos e educação ambiental para ampliar a proteção da biodiversidade da Serra do Japi.",
      "imagem": "assets/noticias/sudeste12.jpg",
      "data": "06/09/2026",
      "categoria": "Tecnologia Ambiental",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "06/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Novo programa reúne tecnologia, monitoramento, mapas interativos e educação ambiental para ampliar a proteção da biodiversidade da Serra do Japi."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sudeste, reacendendo o debate sobre o tema \"Tecnologia Ambiental\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sudeste, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sudeste",
          "descricao": "Conheça mais sobre a Região Sudeste, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sudeste.html"
        }
      ]
    }
  ],
  "sul": [
    {
      "id": 1,
      "titulo": "PF prende em flagrante quatro homens por pesca ilegal na Reserva Biológica Marinha do Arvoredo/SC",
      "resumo": "Ação conjunta da Polícia Federal e do ICMBio flagrou pesca ilegal em área protegida e apreendeu cerca de 100 kg de pescado.",
      "imagem": "assets/noticias/sul1.webp",
      "data": "17/09/2026",
      "categoria": "Fiscalização Ambiental",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "17/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Ação conjunta da Polícia Federal e do ICMBio flagrou pesca ilegal em área protegida e apreendeu cerca de 100 kg de pescado."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Fiscalização Ambiental\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Paraná terá chuvas acima da média em setembro, aponta previsão do Simepar",
      "resumo": "Previsão meteorológica indica possibilidade de chuvas acima da média em diferentes áreas do Paraná durante o mês de setembro.",
      "imagem": "assets/noticias/sul2.jpg",
      "data": "01/09/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "01/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Previsão meteorológica indica possibilidade de chuvas acima da média em diferentes áreas do Paraná durante o mês de setembro."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Primavera em Santa Catarina terá chuva e temperaturas acima da média",
      "resumo": "Previsão climática aponta condições de chuva e temperaturas acima da média para Santa Catarina durante a primavera.",
      "imagem": "assets/noticias/sul3.webp",
      "data": "31/08/2026",
      "categoria": "Clima",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "31/08/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Previsão climática aponta condições de chuva e temperaturas acima da média para Santa Catarina durante a primavera."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Clima\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 4,
      "titulo": "ARIE da Ilha dos Valadares avança na elaboração de plano de manejo",
      "resumo": "Área de Relevante Interesse Ecológico avança na elaboração de um plano de manejo voltado à conservação e proteção ambiental.",
      "imagem": "assets/noticias/sul4.webp",
      "data": "17/09/2026",
      "categoria": "Conservação Ambiental",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "17/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Área de Relevante Interesse Ecológico avança na elaboração de um plano de manejo voltado à conservação e proteção ambiental."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Conservação Ambiental\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Paranaguá planta 50 cerejeiras em ação pelo Dia da Árvore",
      "resumo": "Ação ambiental promoveu o plantio de 50 cerejeiras em Paranaguá como parte das atividades relacionadas ao Dia da Árvore.",
      "imagem": "assets/noticias/sul5.jfif",
      "data": "21/09/2026",
      "categoria": "Arborização Urbana",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "21/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Ação ambiental promoveu o plantio de 50 cerejeiras em Paranaguá como parte das atividades relacionadas ao Dia da Árvore."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Arborização Urbana\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 6,
      "titulo": "Bioma Pampa terá projeto de turismo de observação de aves em campos nativos",
      "resumo": "Projeto busca fortalecer o turismo de observação de aves e valorizar a biodiversidade dos campos nativos do bioma Pampa.",
      "imagem": "assets/noticias/sul6.jpg",
      "data": "04/09/2026",
      "categoria": "Biodiversidade e Turismo",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "04/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Projeto busca fortalecer o turismo de observação de aves e valorizar a biodiversidade dos campos nativos do bioma Pampa."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Biodiversidade e Turismo\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 7,
      "titulo": "Parque Nacional do Iguaçu é alvo de operação contra caça ilegal",
      "resumo": "Operação de fiscalização combate atividades de caça ilegal e busca proteger a fauna do Parque Nacional do Iguaçu.",
      "imagem": "assets/noticias/sul7.jpeg",
      "data": "01/09/2026",
      "categoria": "Proteção da Fauna",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "01/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Operação de fiscalização combate atividades de caça ilegal e busca proteger a fauna do Parque Nacional do Iguaçu."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Proteção da Fauna\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 8,
      "titulo": "Rio Grande realiza plantios comunitários e ações de recuperação de áreas verdes",
      "resumo": "Ações comunitárias de plantio de árvores foram realizadas com o objetivo de recuperar áreas verdes e incentivar a participação ambiental.",
      "imagem": "assets/noticias/sul8.jpeg",
      "data": "18/09/2026",
      "categoria": "Restauração Ambiental",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "18/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Ações comunitárias de plantio de árvores foram realizadas com o objetivo de recuperar áreas verdes e incentivar a participação ambiental."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Restauração Ambiental\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 9,
      "titulo": "Vera Cruz participa de projeto de sustentabilidade e recuperação de áreas verdes",
      "resumo": "Município participa de iniciativa voltada à sustentabilidade e à recuperação de áreas verdes, promovendo ações de preservação ambiental.",
      "imagem": "assets/noticias/sul9.jpg",
      "data": "10/09/2026",
      "categoria": "Sustentabilidade",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "10/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Município participa de iniciativa voltada à sustentabilidade e à recuperação de áreas verdes, promovendo ações de preservação ambiental."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Sustentabilidade\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 10,
      "titulo": "Sul do Brasil registra sequência de temporais com chuva intensa, granizo e vendavais",
      "resumo": "Paraná, Santa Catarina e Rio Grande do Sul registram condições favoráveis a temporais, com possibilidade de chuva intensa, granizo e ventos fortes.",
      "imagem": "assets/noticias/sul10.webp",
      "data": "15/09/2026",
      "categoria": "Eventos Climáticos",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "15/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Paraná, Santa Catarina e Rio Grande do Sul registram condições favoráveis a temporais, com possibilidade de chuva intensa, granizo e ventos fortes."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Eventos Climáticos\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 11,
      "titulo": "Planejamento Espacial Marinho Sul entra na fase final para mapear a costa de PR, SC e RS",
      "resumo": "Projeto de Planejamento Espacial Marinho entra em fase final com foco na organização e no mapeamento das atividades na costa dos três estados do Sul.",
      "imagem": "assets/noticias/sul11.webp",
      "data": "19/09/2026",
      "categoria": "Conservação Marinha",
      "linkFonte": "",
      "autor": "Gira-Brasil",
      "dataPublicacao": "19/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Projeto de Planejamento Espacial Marinho entra em fase final com foco na organização e no mapeamento das atividades na costa dos três estados do Sul."
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Conservação Marinha\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    },
    {
      "id": 12,
      "titulo": "Boletim do Conselho Permanente de Agrometeorologia Aplicada do Rio Grande do Sul traz prognóstico para as culturas agrícolas",
      "resumo": "Documento apresenta previsão climática e orientações para o período de outubro a dezembro",
      "imagem": "assets/noticias/sul12.webp",
      "data": "23/09/2026",
      "categoria": "Clima e Agricultura",
      "linkFonte": "https://estado.rs.gov.br/boletim-do-conselho-permanente-de-agrometeorologia-aplicada-do-rio-grande-do-sul-traz-prognostico-para-as-culturas-agricolas",
      "autor": "Gira-Brasil",
      "dataPublicacao": "23/09/2026",
      "tempoLeitura": "4 min de leitura",
      "legendaHero": "Registro relacionado à notícia. Foto: Gira-Brasil.",
      "corpo": [
        {
          "tipo": "paragrafo",
          "texto": "Documento apresenta previsão climática e orientações para o período de outubro a dezembro"
        },
        {
          "tipo": "titulo",
          "id": "sec-detalhes",
          "texto": "Entenda o caso"
        },
        {
          "tipo": "paragrafo",
          "texto": "O caso chamou atenção de moradores e autoridades da região Sul, reacendendo o debate sobre o tema \"Clima e Agricultura\" na área. Segundo informações preliminares, o episódio se soma a um conjunto de situações recentes acompanhadas de perto por órgãos ambientais e pela comunidade local."
        },
        {
          "tipo": "lista",
          "itens": [
            "Ampliação do monitoramento e da fiscalização na área afetada.",
            "Diálogo entre poder público, comunidade local e especialistas.",
            "Investimento em ações de prevenção e resposta rápida."
          ]
        },
        {
          "tipo": "titulo",
          "id": "sec-relevancia",
          "texto": "Por que isso importa"
        },
        {
          "tipo": "paragrafo",
          "texto": "Casos como este reforçam a importância de acompanhar de perto o que acontece na região Sul, já que decisões tomadas hoje têm efeito direto sobre a conservação ambiental e a qualidade de vida da população local nos próximos anos."
        },
        {
          "tipo": "regiao",
          "nome": "Sul",
          "descricao": "Conheça mais sobre a Região Sul, seus biomas, desafios ambientais e as notícias mais recentes.",
          "link": "../regioes/sul.html"
        }
      ]
    }
  ]
};
