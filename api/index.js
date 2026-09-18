// Este é o arquivo que a Vercel realmente executa.
// Qualquer arquivo dentro de /api vira uma função serverless automaticamente
// — a Vercel chama esse `module.exports` a cada requisição que bater em
// /api/*, passando (req, res), exatamente como o Express espera.
module.exports = require('../app');
