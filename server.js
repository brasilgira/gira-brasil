// Ponto de entrada usado SÓ pra rodar localmente (node server.js).
// A configuração de verdade do Express (rotas, middlewares) mora em
// app.js — este arquivo só dá o app.listen() numa porta, coisa que a
// Vercel não usa (ela chama api/index.js diretamente).

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
