import './style.css'
import { initAds } from './ads.js';

const app = document.querySelector('#app');

// Tool Registry
const tools = [
  {
    id: 'qrcode',
    title: 'QRコード作成',
    desc: 'テキストやURLからQRコードを瞬時に作成します。サーバー送信なしで安心。',
    icon: '📱',
    action: () => import('./tools/qrcode/index.js').then(m => m.render())
  },
  {
    id: 'password',
    title: 'パスワード生成',
    desc: '強力で安全なパスワードをブラウザ内で生成します。',
    icon: '🔒',
    action: () => import('./tools/password/index.js').then(m => m.render())
  },
  {
    id: 'image',
    title: '画像圧縮・変換',
    desc: '画質を保ったまま画像サイズを軽量化します。アップロード不要。',
    icon: '🖼️',
    action: () => import('./tools/image/index.js').then(m => m.render())
  }
];

// Router
function renderHome() {
  app.innerHTML = `
    <div class="glass-panel" style="padding: 40px; text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 2.5rem; margin-bottom: 16px; background: linear-gradient(90deg, #38bdf8, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Web Tools Suite
      </h1>
      <p style="color: #cbd5e1; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
        登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。
      </p>
    </div>

    <div class="tools-grid">
      ${tools.map(tool => `
        <div class="glass-panel tool-card" data-tool="${tool.id}" role="button" tabindex="0">
          <div class="tool-icon">${tool.icon}</div>
          <div class="tool-title">${tool.title}</div>
          <div class="tool-desc">${tool.desc}</div>
          <a href="#${tool.id}" class="glass-btn">使ってみる</a>
        </div>
      `).join('')}
    </div>

    <!-- Ad Slot -->
    <div style="text-align: center; margin-top: 40px;">
      <!-- Footer/Grid Ad Unit -->
      <ins class="adsbygoogle ad-responsive"
           style="display:block"
           data-ad-client="ca-pub-0000000000000000"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  `;
  initAds();
}

async function handleRoute() {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    renderHome();
    return;
  }

  const tool = tools.find(t => t.id === hash);
  if (tool) {
    // Show loading or frame
    app.innerHTML = `<div style="text-align:center; padding:50px;">Loading ${tool.title}...</div>`;
    try {
      // Dynamic import of tool module (not implemented yet, catching error)
      await tool.action();
      initAds();
    } catch (e) {
      console.error(e);
      app.innerHTML = `
        <div class="glass-panel tool-view">
          <h2>${tool.title}</h2>
          <p>この機能は現在準備中です。</p>
          <br>
          <a href="#" class="glass-btn">ホームに戻る</a>
        </div>
      `;
    }
  } else {
    renderHome();
  }
}

// Event Listeners
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// Handle Logo Click
document.getElementById('home-link').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '';
});
