var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var removeAllBtn = document.querySelector(".remove-all");

var tags = [];

function render() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>${tag} <i class="fas fa-times" onClick="removeTag(${i})"></i></li>`;
  }

  content.appendChild(input);
  input.focus();
}

function addTag() {}

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    render();
  }
});

removeAllBtn.addEventListener("click", function () {
  tags = [];
  input.value = "";
  render();
});

function removeTag(index) {
  tags.splice(index, 1);
  input.value = "";
  render();
}
