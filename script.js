const container = document.querySelector(".container");
const gridBtn = document.querySelector(".btn");
var count = 0;

const slider = document.querySelector("#gridRange");
const gridSliderValue = document.querySelector("#gridSliderValue");
;
const colorSliderValue = document.querySelector("#colorRange");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearAll);


// colorSliderValue.addEventListener("input", changeColor)


slider.addEventListener("change", function () {
    const columns = slider.value;
    const gridSize = slider.value * slider.value;
    container.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)"
    gridSliderValue.innerText = columns + " x " + columns;
    container.innerHTML = "";
    for (let i = 0; i < gridSize;i++) {
        var square = document.createElement("div");
        square.className = "square";  
        square.addEventListener("mouseover", draw);
        container.appendChild(square);
    };
    console.log(columns);
})

//change color
// function changeColor() {
//     console.log(colorSliderValue.value)
//     let colorSquare = document.querySelectorAll("#colored")
//     colorSquare.style.backgroundColor = "red";
// }

function defaultGrid() {
    gridSliderValue.innerText = slider.value + " x " + slider.value;
    for (let i = 0; i < slider.value * slider.value;i++) {
        const square = document.createElement("div");
        square.className = "square"; 
        square.addEventListener("mouseover", draw);
        container.appendChild(square);
    };
}

function draw() {
    this.className = " colored";
    this.style.backgroundColor = colorSliderValue.value;
}

function clearAll() {
    container.innerHTML = "";
    defaultGrid();
}

defaultGrid();