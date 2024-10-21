var cardImg = document.querySelector(".card-img");
var h2 = document.querySelector(".card-info h2");
var p = document.querySelector(".card-info p");
var button = document.querySelector(".card-info button");

fetch("https://backoffice.nodemy.vn/api/products?populate=*")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.data[0]);
    // cardImg.classList.remove("loading");
    // p.classList.remove("loading");
    // h2.classList.remove("loading");
    // button.classList.remove("loading");
  });
