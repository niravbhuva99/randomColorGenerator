"use strict";
const colorContainer = document.querySelector(".color-container");
const mainContainer = document.querySelector("#container");

console.log(colorContainer);
const random = function (min, max) {
  const rand = Math.floor(Math.random() * (max - min) + 1) + min;
  return rand;
};

const colorGenarator = () =>
  `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

document.querySelector("h1").style.color = colorGenarator();
for (let i = 0; i < 100; i++) {
  const element = `<div class="color-container"></div>`;
  mainContainer.insertAdjacentHTML("beforeend", element);
}

const colorContainerEls = document.querySelectorAll(".color-container");
colorContainerEls.forEach((ele) => {
  const rgb = colorGenarator();
  ele.style.backgroundColor = rgb;
  ele.textContent = rgb;
});
