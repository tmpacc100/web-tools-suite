import{s as l}from"./layout-BmwjRl1I.js";/* empty css              */l("home","ホーム");const t=document.querySelector("#app"),e=[{id:"qrcode",title:"QRコード作成",desc:"色変更・サイズ調整可能なQR作成",icon:"📱",link:"/qrcode.html"},{id:"image",title:"画像圧縮・変換",desc:"JPG/PNG/WebP変換と軽量化",icon:"🖼️",link:"/image.html"},{id:"password",title:"パスワード生成",desc:"強力なランダムパスワード",icon:"🔒",link:"/password.html"},{id:"text",title:"文字数カウント",desc:"リアルタイム行数・単語数計測",icon:"📝",link:"/text.html"},{id:"base64",title:"Base64 変換",desc:"テキスト・画像ファイルの変換",icon:"🔄",link:"/base64.html"},{id:"json",title:"JSON 整形",desc:"見やすいフォーマットに整形",icon:"🔧",link:"/json.html"},{id:"color",title:"カラー変換",desc:"HEX, RGB, HSL 相互変換",icon:"🎨",link:"/color.html"},{id:"uuid",title:"UUID 生成",desc:"ランダムな一意IDを大量生成",icon:"🆔",link:"/uuid.html"},{id:"url",title:"URL 変換",desc:"URLエンコード・デコード",icon:"🌐",link:"/url.html"},{id:"timestamp",title:"Unix時間変換",desc:"日付とタイムスタンプの変換",icon:"⏰",link:"/timestamp.html"},{id:"lorem",title:"ダミーテキスト",desc:"Lorem Ipsum 文章生成",icon:"📄",link:"/lorem.html"},{id:"markdown",title:"Markdown",desc:"リアルタイムプレビュー",icon:"👁️",link:"/markdown.html"},{id:"useragent",title:"UA 解析",desc:"ブラウザ・機種情報の確認",icon:"🔍",link:"/useragent.html"},{id:"diff",title:"テキスト比較",desc:"2つの文章の差分を表示",icon:"⚖️",link:"/diff.html"},{id:"units",title:"単位変換",desc:"長さ・重さ・データの計算",icon:"📏",link:"/units.html"},{id:"loan",title:"ローン計算",desc:"住宅・自動車ローン返済シミュレーション",icon:"💰",link:"/loan.html"},{id:"salary",title:"給料手取り計算",desc:"年収から手取り額を計算",icon:"💵",link:"/salary.html"},{id:"bmi",title:"BMI計算",desc:"肥満度・適正体重・基礎代謝",icon:"🏃",link:"/bmi.html"},{id:"interest",title:"複利計算",desc:"投資シミュレーション・資産運用",icon:"📈",link:"/interest.html"},{id:"hash",title:"ハッシュ生成",desc:"SHA-256/MD5/SHA-1暗号化",icon:"🔐",link:"/hash.html"}];t.innerHTML=`
      <div class="glass-panel" style="padding: 40px; text-align: center; margin-bottom: 40px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 16px; background: linear-gradient(90deg, #38bdf8, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Web Tools Suite
        </h1>
        <p style="color: #cbd5e1; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
          登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。
        </p>
      </div>

      <div class="tools-grid">
        ${e.map(i=>`
          <div class="glass-panel tool-card" onclick="location.href='${i.link}'" style="cursor: pointer;">
            <div class="tool-icon">${i.icon}</div>
            <div class="tool-title">${i.title}</div>
            <div class="tool-desc">${i.desc}</div>
            <!-- <a href="${i.link}" class="glass-btn">開く</a> -->
          </div>
        `).join("")}
      </div>

      <!-- SEO Content -->
      <div class="seo-section" style="max-width: 1000px; margin: 60px auto 0;">
        <article class="seo-content">
            <h2>Web Tools Suite とは？</h2>
            <p>
                「Web Tools Suite」は、プログラマー、デザイナー、ライター、そしてすべてのWebユーザーのための、<strong>完全無料・登録不要</strong>のオンラインツール集です。
                すべての処理がお使いのブラウザ（JavaScript）のみで実行されるため、サーバーに画像やパスワードなどの機密データが送信されることはありません。
                安全かつ高速に、今すぐ作業を開始できます。
            </p>

            <h3>提供ツール一覧</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <div>
                    <strong>🎨 デザイナー向け</strong>
                    <ul>
                        <li><a href="/image.html" style="color:#cbd5e1">画像圧縮・WebP変換</a></li>
                        <li><a href="/color.html" style="color:#cbd5e1">カラーコード変換 (HEX/RGB)</a></li>
                        <li><a href="/lorem.html" style="color:#cbd5e1">ダミーテキスト生成</a></li>
                    </ul>
                </div>
                <div>
                    <strong>🔧 開発者向け</strong>
                    <ul>
                        <li><a href="/json.html" style="color:#cbd5e1">JSON整形・圧縮</a></li>
                        <li><a href="/uuid.html" style="color:#cbd5e1">UUID生成 (v4)</a></li>
                        <li><a href="/base64.html" style="color:#cbd5e1">Base64変換</a></li>
                        <li><a href="/diff.html" style="color:#cbd5e1">テキスト/コード差分比較</a></li>
                    </ul>
                </div>
                <div>
                    <strong>📱 一般・日常用途</strong>
                    <ul>
                        <li><a href="/qrcode.html" style="color:#cbd5e1">QRコード作成</a></li>
                        <li><a href="/password.html" style="color:#cbd5e1">パスワード生成</a></li>
                        <li><a href="/text.html" style="color:#cbd5e1">文字数カウント</a></li>
                    </ul>
                </div>
            </div>

            <h3 style="margin-top:40px;">選ばれる理由</h3>
            <ul>
                <li><strong>高セキュリティ</strong>: クライアントサイド処理により、情報漏洩のリスクがありません。</li>
                <li><strong>完全レスポンシブ</strong>: PC、スマホ、タブレット、どのデバイスでも快適に使えます。</li>
                <li><strong>インストール不要</strong>: アプリのダウンロードは不要。ブックマークするだけでいつでも使えます。</li>
            </ul>
        </article>

        <div class="share-area">
            <a href="#" class="share-btn share-x">Xでシェア</a>
            <a href="#" class="share-btn share-line">LINEで送る</a>
        </div>
      </div>
    `;
