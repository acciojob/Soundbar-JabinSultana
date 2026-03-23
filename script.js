const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

// Create an audio element and add it to DOM
const audioEl = document.createElement("audio");
document.body.appendChild(audioEl);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundFile = button.dataset.sound;

    // Stop current audio
    audioEl.pause();
    audioEl.currentTime = 0;

    // Stop button
    if (button.classList.contains("stop")) {
      audioEl.src = "";
      return;
    }

    // Play selected audio
    audioEl.src = `sounds/${soundFile}`;
    audioEl.play();
  });
});