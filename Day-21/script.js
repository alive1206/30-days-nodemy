var swBtn = document.querySelector("label");
var body = document.querySelector("body");
var checkBox = document.querySelector("#switch");

function init() {
  let mode = localStorage.getItem("mode") ? "dark" : "";
  mode === "dark" ? (checkBox.checked = true) : (checkBox.checked = false);
  body.setAttribute("class", mode);
}

swBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  let mode = body.getAttribute("class") ? "dark" : "";
  localStorage.setItem("mode", mode);
});

init();
