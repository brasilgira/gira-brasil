// Obtém o ID da notícia a partir dos parâmetros da URL (ex: noticia.html?id=1)
function obterNoticiaIdDaUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Busca os comentários salvos no banco para a notícia atual
async function carregarComentarios(noticiaId) {
  if (!noticiaId) return;

  try {
    const resposta = await fetch(`http://localhost:3000/api/comentarios/noticia/${noticiaId}`);
    
    if (!resposta.ok) {
      throw new Error('Erro ao buscar comentários');
    }

    const comentarios = await resposta.json();
    console.log('Comentários do banco:', comentarios);
    
    // Se houver uma função no seu HTML/React para renderizar, chame-a aqui
    if (typeof window.renderizarComentarios === 'function') {
      window.renderizarComentarios(comentarios);
    }
  } catch (erro) {
    console.error('Erro ao carregar comentários:', erro);
  }
}

// Envia um novo comentário associado ao usuário logado
async function handleEnviarComentario(conteudoTexto) {
  const noticiaId = obterNoticiaIdDaUrl();
  const usuarioSessao = JSON.parse(localStorage.getItem('girabrasil_usuario'));

  if (!usuarioSessao || !usuarioSessao.id) {
    alert('Você precisa estar logado para comentar!');
    window.location.href = 'login.html';
    return;
  }

  if (!conteudoTexto || !conteudoTexto.trim()) {
    alert('Escreva algo antes de enviar!');
    return;
  }

  try {
    const resposta = await fetch('http://localhost:3000/api/comentarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        conteudo: conteudoTexto,
        noticiaId: noticiaId,
        usuarioId: usuarioSessao.id
      })
    });

    if (resposta.ok) {
      alert('Comentário publicado com sucesso!');
      carregarComentarios(noticiaId);
    } else {
      const erroData = await resposta.json();
      alert(erroData.erro || 'Erro ao publicar comentário.');
    }
  } catch (erro) {
    console.error('Erro na requisição:', erro);
  }
}

// Inicializa o carregamento ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
  const noticiaId = obterNoticiaIdDaUrl();
  if (noticiaId) {
    carregarComentarios(noticiaId);
  }
});