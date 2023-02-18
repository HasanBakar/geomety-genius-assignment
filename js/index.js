let serial = 0;
const pi = 3.14;

function getInnerTextWithId(textFieldId) {
    const textFieldValue =document.getElementById(textFieldId).innerText;
    return textFieldValue;
}
function getInputFieldValueWithId(textFieldId) {
    const inputFieldValue =document.getElementById(textFieldId).value;
    return inputFieldValue;
}

function showTheCalculation(serial, name, area) {
    const tableContainer = document.getElementById('table_body_container');
    const tr = document.createElement("tr");
    tr.innerHTML =`
    <td>${serial}. <span><small>${name}</small></span></td>
    <td>${area} <span><small>cm<sup>2</sup></small></span></td>
    <td><button class="px-1 py-2 bold rounded-lg btn-success"><small>convert to m<sup>2</sup></small></button></td>
    `;
tableContainer.appendChild(tr);
}

document.getElementById('btn_triangle_calculate').addEventListener('click', function () {
    serial++;
    const triangle = getInnerTextWithId('title_one_triangle');
    const baseTriangle = Number(getInputFieldValueWithId('base_triangle'));
    const heightTriangle = Number(getInputFieldValueWithId('height_triangle'));
    if(baseTriangle > 0 && heightTriangle > 0){
        const area = (0.5 * baseTriangle * heightTriangle).toFixed(2);
        showTheCalculation(serial, triangle, area);
    }
    else{
  const toast =  document.getElementById('toast_message');
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="toast toast-top toast-center w-[300px]">
  <div class="alert alert-error">
    <div>
      <span>Sorry! you give invalid input!!</span>
    </div>
  </div>
</div>
  `;
  toast.appendChild(div);
 const myTimeout = setTimeout(myGreeting, 1000);

function myGreeting() {
  document.getElementById("toast_message").innerHTML = " "
}
    }

});

document.getElementById('btn_rectangle').addEventListener('click', function () {
    serial++;
    const rectangle = getInnerTextWithId('title_two_rectangle');
    const baseRectangle = Number(getInputFieldValueWithId('base_rectangle'));
    const heightRectangle = Number(getInputFieldValueWithId('height_rectangle'));
    if(baseRectangle > 0 && heightRectangle > 0){
        const area = (baseRectangle * heightRectangle).toFixed(2);
        showTheCalculation(serial, rectangle, area);
    }
    else{
  const toast =  document.getElementById('toast_message');
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="toast toast-top toast-center w-[300px]">
  <div class="alert alert-error">
    <div>
      <span>Sorry! you give invalid input!!</span>
    </div>
  </div>
</div>
  `;
  toast.appendChild(div);
  const myTimeout = setTimeout(myGreeting, 1000);

function myGreeting() {
  document.getElementById("toast_message").innerHTML = " "
}
    }
});


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
    
    showTheCalculation(serial, rhombus, area);
});

document.getElementById('btn-five').addEventListener('click', function () {
    serial++;
    const pentagon = getInnerTextWithId('title_five_pentagon');
    const pentagonValueOne = parseInt(getInnerTextWithId('pentagon_value_one'));
    const pentagonValueTwo = parseInt(getInnerTextWithId('pentagon_value_two'));
    
    const area = (0.5 * pentagonValueOne * pentagonValueTwo).toFixed(2)
    showTheCalculation(serial, pentagon, area);
});


document.getElementById('cart-six').addEventListener('click', function () {
    serial++;
    const ellipseOne = parseInt(getInnerTextWithId('ellipse__value_one'));
    const ellipseTwo = parseInt(getInnerTextWithId('ellipse__value_two'));
    const ellipse = getInnerTextWithId('title_six_ellipse');
    const area = (pi * ellipseOne * ellipseTwo).toFixed(2);
    
    showTheCalculation(serial, ellipse, area);
    
});