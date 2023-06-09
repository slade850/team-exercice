const app = document.getElementById("app");
const video = document.createElement("video");
const videoRetour = document.createElement("video");
const socket = io();

const testInput = (event) => {
  console.log(event.target.value);
  socket.emit("chat message", event.target.value);
};

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
  video.play();
  app.appendChild(video);
  socket.emit("stream", stream);
});

socket.on("stream", (stream) => {
  videoRetour.srcObject = stream;
  videoRetour.play();
  app.appendChild(videoRetour);
});
