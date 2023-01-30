const canvas = document.querySelector(".canvas");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  div.addEventListener("click", () => div.classList.add("etched"));
  div.addEventListener("mouseover", () => div.classList.add("etched"));
  canvas.appendChild(div);
}

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  
  pixels.forEach(pixel => {
    console.log(pixel.classList);
    
    pixel.classList.remove('etched')
  })
});
