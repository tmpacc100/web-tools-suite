import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('text', '文字数カウント');

const input = document.getElementById('text-input');
const countAll = document.getElementById('count-all');
const countNoSpace = document.getElementById('count-no-space');
const countLines = document.getElementById('count-lines');

const update = () => {
    const text = input.value;
    countAll.textContent = text.length;
    // Remove spaces, tabs, newlines for "no space" count
    countNoSpace.textContent = text.replace(/\s/g, '').length;
    // Count lines (empty string is 0 lines)
    countLines.textContent = text ? text.split(/\r\n|\r|\n/).length : 0;
};

input.addEventListener('input', update);
