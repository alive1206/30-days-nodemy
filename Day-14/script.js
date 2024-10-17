var imgFeature = document.querySelector(".img-feature");
var listImg = document.querySelectorAll(".list-image img");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var currentIndex = 0;

function updateImageByIndex(index) {
  //remove active class
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });

  currentIndex = index;

  //opacity
  //   imgFeature.style.opacity = "0";
  //   setTimeout(() => {
  //     imgFeature.src = listImg[index].getAttribute("src");
  //     imgFeature.style.opacity = "1";
  //   }, 200);

  //animation
  imgFeature.style.animation = "";
  setTimeout(() => {
    imgFeature.src = listImg[index].getAttribute("src");
    imgFeature.style.animation = "fade .5s ease-in-out forwards";
  }, 100);
  listImg[index].parentElement.classList.add("active");

  //hide button if out of album
  //   if (currentIndex === 0) {
  //     prevBtn.classList.add("hide");
  //   } else {
  //     prevBtn.classList.remove("hide");
  //   }
  //   if (currentIndex >= listImg.length - 1) {
  //     nextBtn.classList.add("hide");
  //   } else {
  //     nextBtn.classList.remove("hide");
  //   }
}

listImg.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    updateImageByIndex(index);
  });
});

prevBtn.addEventListener("click", (e) => {
  if (currentIndex !== 0) {
    currentIndex--;
  } else {
    currentIndex = listImg.length - 1;
  }

  updateImageByIndex(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  if (currentIndex < listImg.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateImageByIndex(currentIndex);
});

updateImageByIndex(0);
