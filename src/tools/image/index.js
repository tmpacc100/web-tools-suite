import imageCompression from 'browser-image-compression';

export function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="glass-panel tool-view">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <h2 style="font-size: 1.5rem;">🖼️ 画像圧縮・変換</h2>
        <a href="#" class="glass-btn" style="padding: 8px 16px; font-size: 0.9rem;">戻る</a>
      </div>

      <div class="input-group">
        <label class="glass-btn" style="display: block; text-align: center; cursor: pointer; border: 2px dashed var(--glass-border);">
          <span>📁 画像ファイルを選択 (またはドラッグ&ドロップ)</span>
          <input type="file" id="img-input" accept="image/*" style="display: none;">
        </label>
        <p id="file-name" style="text-align: center; margin-top: 8px; font-size: 0.9rem; color: #94a3b8;"></p>
      </div>

      <div class="input-group">
        <label class="input-label">最大サイズ (MB) <span style="font-size:0.8em; color:#94a3b8;">※目安</span></label>
        <select id="max-size" class="glass-input">
          <option value="0.1">0.1 MB (かなり軽量)</option>
          <option value="0.5">0.5 MB</option>
          <option value="1" selected>1.0 MB (標準)</option>
          <option value="2">2.0 MB</option>
          <option value="5">5.0 MB (高画質)</option>
        </select>
      </div>

      <div class="input-group">
        <label class="input-label">最大幅/高さ (px)</label>
        <select id="max-width" class="glass-input">
          <option value="800">800 px</option>
          <option value="1280">1280 px</option>
          <option value="1920" selected>1920 px (Full HD)</option>
          <option value="0" >制限なし (オリジナル)</option>
        </select>
      </div>

      <button id="compress-btn" class="glass-btn" style="width: 100%; border-color: var(--accent-color);" disabled>
        圧縮を開始する
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

      <div id="img-result" class="result-area" style="display: none;">
         <h3 style="margin-bottom: 16px;">完了！</h3>
         <p>
           元のサイズ: <span id="orig-size"></span><br>
           圧縮後: <span id="new-size" style="color: var(--accent-color); font-weight: bold;"></span><br>
           <span id="percent-saved"></span> 削減
         </p>
         <br>
         <a id="download-img" class="glass-btn" download="compressed-image.jpg">
           画像をダウンロード
         </a>
      </div>
    </div>
  `;

  // Logic
  const input = document.getElementById('img-input');
  const fileName = document.getElementById('file-name');
  const btn = document.getElementById('compress-btn');
  const sizeSel = document.getElementById('max-size');
  const widthSel = document.getElementById('max-width');
  const resultArea = document.getElementById('img-result');
  const downloadLink = document.getElementById('download-img');

  let selectedFile = null;

  input.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      selectedFile = e.target.files[0];
      fileName.textContent = selectedFile.name + ` (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`;
      btn.disabled = false;
      resultArea.style.display = 'none';
    }
  });

  btn.addEventListener('click', async () => {
    if (!selectedFile) return;

    btn.textContent = '圧縮中...';
    btn.disabled = true;

    try {
      const options = {
        maxSizeMB: parseFloat(sizeSel.value),
        maxWidthOrHeight: parseInt(widthSel.value) || undefined,
        useWebWorker: true
      };

      const compressedFile = await imageCompression(selectedFile, options);

      // Display results
      document.getElementById('orig-size').textContent = (selectedFile.size / 1024 / 1024).toFixed(2) + ' MB';
      document.getElementById('new-size').textContent = (compressedFile.size / 1024 / 1024).toFixed(2) + ' MB';

      const saved = ((selectedFile.size - compressedFile.size) / selectedFile.size * 100).toFixed(1);
      document.getElementById('percent-saved').textContent = saved + '%';

      downloadLink.href = URL.createObjectURL(compressedFile);
      downloadLink.download = 'compressed_' + selectedFile.name;

      resultArea.style.display = 'block';
      btn.textContent = '圧縮を開始する';
      btn.disabled = false;

    } catch (error) {
      console.error(error);
      alert('圧縮に失敗しました: ' + error.message);
      btn.textContent = '圧縮を開始する';
      btn.disabled = false;
    }
  });
}
