import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('url', 'URL変換');

const input = document.getElementById('url-input');
const output = document.getElementById('url-output');
const modeEncode = document.getElementById('mode-encode');
const modeDecode = document.getElementById('mode-decode');
const copyBtn = document.getElementById('copy-btn');
let isEncode = true;

const updateMode = (encode) => {
    isEncode = encode;
    if (isEncode) {
        modeEncode.style.borderColor = 'var(--accent-color)';
        modeDecode.style.borderColor = 'transparent';
    } else {
        modeEncode.style.borderColor = 'transparent';
        modeDecode.style.borderColor = 'var(--accent-color)';
    }
    process();
};

const process = () => {
    const val = input.value;
    try {
        if (isEncode) {
            output.value = encodeURIComponent(val);
        } else {
            output.value = decodeURIComponent(val);
        }
    } catch (e) {
        output.value = 'エラー: 変換できませんでした';
    }
};

modeEncode.addEventListener('click', () => updateMode(true));
modeDecode.addEventListener('click', () => updateMode(false));
input.addEventListener('input', process);

copyBtn.addEventListener('click', () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
    const orig = copyBtn.innerText;
    copyBtn.innerText = '✅ コピー完了';
    setTimeout(() => copyBtn.innerText = orig, 1500);
});
