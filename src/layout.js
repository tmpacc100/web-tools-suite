import { initAds } from './ads.js';

export function setupLayout(pageId, pageTitle) {
  // Inject Font if missing
  if (!document.querySelector('#google-fonts')) {
    const link = document.createElement('link');
    link.id = 'google-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap';
    document.head.appendChild(link);
  }

  // Common Header
  const headerHTML = `
    <header class="glass-panel" style="margin-bottom: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <a href="/" class="logo">WebTools<span style="color:#fff">Suite</span></a>
        <nav class="nav-links">
          <a href="/" class="nav-item ${pageId === 'home' ? 'active' : ''}">ホーム</a>
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
  `;

  // Common Footer
  const footerHTML = `
    <footer>
      <p>&copy; 2026 Web Tools Suite. All logic runs locally in your browser.<br>
        <a href="/privacy.html">プライバシーポリシー</a> | 
        <a href="/terms.html">利用規約</a> | 
        <a href="/contact.html">お問い合わせ</a>
      </p>
    </footer>
  `;

  // Top Ad
  const topAdHTML = `
    <div class="container" style="margin-top: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <ins class="adsbygoogle ad-responsive" style="display:block" data-ad-client="ca-pub-1298950542115439"
          data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>
    </div>
  `;

  // Insert into DOM
  const app = document.getElementById('app');
  if (app) {
    // Insert Header before app
    const headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    headerContainer.innerHTML = headerHTML;
    document.body.insertBefore(headerContainer, app.parentElement); // Insert before main container

    // Insert Top Ad before app
    const adContainer = document.createElement('div');
    adContainer.innerHTML = topAdHTML;
    document.body.insertBefore(adContainer, app.parentElement);

    // Insert Footer after app
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer);
  }

  // Set Title
  if (pageTitle) {
    document.title = `${pageTitle} - Web Tools Suite`;
  }

  // Mobile Menu Logic (Dropdown)
  const dropdownBtn = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
    });
  }

  // Init Ads
  setTimeout(initAds, 500); // Delay slightly to ensure DOM is ready

  // --- SEO INJECTION ---
  const baseUrl = 'https://tmpacc100.github.io';
  const currentUrl = pageId === 'home' ? baseUrl + '/' : `${baseUrl}/${pageId}.html`;
  const description = document.querySelector('meta[name="description"]')?.content || '登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。';

  // 1. Canonical
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = currentUrl;

  // 2. OGP & Twitter Tags
  const metaTags = {
    'og:type': 'website',
    'og:url': currentUrl,
    'og:title': document.title,
    'og:description': description,
    'og:image': `${baseUrl}/vite.svg`, // With more time, unique images per tool would be better
    'og:site_name': 'Web Tools Suite',
    'twitter:card': 'summary',
    'twitter:title': document.title,
    'twitter:description': description,
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    let tag = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      if (name.startsWith('og:')) {
        tag.setAttribute('property', name);
      } else {
        tag.setAttribute('name', name);
      }
      document.head.appendChild(tag);
    }
    tag.content = content;
  });

  // 3. JSON-LD Structured Data
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": pageTitle || "Web Tools Suite",
    "url": currentUrl,
    "description": description,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    }
  };

  let scriptAuth = document.querySelector('#json-ld');
  if (!scriptAuth) {
    scriptAuth = document.createElement('script');
    scriptAuth.id = 'json-ld';
    scriptAuth.type = 'application/ld+json';
    document.head.appendChild(scriptAuth);
  }
  scriptAuth.textContent = JSON.stringify(schema);
}
