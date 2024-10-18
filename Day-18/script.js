const boxes = document.querySelectorAll(".box");
const targetList = document.querySelectorAll(".target");

var currentTarget = null;

targetList.forEach((target) => {
  target.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    currentTarget = e.target;
  });

  target.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", (e) => {
    if (!box.querySelector(".target")) {
      box.appendChild(currentTarget);
    }
  });
});
