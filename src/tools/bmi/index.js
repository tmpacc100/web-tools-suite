import '../../../src/style.css';
import { setupLayout } from '../../layout.js';

setupLayout('bmi', 'BMI計算機');

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const ageInput = document.getElementById('age');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseInt(ageInput.value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!height || !weight || !age || height <= 0 || weight <= 0) {
        alert('正しい値を入力してください');
        return;
    }

    // Calculate BMI
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    // BMI status
    let status, statusColor;
    if (bmi < 18.5) {
        status = '低体重（やせ）';
        statusColor = '#60a5fa';
    } else if (bmi < 25) {
        status = '普通体重';
        statusColor = '#34d399';
    } else if (bmi < 30) {
        status = '肥満（1度）';
        statusColor = '#fbbf24';
    } else {
        status = '高度肥満';
        statusColor = '#f87171';
    }

    // Ideal weight (BMI 22)
    const idealWeight = 22 * heightM * heightM;

    // Beauty weight (BMI 20)
    const beautyWeight = 20 * heightM * heightM;

    // Basal Metabolic Rate (Harris-Benedict equation)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Display results
    document.getElementById('bmi-value').textContent = bmi.toFixed(1);
    document.getElementById('bmi-status').textContent = status;
    document.getElementById('bmi-status').style.color = statusColor;
    document.getElementById('ideal-weight').textContent = `${idealWeight.toFixed(1)} kg`;
    document.getElementById('beauty-weight').textContent = `${beautyWeight.toFixed(1)} kg`;
    document.getElementById('bmr').textContent = `${Math.round(bmr).toLocaleString()} kcal/日`;

    resultDiv.style.display = 'block';
}

calcBtn.addEventListener('click', calculateBMI);

[heightInput, weightInput, ageInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateBMI();
    });
});

document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = window.location.href;
        const text = 'BMI計算機 - 肥満度・適正体重・基礎代謝を計算';
        if (btn.classList.contains('share-x')) {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (btn.classList.contains('share-line')) {
            window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + ' ' + url)}`, '_blank');
        }
    });
});
