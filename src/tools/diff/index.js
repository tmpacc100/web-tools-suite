import * as Diff from 'diff';
import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('diff', 'テキスト比較');

const oldInput = document.getElementById('diff-old');
const newInput = document.getElementById('diff-new');
const btn = document.getElementById('diff-btn');
const output = document.getElementById('diff-output');

btn.addEventListener('click', () => {
    const oldText = oldInput.value;
    const newText = newInput.value;

    const diff = Diff.diffChars(oldText, newText);

    output.innerHTML = '';
    const fragment = document.createDocumentFragment();

    diff.forEach((part) => {
        const span = document.createElement('span');
        if (part.added) {
            span.className = 'diff-added';
        } else if (part.removed) {
            span.className = 'diff-removed';
        } else {
            span.className = 'diff-no-change';
        }
        span.textContent = part.value;
        fragment.appendChild(span);
    });

    output.appendChild(fragment);
});
