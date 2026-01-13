import { marked } from 'marked';
import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('markdown', 'Markdown プレビュー');

const input = document.getElementById('md-input');
const preview = document.getElementById('md-preview');

const update = () => {
    const val = input.value;
    preview.innerHTML = marked.parse(val);
};

input.addEventListener('input', update);

// Init
input.value = "# Hello World\n\nThis is a **markdown** preview.\n\n- List item 1\n- List item 2";
update();
