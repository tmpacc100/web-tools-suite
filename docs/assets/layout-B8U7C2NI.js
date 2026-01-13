(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();function b(){try{const a="pub-1298950542115439",r=document.querySelectorAll(".adsbygoogle");r.length>0&&r.forEach(l=>{l.getAttribute("data-adsbygoogle-status")||(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(a){console.error("AdSense error:",a)}}function v(a,r){if(!document.querySelector("#google-fonts")){const t=document.createElement("link");t.id="google-fonts",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap",document.head.appendChild(t)}const l=`
    <header class="glass-panel" style="margin-bottom: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <a href="/" class="logo">WebTools<span style="color:#fff">Suite</span></a>
        <nav class="nav-links">
          <a href="/" class="nav-item ${a==="home"?"active":""}">ホーム</a>
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
  `,d=`
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
  `,o=document.getElementById("app");if(o){const t=document.createElement("div");t.className="container",t.innerHTML=l,document.body.insertBefore(t,o.parentElement);const m=document.createElement("div");m.innerHTML=e,document.body.insertBefore(m,o.parentElement);const n=document.createElement("div");n.innerHTML=d,document.body.appendChild(n)}r&&(document.title=`${r} - Web Tools Suite`);const s=document.querySelector(".dropdown-toggle"),h=document.querySelector(".dropdown-menu");s&&(s.addEventListener("click",t=>{t.stopPropagation(),h.classList.toggle("show")}),document.addEventListener("click",()=>{h.classList.remove("show")})),setTimeout(b,500);const u="https://tmpacc100.github.io",p=a==="home"?u+"/":`${u}/${a}.html`,f=document.querySelector('meta[name="description"]')?.content||"登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。";let c=document.querySelector('link[rel="canonical"]');c||(c=document.createElement("link"),c.rel="canonical",document.head.appendChild(c)),c.href=p;const g={"og:type":"website","og:url":p,"og:title":document.title,"og:description":f,"og:image":`${u}/vite.svg`,"og:site_name":"Web Tools Suite","twitter:card":"summary","twitter:title":document.title,"twitter:description":f};Object.entries(g).forEach(([t,m])=>{let n=document.querySelector(`meta[property="${t}"]`)||document.querySelector(`meta[name="${t}"]`);n||(n=document.createElement("meta"),t.startsWith("og:")?n.setAttribute("property",t):n.setAttribute("name",t),document.head.appendChild(n)),n.content=m});const y={"@context":"https://schema.org","@type":"WebApplication",name:r||"Web Tools Suite",url:p,description:f,applicationCategory:"UtilitiesApplication",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"JPY"}};let i=document.querySelector("#json-ld");i||(i=document.createElement("script"),i.id="json-ld",i.type="application/ld+json",document.head.appendChild(i)),i.textContent=JSON.stringify(y)}export{v as s};
