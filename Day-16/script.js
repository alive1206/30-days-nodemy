var animationElements = document.querySelectorAll(".show-on-scroll");
var homeHeading = document.querySelector("#home h1");
var homeDes = document.querySelector("#home div");

function toggleAnimationElementInWindow(element) {
  var rect = element.getClientRects()[0];
  var heightScreen = window.innerHeight;

  //Check element co ben trong man hinh
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    element.classList.add("start");
  } else {
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationElementInWindow(el);
  });
}

window.onload = toggleAnimationElementInWindow(homeHeading);
window.onload = toggleAnimationElementInWindow(homeDes);

window.onscroll = checkAnimation;
