(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(){try{const n="pub-1298950542115439",r=document.querySelectorAll(".adsbygoogle");r.length>0&&r.forEach(s=>{s.getAttribute("data-adsbygoogle-status")||(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(n){console.error("AdSense error:",n)}}function u(n,r){if(!document.querySelector("#google-fonts")){const o=document.createElement("link");o.id="google-fonts",o.rel="stylesheet",o.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap",document.head.appendChild(o)}const s=`
    <header class="glass-panel" style="margin-bottom: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <a href="/" class="logo">WebTools<span style="color:#fff">Suite</span></a>
        <nav class="nav-links">
          <a href="/" class="nav-item ${n==="home"?"active":""}">ホーム</a>
          <div class="dropdown">
            <button class="nav-item dropdown-toggle">ツール一覧 ▾</button>
            <div class="dropdown-menu glass-panel">
              <a href="/qrcode.html">📱 QRコード</a>
              <a href="/image.html">🖼️ 画像圧縮</a>
              <a href="/password.html">🔒 パスワード</a>
              <a href="/text.html">📝 文字数</a>
              <a href="/base64.html">🔄 Base64</a>
              <a href="/json.html">🔧 JSON整形</a>
              <a href="/color.html">🎨 カラー変換</a>
              <a href="/uuid.html">🆔 UUID生成</a>
              <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:4px 0;">
              <a href="/url.html">🌐 URL変換</a>
              <a href="/timestamp.html">⏰ Unix時間</a>
              <a href="/lorem.html">📄 Lorem Ipsum</a>
              <a href="/markdown.html">👁️ Markdown</a>
              <a href="/useragent.html">🔍 UA解析</a>
              <a href="/diff.html">⚖️ 差分比較</a>
              <a href="/units.html">📏 単位変換</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `,l=`
    <footer>
      <p>&copy; 2026 Web Tools Suite. All logic runs locally in your browser.<br>
        <a href="/privacy.html">プライバシーポリシー</a> | 
        <a href="/terms.html">利用規約</a> | 
        <a href="/contact.html">お問い合わせ</a>
      </p>
    </footer>
  `,e=`
    <div class="container" style="margin-top: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <ins class="adsbygoogle ad-responsive" style="display:block" data-ad-client="ca-pub-1298950542115439"
          data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>
    </div>
  `,t=document.getElementById("app");if(t){const o=document.createElement("div");o.className="container",o.innerHTML=s,document.body.insertBefore(o,t.parentElement);const d=document.createElement("div");d.innerHTML=e,document.body.insertBefore(d,t.parentElement);const c=document.createElement("div");c.innerHTML=l,document.body.appendChild(c)}r&&(document.title=`${r} - Web Tools Suite`);const a=document.querySelector(".dropdown-toggle"),i=document.querySelector(".dropdown-menu");a&&(a.addEventListener("click",o=>{o.stopPropagation(),i.classList.toggle("show")}),document.addEventListener("click",()=>{i.classList.remove("show")})),setTimeout(m,500)}export{u as s};
