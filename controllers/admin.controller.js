// controllers/admin.controller.js
const adminModel = require("../models/admin.model");

async function listarNoticias(req, res) {
  try {
    const noticias = await adminModel.listarNoticias();
    res.status(200).json(noticias);
  } catch (erro) {
    console.error("Erro ao listar notícias (admin):", erro);
    res.status(500).json({ erro: "Erro ao listar notícias." });
  }
}

async function criarNoticia(req, res) {
  try {
    const { titulo, resumo, conteudo, imagemUrl, categoria, linkFonte, regiaoId } = req.body;

    if (!titulo || !titulo.trim()) {
      return res.status(400).json({ erro: "O título não pode ficar vazio." });
    }

    const noticia = await adminModel.criarNoticia({
      titulo: titulo.trim(),
      resumo: resumo ?? "",
      conteudo: conteudo ?? "",
      imagemUrl,
      categoria,
      linkFonte,
      regiaoId,
      usuarioId: req.usuarioAdmin?.id,
    });

    res.status(201).json({ mensagem: "Notícia criada.", noticia });
  } catch (erro) {
    console.error("Erro ao criar notícia (admin):", erro);
    res.status(500).json({ erro: "Erro ao criar notícia." });
  }
}

async function editarNoticia(req, res) {
  try {
    const { id } = req.params;
    const { titulo, resumo, conteudo, imagemUrl, categoria, linkFonte, regiaoId } = req.body;

    if (!titulo || !titulo.trim()) {
      return res.status(400).json({ erro: "O título não pode ficar vazio." });
    }

    const noticia = await adminModel.editarNoticia(id, {
      titulo: titulo.trim(),
      resumo,
      conteudo: conteudo ?? "",
      imagemUrl,
      categoria,
      linkFonte,
      regiaoId,
    });

    if (!noticia) {
      return res.status(404).json({ erro: "Notícia não encontrada." });
    }

    res.status(200).json({ mensagem: "Notícia atualizada.", noticia });
  } catch (erro) {
    console.error("Erro ao editar notícia (admin):", erro);
    res.status(500).json({ erro: "Erro ao editar notícia." });
  }
}

async function apagarNoticia(req, res) {
  try {
    const { id } = req.params;
    const noticia = await adminModel.apagarNoticia(id);

    if (!noticia) {
      return res.status(404).json({ erro: "Notícia não encontrada." });
    }

    res.status(200).json({ mensagem: "Notícia removida.", noticia });
  } catch (erro) {
    console.error("Erro ao apagar notícia (admin):", erro);
    res.status(500).json({ erro: "Erro ao apagar notícia." });
  }
}

async function listarComentarios(req, res) {
  try {
    const comentarios = await adminModel.listarComentarios();
    res.status(200).json(comentarios);
  } catch (erro) {
    console.error("Erro ao listar comentários (admin):", erro);
    res.status(500).json({ erro: "Erro ao listar comentários." });
  }
}

async function editarComentario(req, res) {
  try {
    const { id } = req.params;
    const { texto } = req.body;

    if (!texto || !texto.trim()) {
      return res.status(400).json({ erro: "O texto do comentário não pode ficar vazio." });
    }

    const comentario = await adminModel.editarComentario(id, texto.trim());

    if (!comentario) {
      return res.status(404).json({ erro: "Comentário não encontrado." });
    }

    res.status(200).json({ mensagem: "Comentário atualizado.", comentario });
  } catch (erro) {
    console.error("Erro ao editar comentário (admin):", erro);
    res.status(500).json({ erro: "Erro ao editar comentário." });
  }
}

async function apagarComentario(req, res) {
  try {
    const { id } = req.params;
    const comentario = await adminModel.apagarComentario(id);

    if (!comentario) {
      return res.status(404).json({ erro: "Comentário não encontrado." });
    }

    res.status(200).json({ mensagem: "Comentário removido.", comentario });
  } catch (erro) {
    console.error("Erro ao apagar comentário (admin):", erro);
    res.status(500).json({ erro: "Erro ao apagar comentário." });
  }
}

module.exports = {
  listarNoticias,
  criarNoticia,
  editarNoticia,
  apagarNoticia,
  listarComentarios,
  editarComentario,
  apagarComentario,
};
