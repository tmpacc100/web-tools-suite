export function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="glass-panel tool-view">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <h2 style="font-size: 1.5rem;">🔒 パスワード生成</h2>
        <a href="#" class="glass-btn" style="padding: 8px 16px; font-size: 0.9rem;">戻る</a>
      </div>

      <!-- Result Display -->
      <div style="position: relative; margin-bottom: 24px;">
        <input type="text" id="pw-result" class="glass-input" readonly 
          style="font-size: 1.5rem; text-align: center; padding-right: 50px; height: 60px; font-family: monospace;" 
          placeholder="生成結果がここに表示されます">
        <button id="copy-btn" title="コピー" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem;">
          📋
        </button>
      </div>

      <!-- Controls -->
      <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 24px;">
        <div style="flex: 1; min-width: 200px;">
          <label class="input-label">長さ: <span id="len-val">12</span>文字</label>
          <input type="range" id="pw-length" min="4" max="64" value="12" style="width: 100%; accent-color: var(--accent-color);">
        </div>
        
        <div style="flex: 1; display: flex; flex-direction: column; gap: 10px; justify-content: center;">
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-upper" checked style="accent-color: var(--accent-color); margin-right: 8px;"> A-Z (大文字)
          </label>
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-lower" checked style="accent-color: var(--accent-color); margin-right: 8px;"> a-z (小文字)
          </label>
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-num" checked style="accent-color: var(--accent-color); margin-right: 8px;"> 0-9 (数字)
          </label>
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" id="chk-sym" style="accent-color: var(--accent-color); margin-right: 8px;"> !@# (記号)
          </label>
        </div>
      </div>

      <button id="gen-btn" class="glass-btn" style="width: 100%; border-color: var(--accent-color); font-size: 1.1rem;">
        パスワードを生成する
      </button>

      <!-- Ad Slot -->
      <div style="text-align: center; margin-top: 24px;">
        <ins class="adsbygoogle ad-responsive"
             style="display:block"
             data-ad-client="ca-pub-0000000000000000"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  `;

  // Logic
  const resultEl = document.getElementById('pw-result');
  const copyBtn = document.getElementById('copy-btn');
  const lengthRange = document.getElementById('pw-length');
  const lenVal = document.getElementById('len-val');
  const genBtn = document.getElementById('gen-btn');

  const updateLen = () => lenVal.textContent = lengthRange.value;
  lengthRange.addEventListener('input', updateLen);

  const generate = () => {
    const len = parseInt(lengthRange.value);
    const useUpper = document.getElementById('chk-upper').checked;
    const useLower = document.getElementById('chk-lower').checked;
    const useNum = document.getElementById('chk-num').checked;
    const useSym = document.getElementById('chk-sym').checked;

    if (!useUpper && !useLower && !useNum && !useSym) {
      alert('少なくとも1つの文字種を選択してください');
      return;
    }

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const sym = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNum) chars += num;
    if (useSym) chars += sym;

    let password = '';

    // Ensure at least one of each selected type
    if (useUpper) password += upper[Math.floor(Math.random() * upper.length)];
    if (useLower) password += lower[Math.floor(Math.random() * lower.length)];
    if (useNum) password += num[Math.floor(Math.random() * num.length)];
    if (useSym) password += sym[Math.floor(Math.random() * sym.length)];

    // Fill rest
    for (let i = password.length; i < len; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Shuffle
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    resultEl.value = password;
  };

  genBtn.addEventListener('click', generate);

  copyBtn.addEventListener('click', () => {
    if (!resultEl.value) return;
    navigator.clipboard.writeText(resultEl.value).then(() => {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = '✅';
      setTimeout(() => copyBtn.innerText = originalText, 1500);
    });
  });

  // Init
  generate();
}
