const app = document.getElementById("app");
const video = document.createElement("video");
const socket = io();

const testInput = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
  video.play();
  app.append(video);
});
