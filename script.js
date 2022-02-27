const video = document.querySelector("video");

const setup = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  video.srcObject = stream;
};

setup();
