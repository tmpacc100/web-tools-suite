import '../../../src/style.css';
import { setupLayout } from '../../layout.js';

setupLayout('hash', 'ハッシュ生成');

const inputArea = document.getElementById('hash-input');
const generateBtn = document.getElementById('generate-btn');
const resultsDiv = document.getElementById('results');

// MD5 implementation
function md5(string) {
    function rotateLeft(value, shift) {
        return (value << shift) | (value >>> (32 - shift));
    }

    function addUnsigned(x, y) {
        return (x + y) >>> 0;
    }

    function md5cycle(x, k) {
        let a = x[0], b = x[1], c = x[2], d = x[3];

        a = ff(a, b, c, d, k[0], 7, 0xD76AA478);
        d = ff(d, a, b, c, k[1], 12, 0xE8C7B756);
        c = ff(c, d, a, b, k[2], 17, 0x242070DB);
        b = ff(b, c, d, a, k[3], 22, 0xC1BDCEEE);
        a = ff(a, b, c, d, k[4], 7, 0xF57C0FAF);
        d = ff(d, a, b, c, k[5], 12, 0x4787C62A);
        c = ff(c, d, a, b, k[6], 17, 0xA8304613);
        b = ff(b, c, d, a, k[7], 22, 0xFD469501);
        a = ff(a, b, c, d, k[8], 7, 0x698098D8);
        d = ff(d, a, b, c, k[9], 12, 0x8B44F7AF);
        c = ff(c, d, a, b, k[10], 17, 0xFFFF5BB1);
        b = ff(b, c, d, a, k[11], 22, 0x895CD7BE);
        a = ff(a, b, c, d, k[12], 7, 0x6B901122);
        d = ff(d, a, b, c, k[13], 12, 0xFD987193);
        c = ff(c, d, a, b, k[14], 17, 0xA679438E);
        b = ff(b, c, d, a, k[15], 22, 0x49B40821);

        a = gg(a, b, c, d, k[1], 5, 0xF61E2562);
        d = gg(d, a, b, c, k[6], 9, 0xC040B340);
        c = gg(c, d, a, b, k[11], 14, 0x265E5A51);
        b = gg(b, c, d, a, k[0], 20, 0xE9B6C7AA);
        a = gg(a, b, c, d, k[5], 5, 0xD62F105D);
        d = gg(d, a, b, c, k[10], 9, 0x02441453);
        c = gg(c, d, a, b, k[15], 14, 0xD8A1E681);
        b = gg(b, c, d, a, k[4], 20, 0xE7D3FBC8);
        a = gg(a, b, c, d, k[9], 5, 0x21E1CDE6);
        d = gg(d, a, b, c, k[14], 9, 0xC33707D6);
        c = gg(c, d, a, b, k[3], 14, 0xF4D50D87);
        b = gg(b, c, d, a, k[8], 20, 0x455A14ED);
        a = gg(a, b, c, d, k[13], 5, 0xA9E3E905);
        d = gg(d, a, b, c, k[2], 9, 0xFCEFA3F8);
        c = gg(c, d, a, b, k[7], 14, 0x676F02D9);
        b = gg(b, c, d, a, k[12], 20, 0x8D2A4C8A);

        a = hh(a, b, c, d, k[5], 4, 0xFFFA3942);
        d = hh(d, a, b, c, k[8], 11, 0x8771F681);
        c = hh(c, d, a, b, k[11], 16, 0x6D9D6122);
        b = hh(b, c, d, a, k[14], 23, 0xFDE5380C);
        a = hh(a, b, c, d, k[1], 4, 0xA4BEEA44);
        d = hh(d, a, b, c, k[4], 11, 0x4BDECFA9);
        c = hh(c, d, a, b, k[7], 16, 0xF6BB4B60);
        b = hh(b, c, d, a, k[10], 23, 0xBEBFBC70);
        a = hh(a, b, c, d, k[13], 4, 0x289B7EC6);
        d = hh(d, a, b, c, k[0], 11, 0xEAA127FA);
        c = hh(c, d, a, b, k[3], 16, 0xD4EF3085);
        b = hh(b, c, d, a, k[6], 23, 0x04881D05);
        a = hh(a, b, c, d, k[9], 4, 0xD9D4D039);
        d = hh(d, a, b, c, k[12], 11, 0xE6DB99E5);
        c = hh(c, d, a, b, k[15], 16, 0x1FA27CF8);
        b = hh(b, c, d, a, k[2], 23, 0xC4AC5665);

        a = ii(a, b, c, d, k[0], 6, 0xF4292244);
        d = ii(d, a, b, c, k[7], 10, 0x432AFF97);
        c = ii(c, d, a, b, k[14], 15, 0xAB9423A7);
        b = ii(b, c, d, a, k[5], 21, 0xFC93A039);
        a = ii(a, b, c, d, k[12], 6, 0x655B59C3);
        d = ii(d, a, b, c, k[3], 10, 0x8F0CCC92);
        c = ii(c, d, a, b, k[10], 15, 0xFFEFF47D);
        b = ii(b, c, d, a, k[1], 21, 0x85845DD1);
        a = ii(a, b, c, d, k[8], 6, 0x6FA87E4F);
        d = ii(d, a, b, c, k[15], 10, 0xFE2CE6E0);
        c = ii(c, d, a, b, k[6], 15, 0xA3014314);
        b = ii(b, c, d, a, k[13], 21, 0x4E0811A1);
        a = ii(a, b, c, d, k[4], 6, 0xF7537E82);
        d = ii(d, a, b, c, k[11], 10, 0xBD3AF235);
        c = ii(c, d, a, b, k[2], 15, 0x2AD7D2BB);
        b = ii(b, c, d, a, k[9], 21, 0xEB86D391);

        x[0] = addUnsigned(a, x[0]);
        x[1] = addUnsigned(b, x[1]);
        x[2] = addUnsigned(c, x[2]);
        x[3] = addUnsigned(d, x[3]);
    }

    function cmn(q, a, b, x, s, t) {
        a = addUnsigned(addUnsigned(a, q), addUnsigned(x, t));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function ff(a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(string);
    const len = data.length;
    const paddedLen = ((len + 8) >>> 6 << 4) + 14;
    const words = new Array(paddedLen + 2).fill(0);

    for (let i = 0; i < len; i++) {
        words[i >>> 2] |= data[i] << ((i % 4) * 8);
    }
    words[len >>> 2] |= 0x80 << ((len % 4) * 8);
    words[paddedLen] = len * 8;

    const state = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476];
    for (let i = 0; i < words.length; i += 16) {
        md5cycle(state, words.slice(i, i + 16));
    }

    return Array.from(state).map(n => {
        return [n & 0xFF, (n >>> 8) & 0xFF, (n >>> 16) & 0xFF, (n >>> 24) & 0xFF];
    }).flat().map(b => b.toString(16).padStart(2, '0')).join('');
}

async function generateHashes() {
    const text = inputArea.value.trim();

    if (!text) {
        alert('テキストを入力してください');
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    try {
        // SHA-256
        const sha256Buffer = await crypto.subtle.digest('SHA-256', data);
        const sha256Hash = Array.from(new Uint8Array(sha256Buffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

        // SHA-1
        const sha1Buffer = await crypto.subtle.digest('SHA-1', data);
        const sha1Hash = Array.from(new Uint8Array(sha1Buffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

        // MD5
        const md5Hash = md5(text);

        // Display results
        document.getElementById('sha256').textContent = sha256Hash;
        document.getElementById('sha1').textContent = sha1Hash;
        document.getElementById('md5').textContent = md5Hash;

        resultsDiv.style.display = 'block';
    } catch (error) {
        alert('ハッシュ生成中にエラーが発生しました');
        console.error(error);
    }
}

generateBtn.addEventListener('click', generateHashes);

inputArea.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        generateHashes();
    }
});

// Copy buttons
document.querySelectorAll('.copy-hash').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const text = document.getElementById(target).textContent;
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = 'コピー完了!';
            setTimeout(() => btn.textContent = 'コピー', 1500);
        });
    });
});

// Share buttons
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = window.location.href;
        const text = 'ハッシュ生成ツール - SHA-256/MD5/SHA-1暗号化';
        if (btn.classList.contains('share-x')) {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (btn.classList.contains('share-line')) {
            window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + ' ' + url)}`, '_blank');
        }
    });
});
