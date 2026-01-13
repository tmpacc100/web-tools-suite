import QRCode from 'qrcode';

export function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="glass-panel tool-view">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <h2 style="font-size: 1.5rem;">📱 QRコード作成</h2>
        <a href="#" class="glass-btn" style="padding: 8px 16px; font-size: 0.9rem;">戻る</a>
      </div>

      <div class="input-group">
        <label class="input-label">URL または テキストを入力</label>
        <input type="text" id="qr-text" class="glass-input" placeholder="https://example.com" value="">
      </div>

      <div class="input-group">
        <label class="input-label">サイズ (px)</label>
        <select id="qr-size" class="glass-input">
          <option value="200">200x200 (小)</option>
          <option value="300" selected>300x300 (中)</option>
          <option value="500">500x500 (大)</option>
        </select>
      </div>

      <button id="generate-btn" class="glass-btn" style="width: 100%; border-color: var(--accent-color);">
        QRコードを生成する
      </button>

      <!-- Ad Slot -->
      <div style="text-align: center; margin: 24px 0;">
        <ins class="adsbygoogle ad-responsive"
             style="display:block"
             data-ad-client="ca-pub-0000000000000000"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>

      <div id="qr-result" class="result-area" style="display: none;">
        <h3 style="margin-bottom: 16px;">生成結果</h3>
        <div style="background: white; padding: 20px; display: inline-block; border-radius: 8px; margin-bottom: 16px;">
          <img id="qr-image" src="" alt="QR Code" style="display: block;">
        </div>
        <br>
        <a id="download-link" class="glass-btn" download="qrcode.png">
          画像をダウンロード
        </a>
      </div>
    </div>
  `;

  // Logic
  const btn = document.getElementById('generate-btn');
  const input = document.getElementById('qr-text');
  const sizeSelect = document.getElementById('qr-size');
  const resultArea = document.getElementById('qr-result');
  const resultImg = document.getElementById('qr-image');
  const downloadLink = document.getElementById('download-link');

  btn.addEventListener('click', async () => {
    const text = input.value.trim();
    if (!text) {
      alert('テキストを入力してください');
      return;
    }

    const width = parseInt(sizeSelect.value);

    try {
      // Generate QR Code Data URL
      const dataUrl = await QRCode.toDataURL(text, {
        width: width,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });

      resultImg.src = dataUrl;
      downloadLink.href = dataUrl;
      resultArea.style.display = 'block';

      // Animation
      resultArea.style.opacity = '0';
      resultArea.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        resultArea.style.transition = 'all 0.5s ease';
        resultArea.style.opacity = '1';
        resultArea.style.transform = 'translateY(0)';
      });

    } catch (err) {
      console.error(err);
      alert('エラーが発生しました');
    }
  });
}
