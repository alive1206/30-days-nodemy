var p = document.querySelector(".typing-wrapper p");
var originContent = p.innerText;
var index = 0;
var isForward = true;
setInterval(() => {
  if (isForward) {
    p.innerText = originContent.substring(0, index);
    p.style.animation = "blink 1s ease infinite";
    index++;

    if (index > originContent.length) {
      isForward = false;
    }
  }
}, 150);

setInterval(() => {
  if (!isForward) {
    p.innerText = originContent.substring(0, index);
    index--;

    if (index <= 0) {
      isForward = true;
    }
  }
}, 30);
