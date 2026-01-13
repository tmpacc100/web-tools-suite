import QRCode from 'qrcode';
import '../../style.css';
import { setupLayout } from '../../layout.js';

// Init Layout
setupLayout('qrcode', 'QRコード作成');

// Logic
const btn = document.getElementById('generate-btn');
const input = document.getElementById('qr-text');
const sizeSelect = document.getElementById('qr-size');
const colorDark = document.getElementById('qr-color-dark');
const colorLight = document.getElementById('qr-color-light');
const resultArea = document.getElementById('qr-result');
const resultImg = document.getElementById('qr-image');
const downloadLink = document.getElementById('download-link');

btn.addEventListener('click', async () => {
  const text = input.value.trim();
  if (!text) {
    alert('テキストを入力してください');
    return;
  }

  const width = parseInt(sizeSelect.value);

  try {
    // Generate QR Code Data URL with Colors
    const dataUrl = await QRCode.toDataURL(text, {
      width: width,
      margin: 1,
      color: {
        dark: colorDark.value,
        light: colorLight.value
      }
    });

    resultImg.src = dataUrl;
    downloadLink.href = dataUrl;
    resultArea.style.display = 'block';

    // Scroll to result
    resultArea.scrollIntoView({ behavior: 'smooth' });

  } catch (err) {
    console.error(err);
    alert('エラーが発生しました');
  }
});
