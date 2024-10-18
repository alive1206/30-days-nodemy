// var animationElements = document.querySelectorAll(".show-on-scroll");
// var homeHeading = document.querySelector("#home h1");
// var homeDes = document.querySelector("#home div");

// function toggleAnimationElementInWindow(element) {
//   var rect = element.getClientRects()[0];
//   var heightScreen = window.innerHeight;

//   //Check element co ben trong man hinh
//   if (!(rect.bottom < 0 || rect.top > heightScreen)) {
//     element.classList.add("start");
//   } else {
//     element.classList.remove("start");
//   }
// }

// function checkAnimation() {
//   animationElements.forEach((el) => {
//     toggleAnimationElementInWindow(el);
//   });
// }

// window.onload = toggleAnimationElementInWindow(homeHeading);
// window.onload = toggleAnimationElementInWindow(homeDes);

// window.onscroll = checkAnimation;

let elToShow = document.querySelectorAll(".show-on-scroll");

let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();
  // some browsers support innerHeight, others support documentElement.clientHeight
  let viewHeight = window.innerHeight || document.documentElement.clientHeight;
  console.log(rect);
  console.log(viewHeight);

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top >= 0 && rect.bottom <= viewHeight)
  );
};

function loop() {
  elToShow.forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
}

window.onscroll = loop;

loop();
