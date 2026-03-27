// Sound names
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

// Create audio elements dynamically
sounds.forEach(sound => {

    const audio = document.createElement("audio");

    audio.src = "sounds/" + sound + ".mp3";
    audio.id = sound;

    document.body.appendChild(audio);

});

// Select buttons
const buttons = document.querySelectorAll(".btn");

// Stop all sounds
function stopAllSounds() {

    sounds.forEach(sound => {

        const audio = document.getElementById(sound);

        audio.pause();
        audio.currentTime = 0;

    });

}

// Add click events
buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Stop button
        if (button.classList.contains("stop")) {

            stopAllSounds();
            return;

        }

        // Get sound name
        const soundName = button.innerText;

        // Stop others
        stopAllSounds();

        // Play sound
        const audio = document.getElementById(soundName);

        audio.play();

    });

});