let nike = document.getElementById("nike");

let myBtn = document.getElementById("nike-wrapper");

let hidden = document.getElementById("hidden");

let hidden2 = document.getElementById("hidden2");

let hidden3 = document.getElementById("hidden3");

let hidden4 = document.getElementById("hidden4");

myBtn.addEventListener("mouseover", eventFunc);

function eventFunc() {
  hidden.classList.toggle("hidden");
  hidden2.classList.toggle("hidden");
  hidden3.classList.toggle("hidden");
  hidden4.classList.toggle("hidden");
}
