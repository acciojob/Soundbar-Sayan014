const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById("buttons");

// ✅ Create buttons and audio elements together
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;

  document.body.appendChild(audio);
  buttonsContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    stopAllSounds();
    audio.play();
  });
});

// ✅ Stop button always exists in HTML
document.querySelector(".stop").addEventListener("click", stopAllSounds);

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
