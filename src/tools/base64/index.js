import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('base64', 'Base64 変換');

const input = document.getElementById('b64-input');
const output = document.getElementById('b64-output');
const fileInput = document.getElementById('file-input');
const modeEncode = document.getElementById('mode-encode');
const modeDecode = document.getElementById('mode-decode');
const copyBtn = document.getElementById('copy-btn');
let isEncode = true;

const updateMode = (encode) => {
    isEncode = encode;
    if (isEncode) {
        modeEncode.style.borderColor = 'var(--accent-color)';
        modeDecode.style.borderColor = 'transparent';
        document.getElementById('input-label').textContent = '入力 (テキスト)';
        document.getElementById('file-area').style.display = 'block';
    } else {
        modeEncode.style.borderColor = 'transparent';
        modeDecode.style.borderColor = 'var(--accent-color)';
        document.getElementById('input-label').textContent = '入力 (Base64文字列)';
        document.getElementById('file-area').style.display = 'none';
    }
    process();
};

const process = () => {
    const val = input.value;
    try {
        if (isEncode) {
            // UTF-8 Encode
            output.value = btoa(unescape(encodeURIComponent(val)));
        } else {
            // UTF-8 Decode
            output.value = decodeURIComponent(escape(atob(val)));
        }
    } catch (e) {
        output.value = 'エラー: 変換できませんでした (無効な入力)';
    }
};

modeEncode.addEventListener('click', () => updateMode(true));
modeDecode.addEventListener('click', () => updateMode(false));
input.addEventListener('input', process);

// File Encode
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        input.value = ""; // Clear text input
        output.value = e.target.result; // Data URL (Base64)
    };
    reader.readAsDataURL(file);
});

copyBtn.addEventListener('click', () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
    const orig = copyBtn.innerText;
    copyBtn.innerText = '✅ コピー完了';
    setTimeout(() => copyBtn.innerText = orig, 1500);
});
