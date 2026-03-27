// Get buttons
const buttons = document.querySelectorAll(".btn");

// Get audio elements
const audios = [
    document.getElementById("audio1"),
    document.getElementById("audio2"),
    document.getElementById("audio3"),
    document.getElementById("audio4"),
    document.getElementById("audio5"),
    document.getElementById("audio6")
];

// Stop all audio
function stopAllSounds() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Button click events
buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        // If stop button
        if (button.classList.contains("stop")) {
            stopAllSounds();
            return;
        }

        // Stop others
        stopAllSounds();

        // Play selected audio
        audios[index].play();

    });

});