let serial = 0;
const pi = 3.14;
function getInnerTextWithId(textFieldId) {
    const textFieldValue =document.getElementById(textFieldId).innerText;
    return textFieldValue;
}

function showTheCalculation(serial, name, area, convert) {
    const tableContainer = document.getElementById('table_body_container');
    const tr = document.createElement("tr");
    tr.innerHTML =`
    <td>${serial}. <span><small>${name}</small></span></td>
    <td>${area} <span><small>cm<sup>2</sup></small></span></td>
    <td><button class="px-1 py-2 rounded-lg btn-success"><small>convert to m<sup>2</sup></small></button></td>
    `;
tableContainer.appendChild(tr);
}


document.getElementById('btn_three').addEventListener('click', function () {
    serial++;
    const parallelogram = getInnerTextWithId('title_three_parallelogram');
    const parallelogramValueOne = parseInt(getInnerTextWithId('parallelogram_value__one'));
    const parallelogramValueTwo = parseInt(getInnerTextWithId('parallelogram_value__two'));
    const area = parallelogramValueOne * parallelogramValueTwo;
    const convert = 0;
    showTheCalculation(serial, parallelogram, area, convert);
});

document.getElementById('btn-four').addEventListener('click', function () {
    serial++;
    const rhombus = getInnerTextWithId('title_four_rhombus');
    const rhombusValueOne = parseInt(getInnerTextWithId('rhombus_value__one'));
    const rhombusValueTwo = parseInt(getInnerTextWithId('rhombus_value__two'));
    const area = 0.5 * rhombusValueOne * rhombusValueTwo;
    const convert = 0;
    showTheCalculation(serial, rhombus, area, convert);
});

document.getElementById('btn-five').addEventListener('click', function () {
    serial++;
    const pentagon = getInnerTextWithId('title_five_pentagon');
    const pentagonValueOne = parseInt(getInnerTextWithId('pentagon_value_one'));
    const pentagonValueTwo = parseInt(getInnerTextWithId('pentagon_value_two'));
    const convert = 0; 
    const area = (0.5 * pentagonValueOne * pentagonValueTwo).toFixed(2)
    showTheCalculation(serial, pentagon, area, convert);
});


document.getElementById('cart-six').addEventListener('click', function () {
    serial++;
    const ellipseOne = parseInt(getInnerTextWithId('ellipse__value_one'));
    const ellipseTwo = parseInt(getInnerTextWithId('ellipse__value_two'));
    const ellipse = getInnerTextWithId('title_six_ellipse');
    const area = (pi * ellipseOne * ellipseTwo).toFixed(2);
    const convert = 0;
    showTheCalculation(serial, ellipse, area, convert);
    
});