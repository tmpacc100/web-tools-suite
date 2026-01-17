import '../../../src/style.css';
import { setupLayout } from '../../layout.js';

setupLayout('interest', '複利計算機');

const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const yearsInput = document.getElementById('years');
const monthlyInput = document.getElementById('monthly');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');

function calculateCompoundInterest() {
    const principal = parseFloat(principalInput.value) * 10000;
    const annualRate = parseFloat(rateInput.value) / 100;
    const years = parseInt(yearsInput.value);
    const monthlyDeposit = parseFloat(monthlyInput.value || 0) * 10000;

    if (principal < 0 || annualRate < 0 || years <= 0) {
        alert('正しい値を入力してください');
        return;
    }

    const monthlyRate = annualRate / 12;
    const months = years * 12;

    // Calculate future value with compound interest
    // FV = P(1+r)^n + PMT × [((1+r)^n - 1) / r]

    // Future value of initial principal
    const principalFV = principal * Math.pow(1 + monthlyRate, months);

    // Future value of monthly deposits (annuity)
    let depositsFV = 0;
    if (monthlyDeposit > 0 && monthlyRate > 0) {
        depositsFV = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    } else if (monthlyDeposit > 0) {
        depositsFV = monthlyDeposit * months;
    }

    const finalAmount = principalFV + depositsFV;
    const totalPrincipal = principal + (monthlyDeposit * months);
    const totalProfit = finalAmount - totalPrincipal;

    // Display results
    document.getElementById('final-amount').textContent =
        `¥${Math.round(finalAmount).toLocaleString()} 円`;
    document.getElementById('total-principal').textContent =
        `¥${Math.round(totalPrincipal).toLocaleString()} 円`;
    document.getElementById('total-profit').textContent =
        `¥${Math.round(totalProfit).toLocaleString()} 円 (+${((totalProfit / totalPrincipal) * 100).toFixed(1)}%)`;

    resultDiv.style.display = 'block';
}

calcBtn.addEventListener('click', calculateCompoundInterest);

[principalInput, rateInput, yearsInput, monthlyInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateCompoundInterest();
    });
});

document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = window.location.href;
        const text = '複利計算機 - 投資シミュレーション・資産運用計画';
        if (btn.classList.contains('share-x')) {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (btn.classList.contains('share-line')) {
            window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + ' ' + url)}`, '_blank');
        }
    });
});
