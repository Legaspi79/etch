const container = document.querySelector(".container");
const gridBtn = document.querySelector(".btn");
var count = 0;

const slider = document.querySelector("#range");
const sliderValue = document.querySelector("#sliderValue");



slider.addEventListener("change", function () {
    const columns = slider.value;
    const gridSize = slider.value * slider.value;
    container.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)"
    sliderValue.innerText = columns + " x " + columns;
    container.innerHTML = "";
    for (let i = 0; i < gridSize;i++) {
        const square = document.createElement("div");
        square.className = "square";  
        square.addEventListener("mouseover", draw);
        container.appendChild(square);
    };
    console.log(columns);
})

function defaultGrid() {
    for (let i = 0; i < slider.value * slider.value;i++) {
        const square = document.createElement("div");
        square.className = "square";  
        square.addEventListener("mouseover", draw);
        container.appendChild(square);
    };
}





function down() {
    
};

function draw() {
    this.className += " colored";
}

defaultGrid();