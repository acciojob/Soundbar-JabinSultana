// Get all buttons
const buttons = document.querySelectorAll(".btn");

// Store audio objects
const sounds = {
    sound1: new Audio("sounds/sound1.mp3"),
    sound2: new Audio("sounds/sound2.mp3"),
    sound3: new Audio("sounds/sound3.mp3"),
    sound4: new Audio("sounds/sound4.mp3")
};

// Function to stop all sounds
function stopAllSounds() {
    for (let key in sounds) {
        sounds[key].pause();
        sounds[key].currentTime = 0;
    }
}

// Add click events
buttons.forEach(button => {

    button.addEventListener("click", () => {

        // If stop button clicked
        if (button.classList.contains("stop")) {
            stopAllSounds();
            return;
        }

        // Get sound name
        const soundName = button.getAttribute("data-sound");

        // Stop others first
        stopAllSounds();

        // Play selected sound
        sounds[soundName].play();

    });

});