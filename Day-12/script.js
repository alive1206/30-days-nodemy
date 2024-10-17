var process = document.querySelector(".process");
var range = document.querySelector(".range");
var value = document.querySelector(".process span");
var h1 = document.querySelector("h1");

var mouseIsDown = false;

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;

  document.body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
  if (percent < 5) {
    h1.style.color = "black";
  } else {
    h1.style.color = "white";
  }
}

range.addEventListener("mousedown", function () {
  mouseIsDown = true;
});

document.addEventListener("mouseup", function () {
  mouseIsDown = false;
});

range.addEventListener("mousemove", function (e) {
  var processWidth = e.pageX - this.offsetLeft;
  var percent = Math.round((processWidth / this.offsetWidth) * 100);

  if (mouseIsDown === true) {
    updateProcess(percent);
  }
});

console.log(process.style.width);
