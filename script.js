const container = document.createElement("div")
container.classList.add(`container`)
document.body.appendChild(container);

const buttonCon = document.createElement("div")
buttonCon.classList.add(`buttonCon`)
container.appendChild(buttonCon);

const start = document.createElement("button")
start.textContent="Start"
start.classList.add("button")
buttonCon.appendChild(start)

const resetButton = document.createElement("button")
resetButton.textContent="Reset"
resetButton.classList.add("button")
buttonCon.appendChild(resetButton)

const gridDim = document.createElement("div")
gridDim.classList.add(`gridDim`)
container.appendChild(gridDim);

start.addEventListener('click', function() {
  gridDimension = prompt("How many squares for each side?","")
  if (gridDimension > 100) {
    gridDimension = prompt("try again", "")
  }
  document.documentElement.style.setProperty('--grid-dimension',gridDimension)
  
  for (let i = 1; i <= (gridDimension*gridDimension); i ++) {
    const square = document.createElement("div")
    square.classList.add(`square`)
    gridDim.appendChild(square)
    square.addEventListener("mouseover", function( e ) {
      e.target.style.backgroundColor = "black";
    });
  }
});

resetButton.addEventListener('click', () => {
  window.location.reload();
})





