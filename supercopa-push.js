// ============================================================
// PUSH NOTIFICATIONS — Supercopa AFC (cliente)
// Arquivo: supercopa-push.js
// Inclua no index.html ANTES do </body>:
//   <script src="/supercopa-push.js"></script>
// ============================================================

// ────────────────────────────────────────────────────────────
// ⚠️  SUBSTITUA pela sua chave pública VAPID
// Gere com: npx web-push generate-vapid-keys
// ────────────────────────────────────────────────────────────
const VAPID_PUBLIC_KEY = 'BGGLy_n_WiVTqP0qWp2li0uP8_f-dZvnzIP4CEhSM-wsNs8wDNQZCc_yLPsbQiZ-IzgKOtecvly7XjOpUx0JFWc';

// URL do seu backend que salva as inscrições
const PUSH_SUBSCRIBE_URL = 'https://supercopa-push-server.onrender.com/api/push/subscribe';

// ────────────────────────────────────────────────────────────
// Inicializa automaticamente quando o DOM carregar
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  if (!isPushSupported()) return;

  registrarServiceWorker();

  // Verifica se usuário já tinha dado permissão antes
  if (Notification.permission === 'granted') {
    inscreverNasPush();
  }
});

// ────────────────────────────────────────────────────────────
// Registra o Service Worker
// ────────────────────────────────────────────────────────────
async function registrarServiceWorker() {
  try {
    const registration = await navigator.serviceWorker.register('/supercopa-app/supercopa-sw.js');
    console.log('[Push] Service Worker registrado:', registration.scope);

    // Escuta mensagens do SW (ex: clique em notificação com app aberto)
    navigator.serviceWorker.addEventListener('message', function (event) {
      if (event.data && event.data.type === 'PUSH_CLICK') {
        tratarCliquePush(event.data.data);
      }
    });
  } catch (err) {
    console.error('[Push] Erro ao registrar SW:', err);
  }
}

// ────────────────────────────────────────────────────────────
// Pede permissão e inscreve o usuário
// Chame esta função no botão "Ativar notificações"
// ────────────────────────────────────────────────────────────
async function ativarNotificacoes() {
  if (!isPushSupported()) {
    mostrarToastPush('Seu navegador não suporta notificações push.', 'erro');
    return false;
  }

  try {
    const permissao = await Notification.requestPermission();

    if (permissao !== 'granted') {
      mostrarToastPush('Permissão de notificações negada.', 'info');
      return false;
    }

    const sucesso = await inscreverNasPush();
    if (sucesso) {
      mostrarToastPush('🔔 Notificações ativadas! Você receberá alertas de jogos e resultados.', 'ok');
    }
    return sucesso;
  } catch (err) {
    console.error('[Push] Erro ao ativar notificações:', err);
    mostrarToastPush('Erro ao ativar notificações. Tente novamente.', 'erro');
    return false;
  }
}

// ────────────────────────────────────────────────────────────
// Desinscreve o usuário
// ────────────────────────────────────────────────────────────
async function desativarNotificacoes() {
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      await sub.unsubscribe();
      await fetch('/api/push/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint: sub.endpoint })
      });
      mostrarToastPush('🔕 Notificações desativadas.', 'info');
    }
  } catch (err) {
    console.error('[Push] Erro ao desativar:', err);
  }
}

// ────────────────────────────────────────────────────────────
// Verifica se notificações estão ativas
// ────────────────────────────────────────────────────────────
async function notificacoesAtivas() {
  if (!isPushSupported()) return false;
  if (Notification.permission !== 'granted') return false;
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    return !!sub;
  } catch {
    return false;
  }
}

// ────────────────────────────────────────────────────────────
// Funções internas
// ────────────────────────────────────────────────────────────
async function inscreverNasPush() {
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly      : true,
      applicationServerKey : urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });

    // Envia inscrição ao backend
    const resp = await fetch(PUSH_SUBSCRIBE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sub)
    });

    if (!resp.ok) throw new Error('Erro ao salvar inscrição no servidor');

    console.log('[Push] Usuário inscrito com sucesso!');
    return true;
  } catch (err) {
    console.error('[Push] Erro ao inscrever:', err);
    return false;
  }
}

function isPushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window;
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64  = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
}

// ────────────────────────────────────────────────────────────
// Quando usuário clica na notificação com o app já aberto
// ────────────────────────────────────────────────────────────
function tratarCliquePush(data) {
  if (!data) return;
  const categoria = data.category || 'geral';

  // Navega para a tela correta do app
  if (categoria === 'jogo' && data.gameId) {
    // Abre o card do jogo — adapte conforme sua função de navegação
    if (typeof showPage === 'function') showPage('jogosPage');
    console.log('[Push] Abrir jogo:', data.gameId);
  } else if (categoria === 'tabela') {
    if (typeof showPage === 'function') showPage('tabelaPage');
  } else if (categoria === 'noticias') {
    if (typeof showPage === 'function') showPage('newsPage');
  }
}

// ────────────────────────────────────────────────────────────
// Toast de feedback visual (usa estilos do app se existirem)
// ────────────────────────────────────────────────────────────
function mostrarToastPush(msg, tipo) {
  // Tenta usar toast nativo do app
  if (typeof showToast === 'function') {
    showToast(msg);
    return;
  }

  // Fallback próprio
  let toast = document.getElementById('_pushToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = '_pushToast';
    toast.style.cssText = `
      position:fixed;bottom:90px;left:14px;right:14px;z-index:9999;
      background:rgba(8,18,40,.97);border:1px solid rgba(244,197,66,.35);
      border-radius:14px;padding:13px 16px;font-size:13px;font-weight:600;
      color:#fff;text-align:center;backdrop-filter:blur(12px);
      transform:translateY(120%);transition:transform .35s cubic-bezier(.34,1.2,.64,1);
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = 'translateY(0)';
  setTimeout(() => { toast.style.transform = 'translateY(120%)'; }, 3500);
}

// Exponha funções globalmente para uso nos botões do HTML
window.ativarNotificacoes    = ativarNotificacoes;
window.desativarNotificacoes = desativarNotificacoes;
window.notificacoesAtivas    = notificacoesAtivas;
