//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    stopAllSounds();
    const audio = new Audio(`sounds/${btn.innerText}.mp3`);
    audio.play();
  });
});

document.querySelector('.stop').addEventListener('click', stopAllSounds);

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
