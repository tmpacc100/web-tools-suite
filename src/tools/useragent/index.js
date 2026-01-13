import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('useragent', 'UA 解析');

document.getElementById('ua-string').textContent = navigator.userAgent;
document.getElementById('info-browser').textContent = getBrowser(navigator.userAgent);
document.getElementById('info-os').textContent = navigator.platform;
document.getElementById('info-screen').textContent = `${window.screen.width} x ${window.screen.height}`;
document.getElementById('info-lang').textContent = navigator.language;

function getBrowser(ua) {
    if (ua.includes("Chrome")) return "Chrome / Chromium";
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
    if (ua.includes("Edg")) return "Edge";
    return "Unknown";
}
