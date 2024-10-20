var video = document.querySelector("video");
var play = document.querySelector(".play");
var timer = document.querySelector(".timer");
var progressFilled = document.querySelector(".progress-filled");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var volume = document.querySelector(".volume");
var volInput = document.querySelector(".volume input");
var volIcon = document.querySelector(".volume i");
var volCache = 0;

function togglePlay() {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class="bx bx-pause"></i>`;
  } else {
    video.pause();
    play.innerHTML = ` <i class="bx bx-play"></i>`;
  }
}

function timeToMMSS(sec) {
  let minute = Math.floor(sec / 60);
  let second = Math.floor(sec % 60);
  return `${minute}:${second}`;
}

function updateTimer() {
  timer.innerHTML =
    timeToMMSS(video.currentTime) + "/" + timeToMMSS(video.duration);
  let percentProgress = Math.floor((video.currentTime / video.duration) * 100);
  progressFilled.style.width = `${percentProgress}%`;
  if (progressFilled.style.width === "100%") {
    play.innerHTML = ` <i class="bx bx-play"></i>`;
  }
}

function skip(skipTime) {
  video.currentTime += skipTime;
}

function updateVolume() {
  if (video.volume == 0) {
    volIcon.classList.remove("bx-volume-full");
    volIcon.classList.add("bx-volume-mute");
  } else {
    volIcon.classList.add("bx-volume-full");
    volIcon.classList.remove("bx-volume-mute");
  }
}

play.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTimer);
prev.addEventListener("click", function () {
  skip(-5);
});
next.addEventListener("click", function () {
  skip(+5);
});
volInput.addEventListener("change", function () {
  volCache = this.value;
  video.volume = this.value;
  updateVolume();
});

volIcon.addEventListener("click", function () {
  if (video.volume == 0) {
    video.volume = volCache;
    volInput.value = volCache;
  } else {
    video.volume = 0;
    volInput.value = 0;
  }
  updateVolume();
});
