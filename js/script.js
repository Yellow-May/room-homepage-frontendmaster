// Slider Events
const prev = document.getElementById("slider-left");
const nxt = document.getElementById("slider-right");

const imgSect = document.getElementById("img-section");
const contSect = document.getElementById("content-section");

prev.addEventListener("click", () => {
  let row = imgSect.getAttribute("data-row");

  switch (row) {
    case "1":
      style("0%", "3");
      break;
    case "2":
      style("-200%", "1");
      break;
    case "3":
      style("-100%", "2");
      break;
    default:
      break;
  }
});

nxt.addEventListener("click", () => {
  let row = imgSect.getAttribute("data-row");

  switch (row) {
    case "1":
      style("-100%", "2");
      break;
    case "2":
      style("0%", "3");
      break;
    case "3":
      style("-200%", "1");
      break;
    default:
      break;
  }
});

function style(pos, row) {
  imgSect.style.left = pos;
  contSect.style.top = pos;
  imgSect.setAttribute("data-row", row);
}

// Nav Event
const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close-btn");

navBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
});
