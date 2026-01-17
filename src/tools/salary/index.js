import '../../../src/style.css';
import { setupLayout } from '../../layout.js';

setupLayout('salary', '給料手取り計算機');

const incomeInput = document.getElementById('annual-income');
const dependentsInput = document.getElementById('dependents');
const bonusCheck = document.getElementById('bonus-included');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');

// Calculate take-home salary
function calculateSalary() {
    const annualIncome = parseFloat(incomeInput.value) * 10000; // Convert 万円 to 円
    const dependents = parseInt(dependentsInput.value || 0);
    const bonusIncluded = bonusCheck.checked;

    if (!annualIncome || annualIncome <= 0) {
        alert('正しい年収を入力してください');
        return;
    }

    // Calculate monthly income (approximate)
    const monthlyIncome = annualIncome / 12;

    // Social insurance premiums (概算)
    // Health insurance: ~5% (employee portion)
    const healthInsurance = annualIncome * 0.05;

    // Pension: ~9.15% (employee portion)
    const pension = annualIncome * 0.0915;

    // Employment insurance: ~0.6% (general business)
    const employmentInsurance = annualIncome * 0.006;

    // Total social insurance
    const totalSocialInsurance = healthInsurance + pension + employmentInsurance;

    // Taxable income (after employment income deduction)
    let employmentDeduction;
    if (annualIncome <= 1625000) {
        employmentDeduction = 550000;
    } else if (annualIncome <= 1800000) {
        employmentDeduction = annualIncome * 0.4 - 100000;
    } else if (annualIncome <= 3600000) {
        employmentDeduction = annualIncome * 0.3 + 80000;
    } else if (annualIncome <= 6600000) {
        employmentDeduction = annualIncome * 0.2 + 440000;
    } else if (annualIncome <= 8500000) {
        employmentDeduction = annualIncome * 0.1 + 1100000;
    } else {
        employmentDeduction = 1950000;
    }

    // Basic deduction
    const basicDeduction = 480000;

    // Dependent deduction (38万円 per person, simplified)
    const dependentDeduction = dependents * 380000;

    // Taxable income for income tax
    const taxableIncome = Math.max(0, annualIncome - totalSocialInsurance - employmentDeduction - basicDeduction - dependentDeduction);

    // Income tax (cumulative tax rate)
    let incomeTax = 0;
    if (taxableIncome <= 1950000) {
        incomeTax = taxableIncome * 0.05;
    } else if (taxableIncome <= 3300000) {
        incomeTax = 1950000 * 0.05 + (taxableIncome - 1950000) * 0.1;
    } else if (taxableIncome <= 6950000) {
        incomeTax = 1950000 * 0.05 + 1350000 * 0.1 + (taxableIncome - 3300000) * 0.2;
    } else if (taxableIncome <= 9000000) {
        incomeTax = 1950000 * 0.05 + 1350000 * 0.1 + 3650000 * 0.2 + (taxableIncome - 6950000) * 0.23;
    } else if (taxableIncome <= 18000000) {
        incomeTax = 1950000 * 0.05 + 1350000 * 0.1 + 3650000 * 0.2 + 2050000 * 0.23 + (taxableIncome - 9000000) * 0.33;
    } else {
        incomeTax = 1950000 * 0.05 + 1350000 * 0.1 + 3650000 * 0.2 + 2050000 * 0.23 + 9000000 * 0.33 + (taxableIncome - 18000000) * 0.4;
    }

    // Reconstruction tax (2.1% of income tax)
    incomeTax = incomeTax * 1.021;

    // Resident tax (simplified: ~10% of taxable income)
    const residentTax = taxableIncome * 0.1;

    // Total deductions
    const totalDeduction = totalSocialInsurance + incomeTax + residentTax;

    // Take-home pay
    const annualTakeHome = annualIncome - totalDeduction;
    const monthlyTakeHome = annualTakeHome / 12;

    // Display results
    document.getElementById('annual-take-home').textContent =
        `¥${Math.round(annualTakeHome).toLocaleString()} 円`;
    document.getElementById('monthly-take-home').textContent =
        `¥${Math.round(monthlyTakeHome).toLocaleString()} 円`;
    document.getElementById('health-insurance').textContent =
        `¥${Math.round(healthInsurance).toLocaleString()} 円`;
    document.getElementById('pension').textContent =
        `¥${Math.round(pension).toLocaleString()} 円`;
    document.getElementById('employment-insurance').textContent =
        `¥${Math.round(employmentInsurance).toLocaleString()} 円`;
    document.getElementById('income-tax').textContent =
        `¥${Math.round(incomeTax).toLocaleString()} 円`;
    document.getElementById('resident-tax').textContent =
        `¥${Math.round(residentTax).toLocaleString()} 円`;
    document.getElementById('total-deduction').textContent =
        `¥${Math.round(totalDeduction).toLocaleString()} 円`;

    resultDiv.style.display = 'block';
}

// Event listeners
calcBtn.addEventListener('click', calculateSalary);

// Calculate on Enter key
[incomeInput, dependentsInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateSalary();
        }
    });
});

// Share buttons
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = window.location.href;
        const text = '給料手取り計算機 - 年収から手取り額を計算';
        if (btn.classList.contains('share-x')) {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (btn.classList.contains('share-line')) {
            window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + ' ' + url)}`, '_blank');
        }
    });
});
