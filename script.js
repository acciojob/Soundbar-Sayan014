const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');
const audioContainer = document.getElementById('audio-container');

let currentAudio = null;

// Function to play a sound
function playSound(fileName) {
    // Remove previous audio if exists
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.remove();
    }

    // Create a new audio element and append to DOM
    currentAudio = document.createElement('audio');
    currentAudio.src = `sounds/${fileName}`;
    currentAudio.autoplay = true;
    currentAudio.setAttribute('data-test-audio', 'true'); // optional for testing
    audioContainer.appendChild(currentAudio);
}

// Button click handlers
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

// Stop button
stopBtn.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.remove();
        currentAudio = null;
    }
});