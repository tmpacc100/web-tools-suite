import '../../style.css';
import { setupLayout } from '../../layout.js';

setupLayout('units', '単位変換');

const categorySel = document.getElementById('unit-category');
const inputVal = document.getElementById('input-val');
const outputVal = document.getElementById('output-val');
const unitFrom = document.getElementById('unit-from');
const unitTo = document.getElementById('unit-to');

const UNITS = {
    length: {
        'm': 1, 'km': 1000, 'cm': 0.01, 'mm': 0.001, 'mi': 1609.34, 'yd': 0.9144, 'ft': 0.3048, 'in': 0.0254
    },
    weight: {
        'kg': 1, 'g': 0.001, 'mg': 0.000001, 'lb': 0.453592, 'oz': 0.0283495, 't': 1000
    },
    data: {
        'B': 1, 'KB': 1024, 'MB': 1048576, 'GB': 1073741824, 'TB': 1099511627776
    },
    temp: {
        'C': 'C', 'F': 'F', 'K': 'K'
    }
};

const populateUnits = () => {
    const cat = categorySel.value;
    const units = Object.keys(UNITS[cat]);

    unitFrom.innerHTML = '';
    unitTo.innerHTML = '';

    units.forEach(u => {
        unitFrom.innerHTML += `<option value="${u}">${u}</option>`;
        unitTo.innerHTML += `<option value="${u}">${u}</option>`;
    });

    // Default selection
    if (cat === 'length') { unitTo.value = 'cm'; }
    if (cat === 'weight') { unitTo.value = 'g'; }
    if (cat === 'data') { unitTo.value = 'KB'; }
    if (cat === 'temp') { unitTo.value = 'F'; }

    convert();
};

const convert = () => {
    const cat = categorySel.value;
    const val = parseFloat(inputVal.value);
    const from = unitFrom.value;
    const to = unitTo.value;

    if (isNaN(val)) return;

    if (cat === 'temp') {
        let celsius = val;
        // To Celsius
        if (from === 'F') celsius = (val - 32) * 5 / 9;
        if (from === 'K') celsius = val - 273.15;

        // From Celsius
        let res = celsius;
        if (to === 'F') res = (celsius * 9 / 5) + 32;
        if (to === 'K') res = celsius + 273.15;

        outputVal.value = res.toFixed(2);
    } else {
        const base = val * UNITS[cat][from];
        const res = base / UNITS[cat][to];
        outputVal.value = res.toFixed(4).replace(/\.?0+$/, ''); // Remove trailing zeros
    }
};

categorySel.addEventListener('change', populateUnits);
unitFrom.addEventListener('change', convert);
unitTo.addEventListener('change', convert);
inputVal.addEventListener('input', convert);

// Init
populateUnits();
