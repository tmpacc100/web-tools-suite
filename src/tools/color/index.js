import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('color', 'カラー変換');

const picker = document.getElementById('color-picker');
const hexInput = document.getElementById('hex-input');
const rgbInput = document.getElementById('rgb-input');
const hslInput = document.getElementById('hsl-input');

// Updates all inputs from a Hex value
const updateFromHex = (hex) => {
    // Basic validation
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return;

    picker.value = hex;
    hexInput.value = hex;

    // Hex to RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    rgbInput.value = `rgb(${r}, ${g}, ${b})`;

    // RGB to HSL
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
            case gNorm: h = (bNorm - rNorm) / d + 2; break;
            case bNorm: h = (rNorm - gNorm) / d + 4; break;
        }
        h /= 6;
    }

    hslInput.value = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

picker.addEventListener('input', (e) => updateFromHex(e.target.value));
hexInput.addEventListener('input', (e) => updateFromHex(e.target.value));
// Doing advanced 2-way binding for RGB/HSL is complex, so we limit to HEX driving others for MVP
