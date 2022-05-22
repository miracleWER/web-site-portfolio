let slider = document.getElementById("slider");
let left = document.getElementById("left");
let right = document.getElementById("right");
left.addEventListener("click", leftScroll);
right.addEventListener("click", rightScroll);

function leftScroll() {
  slider.scrollLeft -= 500;
}

function rightScroll() {
  slider.scrollLeft += 500;
}
