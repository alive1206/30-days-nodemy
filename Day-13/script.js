var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");

var img = document.createElement("img");

var regexValidateImage = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

upload.addEventListener("change", function (e) {
  var file = upload.files[0];

  if (!file) return;

  if (!regexValidateImage.exec(upload.value)) {
    alert("Chỉ chấp nhận những file có định dạng ảnh!");
    return;
  }

  //Base64
  //   var fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //   fileReader.onloadend = function (e) {
  //     console.log(e.target.result);
  //     img.src = e.target.result;
  //   };

  //Blob
  if (img.src == "") {
    img.src = URL.createObjectURL(upload.files[0]);
  } else {
    img.src = "";
    img.src = URL.createObjectURL(upload.files[0]);
  }

  preview.appendChild(img);
});
