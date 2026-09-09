// ==========================================================================
// GiraBrasil — Autenticação com Supabase (login.html e cadastro.html)
// O restante do site (Jogos, GiraBot, Notícia) continua lendo o "usuário
// logado" do localStorage, então guardamos os dados básicos lá depois que
// o Supabase confirma o login/cadastro. Isso evita reescrever o site todo
// de uma vez — só as telas de auth falam com o banco por enquanto.
// ==========================================================================

const CHAVE_USUARIO = 'girabrasil_usuario';
const SUPABASE_URL = 'https://tybkeihuwpelsmfdmzhj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LpIRhyUfQIl14Ud8vHcoSw_nfTLveAZ';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function obterUsuarioLogado() {
  try {
    const bruto = localStorage.getItem(CHAVE_USUARIO);
    return bruto ? JSON.parse(bruto) : null;
  } catch {
    return null;
  }
}

function definirUsuarioLogado(usuario) {
  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

function sairDaConta() {
  localStorage.removeItem(CHAVE_USUARIO);
  supabaseClient.auth.signOut();
}

function obterRedirectDaUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('redirect');
}

function redirecionarSeJaLogado() {
  if (obterUsuarioLogado()) {
    window.location.href = obterRedirectDaUrl() || 'index.html';
  }
}

// ---- Cadastro ---------------------------------------------------------
// Usa o Supabase Auth (auth.signUp). O nome vai em user_metadata, então
// não precisa de tabela extra pra já funcionar.
async function cadastrarUsuario({ nome, email, senha }) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: senha,
    // "display_name" é a chave que o painel do Supabase (Authentication > Users)
    // procura pra mostrar na coluna "Display name". Guardamos "nome" também
    // pra usar no nosso próprio front-end.
    options: { data: { nome, display_name: nome } }
  });

  if (error) throw error;

  definirUsuarioLogado({
    email,
    nome,
    id: data.user ? data.user.id : null
  });

  return data;
}

// ---- Login -------------------------------------------------------------
async function logarUsuario({ email, senha }) {
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password: senha
    });

    if (error) throw error;

    const meta = (data.user && data.user.user_metadata) || {};
    const nome = meta.nome || meta.display_name || email.split('@')[0];

    definirUsuarioLogado({
      email,
      nome,
      id: data.user ? data.user.id : null
    });

    alert('Login realizado com sucesso!');
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Erro de autenticação:', error);
    const mensagem = error.message === 'Invalid login credentials' 
      ? 'E-mail ou senha incorretos.' 
      : error.message;
    alert('Erro ao entrar: ' + mensagem);
  }
}

// ---- Header (Entrar/Criar conta -> nome + avatar) ------------------------
// Roda em toda página que carrega este arquivo. Troca o bloco
// ".header-acoes" (que por padrão tem os links de Entrar/Criar conta)
// por um mini-perfil com bolinha (iniciais) + nome, quando há usuário
// logado no localStorage.
function renderizarHeaderAuth() {
  const container = document.querySelector('.header-acoes');
  if (!container) return;

  const usuario = obterUsuarioLogado();

  if (!usuario) {
    return; // mantém o HTML padrão (Entrar / Criar conta)
  }

  const nome = usuario.nome || usuario.email.split('@')[0];
  const iniciais = nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(parte => parte[0])
    .join('')
    .toUpperCase();

  container.innerHTML = `
    <div class="perfil-usuario" id="perfilUsuario" title="Clique para sair">
      <span class="perfil-avatar">${iniciais}</span>
      <span class="perfil-nome">${nome}</span>
    </div>
  `;

  document.getElementById('perfilUsuario').addEventListener('click', () => {
    if (confirm('Sair da conta?')) {
      sairDaConta();
      window.location.reload();
    }
  });
}

document.addEventListener('DOMContentLoaded', renderizarHeaderAuth);
async function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  try {
    const resposta = await fetch('http://localhost:3000/api/auth/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      // Salva os dados com o ID REAL gerado pelo Supabase
      localStorage.setItem('girabrasil_usuario', JSON.stringify(dados));
      alert('Conta criada e salva no Supabase com sucesso!');
      window.location.href = 'index.html';
    } else {
      alert(dados.erro || 'Falha ao cadastrar.');
    }
  } catch (erro) {
    console.error('Erro de conexao:', erro);
  }
}
async function cadastrarUsuario(event) {
  // Evita o erro se o event não for passado
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  // Restante da sua lógica de fetch para /api/auth/cadastro...
}