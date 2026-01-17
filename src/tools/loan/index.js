import '../../../src/style.css';
import { setupLayout } from '../../layout.js';

setupLayout('loan', 'ローン計算機');

const amountInput = document.getElementById('loan-amount');
const rateInput = document.getElementById('loan-rate');
const yearsInput = document.getElementById('loan-years');
const bonusInput = document.getElementById('bonus-amount');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');

// Calculate loan payment
function calculateLoan() {
    const amount = parseFloat(amountInput.value) * 10000; // Convert 万円 to 円
    const annualRate = parseFloat(rateInput.value);
    const years = parseInt(yearsInput.value);
    const bonusAmount = parseFloat(bonusInput.value || 0) * 10000; // Convert 万円 to 円

    if (!amount || amount <= 0 || !years || years <= 0 || annualRate < 0) {
        alert('正しい値を入力してください');
        return;
    }

    // Monthly interest rate
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;

    // Calculate monthly principal (excluding bonus portion)
    const regularAmount = amount - (bonusAmount * 2 * years); // Total amount minus all bonus payments

    let monthlyPayment, totalPayment, totalInterest, bonusPayment;

    if (monthlyRate === 0) {
        // No interest case
        monthlyPayment = regularAmount / totalMonths;
        bonusPayment = bonusAmount;
        totalPayment = amount;
        totalInterest = 0;
    } else {
        // Calculate monthly payment for regular portion (元利均等返済)
        if (regularAmount > 0) {
            monthlyPayment = regularAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
        } else {
            monthlyPayment = 0;
        }

        // Calculate bonus payment (元利均等返済 for bonus portion)
        if (bonusAmount > 0) {
            const bonusMonths = years * 2; // Paid twice a year
            const bonusRate = annualRate / 100 / 2; // Semi-annual rate
            bonusPayment = bonusAmount * bonusRate * Math.pow(1 + bonusRate, bonusMonths) /
                (Math.pow(1 + bonusRate, bonusMonths) - 1);
        } else {
            bonusPayment = 0;
        }

        // Total payment and interest
        totalPayment = (monthlyPayment * totalMonths) + (bonusPayment * years * 2);
        totalInterest = totalPayment - amount;
    }

    // Display results
    document.getElementById('monthly-payment').textContent =
        `¥${Math.round(monthlyPayment).toLocaleString()} 円`;
    document.getElementById('bonus-payment').textContent =
        bonusAmount > 0 ? `¥${Math.round(bonusPayment).toLocaleString()} 円` : 'なし';
    document.getElementById('total-payment').textContent =
        `¥${Math.round(totalPayment).toLocaleString()} 円`;
    document.getElementById('total-interest').textContent =
        `¥${Math.round(totalInterest).toLocaleString()} 円`;

    resultDiv.style.display = 'block';
}

// Event listeners
calcBtn.addEventListener('click', calculateLoan);

// Calculate on Enter key
[amountInput, rateInput, yearsInput, bonusInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateLoan();
        }
    });
});

// Share buttons
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = window.location.href;
        const text = 'ローン計算機 - 住宅ローン・自動車ローンの返済額シミュレーション';
        if (btn.classList.contains('share-x')) {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (btn.classList.contains('share-line')) {
            window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + ' ' + url)}`, '_blank');
        }
    });
});
