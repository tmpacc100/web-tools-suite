import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('uuid', 'UUID 生成');

const btn = document.getElementById('gen-btn');
const countInput = document.getElementById('gen-count');
const output = document.getElementById('uuid-output');
const copyBtn = document.getElementById('copy-btn');

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

btn.addEventListener('click', () => {
    let count = parseInt(countInput.value);
    if (count < 1) count = 1;
    if (count > 1000) count = 1000;

    let res = [];
    for (let i = 0; i < count; i++) {
        res.push(uuidv4());
    }
    output.value = res.join('\n');
});

copyBtn.addEventListener('click', () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
    const orig = copyBtn.innerText;
    copyBtn.innerText = '✅ コピー完了';
    setTimeout(() => copyBtn.innerText = orig, 1500);
});

// Init
btn.click();
