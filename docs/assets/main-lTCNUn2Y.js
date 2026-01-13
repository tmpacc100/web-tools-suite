import{s as t}from"./layout-B8U7C2NI.js";/* empty css              */t("home","ホーム");const e=document.querySelector("#app"),l=[{id:"qrcode",title:"QRコード作成",desc:"色変更・サイズ調整可能なQR作成",icon:"📱",link:"/qrcode.html"},{id:"image",title:"画像圧縮・変換",desc:"JPG/PNG/WebP変換と軽量化",icon:"🖼️",link:"/image.html"},{id:"password",title:"パスワード生成",desc:"強力なランダムパスワード",icon:"🔒",link:"/password.html"},{id:"text",title:"文字数カウント",desc:"リアルタイム行数・単語数計測",icon:"📝",link:"/text.html"},{id:"base64",title:"Base64 変換",desc:"テキスト・画像ファイルの変換",icon:"🔄",link:"/base64.html"},{id:"json",title:"JSON 整形",desc:"見やすいフォーマットに整形",icon:"🔧",link:"/json.html"},{id:"color",title:"カラー変換",desc:"HEX, RGB, HSL 相互変換",icon:"🎨",link:"/color.html"},{id:"uuid",title:"UUID 生成",desc:"ランダムな一意IDを大量生成",icon:"🆔",link:"/uuid.html"},{id:"url",title:"URL 変換",desc:"URLエンコード・デコード",icon:"🌐",link:"/url.html"},{id:"timestamp",title:"Unix時間変換",desc:"日付とタイムスタンプの変換",icon:"⏰",link:"/timestamp.html"},{id:"lorem",title:"ダミーテキスト",desc:"Lorem Ipsum 文章生成",icon:"📄",link:"/lorem.html"},{id:"markdown",title:"Markdown",desc:"リアルタイムプレビュー",icon:"👁️",link:"/markdown.html"},{id:"useragent",title:"UA 解析",desc:"ブラウザ・機種情報の確認",icon:"🔍",link:"/useragent.html"},{id:"diff",title:"テキスト比較",desc:"2つの文章の差分を表示",icon:"⚖️",link:"/diff.html"},{id:"units",title:"単位変換",desc:"長さ・重さ・データの計算",icon:"📏",link:"/units.html"}];e.innerHTML=`
      <div class="glass-panel" style="padding: 40px; text-align: center; margin-bottom: 40px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 16px; background: linear-gradient(90deg, #38bdf8, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Web Tools Suite
        </h1>
        <p style="color: #cbd5e1; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
          登録不要・インストール不要。すべての処理がブラウザ内で完結する、安全で高速なWebツール集です。
        </p>
      </div>

      <div class="tools-grid">
        ${l.map(i=>`
          <div class="glass-panel tool-card" onclick="location.href='${i.link}'" style="cursor: pointer;">
            <div class="tool-icon">${i.icon}</div>
            <div class="tool-title">${i.title}</div>
            <div class="tool-desc">${i.desc}</div>
            <!-- <a href="${i.link}" class="glass-btn">開く</a> -->
          </div>
        `).join("")}
      </div>
    `;
