const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    stopAllSounds();
    const sound = btn.getAttribute('data-sound');
    document.getElementById(sound).play();
  });
});

document.querySelector('.stop').addEventListener('click', stopAllSounds);

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
