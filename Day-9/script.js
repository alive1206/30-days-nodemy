var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var time = document.querySelector(".time");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var content = document.querySelector(".content");

async function changeWeatherUI(input) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  let data = await fetch(apiURL).then((res) => res.json());
  console.log(data);
  const temp = Math.round(data.main.temp);
  if (data.cod === 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "(%)";
    value.innerText = temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("en-US");

    temp >= 18
      ? (document.body.className = "hot")
      : (document.body.className = "cold");
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keydown", function (e) {
  let input = search.value.trim();
  if (e.code === "Enter") {
    changeWeatherUI(input);
  }
});

changeWeatherUI("HaNoi");
