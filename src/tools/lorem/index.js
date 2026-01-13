import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('lorem', 'ダミーテキスト生成');

const btn = document.getElementById('gen-btn');
const countInput = document.getElementById('gen-count');
const typeSelect = document.getElementById('type-select');
const output = document.getElementById('lorem-output');
const copyBtn = document.getElementById('copy-btn');

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const WORDS = LOREM.replace(/[.,]/g, '').split(' ');
const SENTENCES = LOREM.split('. ');

function generate() {
    let count = parseInt(countInput.value);
    if (count < 1) count = 1;

    let res = "";
    const type = typeSelect.value;

    if (type === 'p') {
        // Paragraphs
        for (let i = 0; i < count; i++) {
            res += LOREM + "\n\n";
        }
    } else if (type === 's') {
        // Sentences
        for (let i = 0; i < count; i++) {
            res += SENTENCES[i % SENTENCES.length] + ". ";
        }
    } else {
        // Words
        for (let i = 0; i < count; i++) {
            res += WORDS[i % WORDS.length] + " ";
        }
    }

    output.value = res.trim();
}

btn.addEventListener('click', generate);

copyBtn.addEventListener('click', () => {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value);
    const orig = copyBtn.innerText;
    copyBtn.innerText = '✅ コピー完了';
    setTimeout(() => copyBtn.innerText = orig, 1500);
});

// Init
generate();
