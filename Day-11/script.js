var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");

btnSuccess.addEventListener("click", function () {
  createToast("success");
});

btnWarning.addEventListener("click", function () {
  createToast("warning");
});

btnError.addEventListener("click", function () {
  createToast("error");
});

function createToast(status, timeout) {
  let iconInner = `<i class="fa-solid fa-circle-check"></i>`;
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);

  switch (status) {
    case "success":
      iconInner = `<i class="fa-solid fa-circle-check"></i>`;
      break;
    case "warning":
      iconInner = `<i class="fa-solid fa-circle-exclamation"></i>`;
      break;
    case "error":
      iconInner = `<i class="fa-solid fa-triangle-exclamation"></i>`;
      break;
  }

  toast.innerHTML = `${iconInner}
        <span class="message"> This is a ${status} message.</span>
        <span class="countdown"></span>`;

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  timeout = timeout || 2000;

  setTimeout(function () {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, timeout);

  setTimeout(function () {
    toast.remove();
  }, timeout + 2000);
}
