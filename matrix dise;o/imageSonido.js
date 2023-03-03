function playSound(soundPath) {
  if (!cooldown) {
    let audio = new Audio(soundPath);
    audio.play();
    cooldown = true;
    setTimeout(() => {
      cooldown = false;
    }, 1111);
  }
}
let cooldown = false;
