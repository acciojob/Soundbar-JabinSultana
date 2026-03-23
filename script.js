//your JS code here. If required.
// Select all sound buttons
const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundFile = button.dataset.sound;

    // Stop current audio if any
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // If it's stop button, just stop audio and return
    if (button.classList.contains("stop")) {
      currentAudio = null;
      return;
    }

    // Play selected audio
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
  });
});