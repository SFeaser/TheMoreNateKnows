timer = null

function getSelectedVoice() {
  return "sound-effects/voices/" + document.getElementById("voice-select").value;
}

function resetAudio() {
  if (timer) clearTimeout(timer);
  document.getElementById("jingle").load();
  document.getElementById("voice").load();
}

function playVoice() {
  document.getElementById("voice").src = getSelectedVoice();
  document.getElementById("voice").play();
}

function playJingle() {
  document.getElementById("jingle").play();
}

function playAudio() {
  resetAudio();
  playJingle();
  timer = setTimeout(() => {
    playVoice();
    clearTimeout(timer);
  }, 1000);
}

document.getElementById('main-btn').addEventListener('click', playAudio);
document.getElementById('voice-select').addEventListener('change', resetAudio);


