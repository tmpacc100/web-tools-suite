import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('timestamp', 'Unix時間変換');

const currentUnixEl = document.getElementById('current-unix');
const tsInput = document.getElementById('ts-input');
const tsResult = document.getElementById('ts-result');
const tsBtn = document.getElementById('ts-convert-btn');

const dateInput = document.getElementById('date-input');
const dateResult = document.getElementById('date-result');
const dateBtn = document.getElementById('date-convert-btn');

// Update Current Time Loop
setInterval(() => {
    currentUnixEl.textContent = Math.floor(Date.now() / 1000);
}, 1000);
currentUnixEl.textContent = Math.floor(Date.now() / 1000);

// TS to Date
tsBtn.addEventListener('click', () => {
    const val = parseInt(tsInput.value);
    if (isNaN(val)) return;

    // Check if ms or s (heuristic: < 1e11 usually s)
    const date = new Date(val * (val < 1e11 ? 1000 : 1));
    tsResult.textContent = date.toLocaleString();
});

// Date to TS
dateBtn.addEventListener('click', () => {
    if (!dateInput.value) return;
    const date = new Date(dateInput.value);
    const ts = Math.floor(date.getTime() / 1000);
    dateResult.textContent = ts;
});
