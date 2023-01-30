const canvas = document.querySelector(".canvas");

let mouseDown = false;
document.body.addEventListener("mousedown", () => (mouseDown = true));
document.body.addEventListener("mouseup", () => (mouseDown = false));

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  div.addEventListener("click", () => {
    let color = getCurrentColor();
    div.style.background = color;
  });
  div.addEventListener("mouseover", () => {
    if (mouseDown) {
      let color = getCurrentColor();
      div.style.background = color;
    }
  });
  canvas.appendChild(div);
}

const fillButton = document.querySelector(".fill-button");
const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  const color = "white";
  fillCanvas(color);
});

fillButton.addEventListener("click", () => {
  const color = getCurrentColor();
  fillCanvas(color);
});

function fillCanvas(color) {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.background = color;
  });
}

function getCurrentColor() {
  let color = document.querySelector("#html5colorpicker");
  return color.value;
}
