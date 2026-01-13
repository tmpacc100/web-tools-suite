import imageCompression from 'browser-image-compression';
import '../../style.css';
import { setupLayout } from '../../layout.js';

// Init Layout
setupLayout('image', '画像圧縮・変換');

// Logic
const input = document.getElementById('img-input');
const fileName = document.getElementById('file-name');
const btn = document.getElementById('compress-btn');
const sizeSel = document.getElementById('max-size');
const widthSel = document.getElementById('max-width');
const formatSel = document.getElementById('convert-format');
const resultArea = document.getElementById('img-result');
const downloadLink = document.getElementById('download-img');

let selectedFile = null;

input.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    selectedFile = e.target.files[0];
    fileName.textContent = selectedFile.name + ` (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`;
    btn.disabled = false;
    resultArea.style.display = 'none';
  }
});

btn.addEventListener('click', async () => {
  if (!selectedFile) return;

  btn.textContent = '処理中...';
  btn.disabled = true;

  try {
    const targetFormat = formatSel.value === 'original' ? undefined : formatSel.value;

    // Note: browser-image-compression primarily supports jpeg/png/webp output
    // fileType overrides the output format

    const options = {
      maxSizeMB: parseFloat(sizeSel.value),
      maxWidthOrHeight: parseInt(widthSel.value) || undefined,
      useWebWorker: true,
      fileType: targetFormat
    };

    const compressedFile = await imageCompression(selectedFile, options);

    // Display results
    document.getElementById('orig-size').textContent = (selectedFile.size / 1024 / 1024).toFixed(2) + ' MB';
    document.getElementById('new-size').textContent = (compressedFile.size / 1024 / 1024).toFixed(2) + ' MB';

    const saved = ((selectedFile.size - compressedFile.size) / selectedFile.size * 100).toFixed(1);
    document.getElementById('percent-saved').textContent = saved + '%';

    // Determining extension
    let ext = selectedFile.name.split('.').pop();
    if (targetFormat === 'image/webp') ext = 'webp';
    if (targetFormat === 'image/jpeg') ext = 'jpg';
    if (targetFormat === 'image/png') ext = 'png';

    const newName = 'compressed_' + selectedFile.name.split('.')[0] + '.' + ext;

    downloadLink.href = URL.createObjectURL(compressedFile);
    downloadLink.download = newName;

    resultArea.style.display = 'block';

    // Scroll to result
    resultArea.scrollIntoView({ behavior: 'smooth' });

    btn.textContent = '圧縮・変換を開始';
    btn.disabled = false;

  } catch (error) {
    console.error(error);
    alert('処理に失敗しました: ' + error.message);
    btn.textContent = '圧縮・変換を開始';
    btn.disabled = false;
  }
});
