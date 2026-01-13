import '../../style.css';
import { setupLayout } from '../../layout.js';

// Init Layout
setupLayout('password', 'パスワード生成');

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
