import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('json', 'JSON 整形');

const input = document.getElementById('json-input');
const formatBtn = document.getElementById('action-format');
const minifyBtn = document.getElementById('action-minify');
const copyBtn = document.getElementById('copy-btn');
const errorMsg = document.getElementById('error-msg');

const process = (minify) => {
    const val = input.value.trim();
    if (!val) return;

    try {
        const obj = JSON.parse(val);
        if (minify) {
            input.value = JSON.stringify(obj);
        } else {
            input.value = JSON.stringify(obj, null, 2);
        }
        errorMsg.style.display = 'none';
        input.style.borderColor = 'var(--glass-border)';
    } catch (e) {
        errorMsg.textContent = 'エラー: 無効なJSONです (' + e.message + ')';
        errorMsg.style.display = 'block';
        input.style.borderColor = '#ef4444';
    }
};

formatBtn.addEventListener('click', () => process(false));
minifyBtn.addEventListener('click', () => process(true));

copyBtn.addEventListener('click', () => {
    if (!input.value) return;
    navigator.clipboard.writeText(input.value);
    const orig = copyBtn.innerText;
    copyBtn.innerText = '完了';
    setTimeout(() => copyBtn.innerText = orig, 1500);
});
