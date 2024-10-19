let img = document.querySelector(".zoomer img");
let mirror = document.querySelector(".mirror");
let scope = 4;

img.addEventListener("mousemove", function (e) {
  mirror.classList.remove("hide");

  mirror.style.top = `${e.clientY}px`;
  mirror.style.left = `${e.clientX}px`;

  mirror.style.backgroundSize = `1000px 1000px`;

  var percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100;
  var percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100;

  mirror.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`;
});

img.addEventListener("mouseleave", function (e) {
  mirror.classList.add("hide");
});
