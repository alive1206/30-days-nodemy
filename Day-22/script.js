// var btnList = document.querySelectorAll("button");
// var foodList = document.querySelectorAll(".food-item");

// btnList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     btnList.forEach((item) => {
//       item.classList.remove("active");
//     });
//     e.target.classList.add("active");

//     let type = e.target.getAttribute("type");
//     foodList.forEach((img) => {
//       let foodType = img.getAttribute("type");

//       if (type === "all" || foodType === type) {
//         img.classList.remove("hide");
//       } else {
//         img.classList.add("hide");
//       }
//     });
//   });
// });

var btnList = document.querySelectorAll("button");
var foodItemList = document.querySelectorAll(".food-item");
var foodList = document.querySelector(".food-list");

//init data
var arr = [];
foodItemList.forEach((item) => {
  arr.push({
    src: item.children[0].getAttribute("src"),
    type: item.getAttribute("type"),
  });
});

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnList.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    let type = e.target.getAttribute("type");
    let filterData = arr.filter((food) => {
      return food.type === type;
    });
    if (type === "all") {
      render(arr);
    } else {
      render(filterData);
    }
  });
});

function render(list) {
  foodList.innerHTML = "";
  list.forEach((item) => {
    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("food-item");
    foodList.appendChild(imgWrapper);

    let imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.setAttribute("type", item.type);
    imgWrapper.appendChild(imgElement);
  });
}
