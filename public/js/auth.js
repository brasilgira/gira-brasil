// ==========================================================================
// GiraBrasil — Autenticação com Supabase (login.html, cadastro.html e
// perfil.html)
//
// IMPORTANTE: este arquivo usa EXCLUSIVAMENTE o Supabase Auth
// (supabaseClient.auth.signUp / signInWithPassword). Não existe mais
// nenhum caminho alternativo via fetch('/api/auth/cadastro') — se essa
// rota ainda existir no backend, ela não é mais chamada por este arquivo,
// porque ter dois sistemas de conta ao mesmo tempo é exatamente o que
// estava causando o login não reconhecer contas criadas pelo outro caminho.
//
// O restante do site (Jogos, GiraBot, Notícia, Perfil) continua lendo o
// "usuário logado" do localStorage — guardamos os dados básicos lá depois
// que o Supabase confirma o login/cadastro. Isso inclui is_admin (lido do
// app_metadata do Supabase — o único lugar em que essa permissão pode ser
// setada, nunca pelo navegador) e criadoEm (data de criação da conta, usada
// na tela de perfil).
// ==========================================================================

const CHAVE_USUARIO = 'girabrasil_usuario';
const SUPABASE_URL = 'https://tybkeihuwpelsmfdmzhj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LpIRhyUfQIl14Ud8vHcoSw_nfTLveAZ';

// Base da API do backend — mesma usada nas outras chamadas do site
// (comentários, etc). Ajustar aqui quando for pra produção.
const API_BASE = 'http://localhost:3000';

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

// ---- Cadastro ------------------------------------------------------------
// Único caminho de cadastro agora: Supabase Auth (auth.signUp).
// O nome vai em user_metadata, então não precisa de tabela extra.
async function cadastrarUsuario(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const nome = document.querySelector('#nome')?.value.trim();
  const email = document.querySelector('#email')?.value.trim();
  const senha = document.querySelector('#senha')?.value.trim();

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: senha,
    options: {
      data: { nome }
    }
  });

  if (error) {
    alert('Erro no cadastro: ' + error.message);
    return;
  }

  if (data.user) {
    definirUsuarioLogado({
      email,
      nome,
      id: data.user.id,
      is_admin: data.user.app_metadata?.is_admin === true,
      criadoEm: data.user.created_at
    });
    alert('Conta criada com sucesso!');
    window.location.href = obterRedirectDaUrl() || 'index.html';
  }
}

// ---- Login -----------------------------------------------------------
async function logarUsuario(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const email = document.querySelector('#email')?.value.trim();
  const senha = document.querySelector('#senha')?.value.trim();

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
      id: data.user ? data.user.id : null,
      is_admin: data.user?.app_metadata?.is_admin === true,
      criadoEm: data.user ? data.user.created_at : null
    });

    alert('Login realizado com sucesso!');
    window.location.href = obterRedirectDaUrl() || 'index.html';
  } catch (error) {
    console.error('Erro de autenticação:', error);
    const mensagem = error.message === 'Invalid login credentials'
      ? 'E-mail ou senha incorretos.'
      : error.message;
    alert('Erro ao entrar: ' + mensagem);
  }
}

// ---- Excluir conta (perfil.html) ------------------------------------------
// Apagar um usuário do Supabase Auth exige a SERVICE_ROLE_KEY, que só existe
// no backend — por isso essa função chama uma rota própria em vez de falar
// direto com o Supabase pelo navegador.
//
// ⚠️ AJUSTAR: URL/método abaixo são um palpite (DELETE /api/conta com o
// token de sessão no header Authorization). Se a rota que vocês já
// construíram tiver outro nome, é só trocar aqui.
async function excluirConta() {
  const usuario = obterUsuarioLogado();
  if (!usuario) return;

  if (!confirm('Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.')) {
    return;
  }

  try {
    const { data: sessaoData } = await supabaseClient.auth.getSession();
    const token = sessaoData?.session?.access_token;

    const resposta = await fetch(`${API_BASE}/api/conta`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    if (!resposta.ok) {
      const erroData = await resposta.json().catch(() => ({}));
      throw new Error(erroData.erro || 'Erro ao excluir conta.');
    }

    sairDaConta();
    alert('Conta excluída com sucesso.');
    window.location.href = 'index.html';
  } catch (erro) {
    console.error('Erro ao excluir conta:', erro);
    alert('Não foi possível excluir a conta agora: ' + erro.message);
  }
}

// ---- Header (Entrar/Criar conta -> nome + avatar) -------------------------
function renderizarHeaderAuth() {
  const container = document.querySelector('.header-acoes');
  if (!container) return;

  const usuario = obterUsuarioLogado();
  if (!usuario) return; // mantém o HTML padrão (Entrar / Criar conta)

  const nome = usuario.nome || usuario.email.split('@')[0];
  const iniciais = nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase();

  container.innerHTML = `
    <a href="perfil.html" class="perfil-usuario" id="perfilUsuario">
      <span class="perfil-avatar">${iniciais}</span>
      <span class="perfil-nome">${nome}</span>
    </a>
  `;

  renderizarLinkAdmin(usuario);
}

// ---- Link "Admin" no header (só aparece pra quem tem is_admin) -----------
function renderizarLinkAdmin(usuario) {
  const linkExistente = document.getElementById('header-link-admin');
  if (linkExistente) linkExistente.remove();

  if (!usuario || !usuario.is_admin) return;

  const link = document.createElement('a');
  link.id = 'header-link-admin';
  link.href = 'admin.html';
  link.textContent = 'Admin';
  link.className = 'header-link-admin';

  const container = document.querySelector('.header-acoes');
  if (container) container.prepend(link);
}

document.addEventListener('DOMContentLoaded', renderizarHeaderAuth);
